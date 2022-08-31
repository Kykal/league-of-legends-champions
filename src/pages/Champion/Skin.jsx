import React from 'react';


//Redux
import { useSelector } from 'react-redux';


//Style component
import styled from 'styled-components';

const SkinContainer = styled.div`
	width: 100%;
	flex-shrink: 0;
	position: absolute;
	left: ${props => props.left};
	transition: all 100ms linear;
`;

//Main component content
const Skin = ({ skin, id }) => {

	const carousel = useSelector( state => state.carouselValue );

	const leftvalue = `${(id*100)+carousel.actual}%`;

	return (
		<SkinContainer id={skin.name} className="skin-container" left={leftvalue} >
			<h3 id={`${skin.name}-skin__title`} 
				className="skin skin-title"
			>
				{skin.name}
			</h3>
			<div className="images-container"  >
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
		</SkinContainer>
	);
};


export default Skin; //Export main component
