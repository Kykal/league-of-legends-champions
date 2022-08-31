import React from 'react';


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

	overflow: auto;

	display: flex;

	div.skin-container {
		width: 100%;
		flex-shrink: 0;
	}

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
const Skins = ({skins}) => {
	//Component render
	return (
		<>
			{skins && (
				<SectionSx>
					<h2>Skins</h2>
					<div className="box">
						<Carousel skins={skins} />
					</div>
				</SectionSx>
			)}
		</>
	);
};


export default Skins; //Export main component


//LOCAL COMPONENTS
const Carousel = ({skins}) => {

	return (
		<CarouselContainer id="carousel" >
			{skins.map( skin => (
				<div id={skin.name} className="skin-container" key={skin.num} >
					<h3 id={`${skin.name}-skin__title`} 
						className="skin skin-title"
					>
						{skin.name}
					</h3>
					<div className="images-container">
						<img id={`${skin.name}-skin__loading-screen`}
							src={skin.loadingScreen}
							alt={`${skin.name} loading screen`}

							className="skin-loading-screen"
						/>
						<img id={`${skin.name}-skin__splashart`}
							src={skin.splashart}
							alt={`${skin.name} splashart`}
							className="skin-splashart"
						/>
					</div>
				</div>
			) )}
		</CarouselContainer>
	);
};
