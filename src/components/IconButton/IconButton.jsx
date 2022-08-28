import React from 'react';


//Style components
import styled from 'styled-components';

const IconButtonSx = styled.button`
	scale: 2;

	border: none;
	background: none;

	cursor: pointer;

	svg {
		fill: var(--light-blue);
		opacity: 1;
		transition: 0.1s;
	}

	svg:hover {
		opacity: 0.6;
	}

	svg:active {
		opacity: 1;
		fill: var(--blue);
	}
`;


//Main component content
const IconButton = ({children}) => {


	//Component render
	return (
		<IconButtonSx className="icon-button">
			{children}
		</IconButtonSx>
	);
};


export default IconButton; //Export main component
