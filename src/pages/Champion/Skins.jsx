import React, { useEffect } from 'react';


//Redux
import { useSelector, useDispatch }			from 'react-redux';
import { prevSkin, nextSkin, updateMax }	from 'features/carouselValue.js';

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
						<button onClick={previousSkinHandler} disabled={ carouselValue.actual === 0 ? true : false } >PREV</button>
						<button onClick={nextSkinHandler} disabled={ carouselValue.actual === carouselValue.max ? true : false  } >NEXT</button>
					</div>
				</SectionSx>
			)}
		</>
	);
};


export default Skins; //Export main component
