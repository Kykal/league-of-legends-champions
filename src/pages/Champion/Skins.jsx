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

	h3#skin-name {
		color: var(--dark-gold);
		font-size: larger;
		font-weight: normal;
		text-align: center;
		
		padding-bottom 0.35em;

	}

	div#champion-skins {

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

//Main component content
const Skins = ({skins}) => {

	console.log( skins );

	//Component render
	return (
		<>
			{skins && (
				<SectionSx>
					<h2>Skins</h2>
					<div className="box">
						<h3 id="skin-name" >{skins[1].name}</h3>
						<div id="champion-skins">
							<img id="loadingScreen" src={skins[1].loadingScreen} alt="" />
							<img id="splashart" src={skins[1].splashart} alt="" />
						</div>
					</div>
				</SectionSx>
			)}
		</>
	);
};


export default Skins; //Export main component
