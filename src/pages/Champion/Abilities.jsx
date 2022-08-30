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
	}

	div#champion-abilities {
		display: flex;
		justify-content: space-around;
		align-items: center;

		padding: 0.75em;

		div {
			flex-grow: 1;

			text-align: center;

			p {
				padding-bottom: 0.75em;
				padding-top: 0.75em;
			}
		}

		div#champion_abilities__p {
			border-right: 1px solid var(--ultra-light-blue);
		}
	}
`;


//Main component content
const Abilities = ({abilities}) => {

	//Component render
	return (
		<>
			{abilities && (
				<SectionSx>
					<h2>Abilities</h2>
					<div id="champion-abilities" className="box">
						<div id="champion_abilities__p" >
							<p><abbr title="Passive">P</abbr></p>
							<img src={abilities.p.iconUrl} alt="" />
							<p>{abilities.p.name}</p>
						</div>
						<div id="champion_abilities__q" >
							<p>Q</p>
							<img src={abilities.q.iconUrl} alt="" />
							<p>{abilities.q.name}</p>
						</div>
						<div id="champion_abilities__w" >
							<p>W</p>
							<img src={abilities.w.iconUrl} alt="" />
							<p>{abilities.w.name}</p>
						</div>
						<div id="champion_abilities__e" >
							<p>E</p>
							<img src={abilities.e.iconUrl} alt="" />
							<p>{abilities.e.name}</p>
						</div>
						<div id="champion_abilities__r" >
							<p>R</p>
							<img src={abilities.r.iconUrl} alt="" />
							<p>{abilities.r.name}</p>
						</div>
					</div>
				</SectionSx>	
			)}
		</>
	);
};


export default Abilities; //Export main component
