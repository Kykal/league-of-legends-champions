import React, { useEffect, useState } from 'react';


//Assets
import RiotPointsIcon from 'assets/riotPointsIcon.png';
import BlueEssenceIcon from 'assets/blueEssenceIcon.png';


//Axios
import axios from 'axios';


//React router
import { useParams, useNavigate } from 'react-router-dom';


//Custom components
import Abilities from './Abilities';
import Skins from './Skins';


//Style component
import styled from 'styled-components';

const ChampionContainer = styled.article`
	background-color: var(--blue);

	position: relative;
	z-index: 1;

	box-shadow: 0 0 2em 0.125em black;

	img#champion-splashart {
		width: 100%;
		height: auto;
	}

	.padded {
		padding: 1em;
	}


	hr {
		color: var(--ultra-light-blue);
	}

	section#champion-basic-info {
		div.header {
			display:flex;
			aling-items: center;
			justify-content: space-between;
			
			user-select: none;
	
			div#champion-name-title__container {
				display: flex;
				align-items: center;
				justify-content: flex-start;
			}
			
			p#champion-name-title {
				padding-left: 0.5em;
				font-size: xx-large;
				color: var(--gold);
			}
	
			img#champion-square-icon {
				width: 5em;
				height: 5em;
			}
	
			div#champion-price {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				
				color: var(--dark-gold);
				font-size: larger;
	
				div {
					display: flex;
					align-items: center;
					justify-content: center;
				}
	
				div#champion-price__be {
					padding-right: 0.5em;
				}
	
				div#champion-price__rp {
					border-left: 1px solid var(--dark-gold);
					padding-left: 0.5em;
					padding-right: 1.5em;
					
					span {
						padding-left: 0.25em;
					}
				}
	
				#blue-essence-icon {
					width: 0.75em;
					height: 1em;
				}
	
				#riot-points-icon {
					width: 0.75em;
					height: 0.75em;
				}
			}
		}

		p#champion-lore {
			font-size: larger;
			text-align: justify;
			padding-top: 0.75em;
			padding-left: 1.5em;
			padding-right: 1.5em;
			line-height: 1.75em;
		}
	}
`;



//Main component content
const Champion = () => {
	
	//React router
	const navigate = useNavigate();

	//Get params from URL
	const { champion, version } = useParams();

	//State
	const [ championData, setChampionData ] = useState({});
	
	useEffect( () => {
		const getChampionData = async () => {
			let data = await axios.get(
				`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${champion}.json`
				).catch( () => {
					console.warn( "Could not fetch data. Redirecting to main page." )
				} );
			
			if( data === undefined ){
				navigate("/");
			}

			data = data.data.data[champion];

			const dataSkins = data.skins;
			const skinsArray = [
				{
					num: 0,
					id: parseInt(data.skins[0].id),
					name: "Default",
				}
			];
			dataSkins.shift()
			
			skinsArray.push(
				...dataSkins.map(
					skinData => {
						return {
							num: parseInt(skinData.num),
							id: parseInt(skinData.id),
							name: skinData.name
						};
					}
				)
			);	
			
			const championData = {
				key: parseInt(data.key),
				splashartUrl: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`,
				squareIconUrl: `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion}.png`,
				name: data.name,
				title: data.title,
				blueEssence: 0,
				riotPoints: 0,
				lore: data.lore,
				abilities: {
					p: {
						iconUrl: `https://ddragon.leagueoflegends.com/cdn/12.16.1/img/passive/${data.passive.image.full}`,
						name: data.passive.name
					},
					q: {
						iconUrl: `https://ddragon.leagueoflegends.com/cdn/12.16.1/img/spell/${data.spells[0].id}.png`,
						name: data.spells[0].name
					},
					w: {
						iconUrl: `https://ddragon.leagueoflegends.com/cdn/12.16.1/img/spell/${data.spells[1].id}.png`,
						name: data.spells[1].name
					},
					e: {
						iconUrl: `https://ddragon.leagueoflegends.com/cdn/12.16.1/img/spell/${data.spells[2].id}.png`,
						name: data.spells[2].name
					},
					r: {
						iconUrl: `https://ddragon.leagueoflegends.com/cdn/12.16.1/img/spell/${data.spells[3].id}.png`,
						name: data.spells[3].name
					}
				},
				skins: skinsArray
			};
			setChampionData(championData);
		};

		getChampionData();
	}, [] );

	//Component render
	return (
		<ChampionContainer>
			<img id="champion-splashart" src={championData.splashartUrl} alt={`${championData.name} splashrt`} />
			<section id="champion-basic-info" className="padded" >
				<div className="header">
					<div id="champion-name-title__container" >
						<img id="champion-square-icon" src={championData.squareIconUrl} alt={`${championData.name} square icon`} loading="lazy" />
						<p id="champion-name-title" >
							{championData.name}, {championData.title}
						</p>
					</div>
					<div id="champion-price" >
						<div id="champion-price__be" >
							<img id="blue-essence-icon" src={BlueEssenceIcon} alt="Blue Essence Icon" />
							<span>4800</span>
						</div>
						<div id="champion-price__rp" >
							<img id="riot-points-icon" src={RiotPointsIcon} alt="Riot Points Icon" />
							<span>880</span>
						</div>
					</div>
				</div>
				<p id="champion-lore" >
					{championData.lore}
				</p>
			</section>
			<hr />
			<Abilities abilities={championData.abilities} />
			<Skins skins={championData.skins} />
		</ChampionContainer>
	);
};


export default Champion; //Export main component
