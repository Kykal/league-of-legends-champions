import React, { useEffect } from 'react';


//Redux
import { useSelector, useDispatch }			from 'react-redux';
import { prevSkin, nextSkin, updateMax, updateValue }	from 'features/carouselValue.js';


//Icons
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';


//Custom components
import Skin from './Skin.jsx';


//Style components
import styled from 'styled-components';

const SectionSx = styled.section`
	padding: 2.5em;

	h2 {
		color: var(--gold);
		padding-bottom: 1em;
	}

	div.box {
		background-color: var(--light-blue);
		padding: 1.5em;
	}

	div#champion-skins {

		width: 100%;

		display: flex;

		img#loadingScreen {
			width: 30%;
			height: auto;
		}
		
		img#splashart {
			width: 100%;
			height: auto;
		}	
	}

	div#buttons-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const CarouselContainer = styled.div`
	position: relative;
	height: 25em;
	
	overflow: hidden;

	display: flex;

	h3.skin-title {
		color: var(--dark-gold);
		font-size: larger;
		font-weight: normal;
		text-align: center;
		
		padding-bottom 0.35em;
	}

	div.images-container {
		display: flex;
		
		img.skin-loading-screen{
			width: 30%;
		}

		img.skin-splashart {
			width: 93%;
		}
	}
`;

const Button = styled.button`
	background: none;
	border: none;

	fill: var(--dark-gold);
	color: var(--dark-gold);

	padding: 0.25em;

	margin-top: 0.75em;
	margin-bottom: 0.75em;
	margin-left: 0.25em;
	margin-right: 0.25em;

	transition-duration: 125ms;

	cursor: pointer;

	:hover {
		color: var(--light-gold);
	}

	:disabled {
		color: rgba(193, 145, 68, 0.55);
		cursor: not-allowed;
	}

	svg {
		width: 2em;
		height: 2em;
	}
`;

const OptionSx = styled.button`
	border-radius: 50%;
	background: none;
	border: 0.15em solid var(--dark-gold);

	padding: 0.5em;
	margin: 0.25em;

	cursor: pointer;

	:hover {
		border: 0.15em solid var(--dark-gold);
	}

	&.active {
		background-color: var(--dark-gold);
	}
`;

//Main component content
const Skins = ({skins, len}) => {

	const carouselValue = useSelector( state => state.carouselValue );

	const dispatch = useDispatch();


	useEffect( () => {
		const newMax = (len-1)*(-100);
		newMax !== 0 && dispatch( updateMax(newMax) )
	}, [len, dispatch] );

	//Slide carousel to previous skin (to the left)
	const previousSkinHandler = () => {
		dispatch( prevSkin() );
	};

	//Slide carousel to previous skin (to the left)
	const nextSkinHandler = () => {
		dispatch( nextSkin() );
	};

	//Component render
	return (
		<>
			{skins && (
				<SectionSx>
					<h2>Skins</h2>
					<div className="box">
						<CarouselContainer id="carousel" >
							{skins.map( (skin, key) => <Skin skin={skin} id={key} key={key} /> )}
						</CarouselContainer>
						<div id="buttons-container">
							<Button id="previous-skin" onClick={previousSkinHandler} disabled={ carouselValue.actual === 0 ? true : false } >
								<FiArrowLeftCircle />
							</Button>
							{[...Array(len)].map( (option, index) => <Option key={index} index={index} /> )}
							<Button id="next-skin" onClick={nextSkinHandler} disabled={ carouselValue.actual === carouselValue.max ? true : false  } >
								<FiArrowRightCircle />
							</Button>
						</div>
					</div>
				</SectionSx>
			)}
		</>
	);
};


export default Skins; //Export main component


//Local components
const Option = ({index}) => {

	const carouselValue = useSelector( state => state.carouselValue );
	const dispatch = useDispatch();

	const thisSkinValue = (index*100)*(-1);

	const actualSkin = Math.abs(carouselValue.actual)/100;

	//Move to selected skin
	const onSelectThisSkin = () => {
		dispatch( updateValue(thisSkinValue) );
	};

	return (
		<OptionSx
			data-value={index}
			data-actual={actualSkin}
			className={thisSkinValue === carouselValue.actual ? "active" : ""}
			onClick={onSelectThisSkin}
		/>
	);
};
