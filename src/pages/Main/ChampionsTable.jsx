import React from 'react';


//React router
import { useNavigate } from 'react-router-dom';


//Style component
import styled from 'styled-components';

const TableContainer = styled.div`
	padding-top: 2em;
	padding-bottom: 2em;
	overflow: hidden;
`;

const Table = styled.table`
	width: 100%;
	border-spacing: 0;

	td.text-center, th.text-center {
		text-align: center;
	}

	thead {
		height: 4.25em;
		border-top-left-radius: 0.25em;
		border-top-right-radius: 0.25em;
		
		th.head-cell {
			position: sticky;
			top: 0;
			background-color: var(--blue);
		}

		th.head-divider {
			border-bottom: 1px solid var(--gold);
		}

		th#head-champion {
			width: 34em;
			max-width: 34em;
		}

		th#head-region {
			width: 5.5em;
			max-width: 5.5em;
		}

		th#head-price__blue-essence,
		th#head-price__riot-points {
			width: 11em;
			max-width: 11em;
		}
	}

	tbody {
		td#champion-icon__container {
			width: 3.75em;
			height: 3.75em;

			div {
				display: flex;
				align-items: center;
				justify-content: center;

				img#champion-icon {
					width: 3em;
					height: 3em;
				}
			}
		}

		tr.champion {
			background-color: var(--light-blue);
			cursor: pointer;
			user-select : none;

			:hover {
				background-color: var(--ultra-light-blue);
			}
		}
	}
`;


//Main component content
const ChampionsTable = ({champions}) => {

	//Component render
	return (
		<TableContainer>
			<Table>
				<thead>
					<tr>
						<th colSpan={2} rowSpan={2} id="head-champion" className="head-divider head-cell" >Champion</th>
						<th rowSpan={2} id="head-region" className="head-divider head-cell" >Region</th>
						<th colSpan={2} id="head-price" className="head-cell" >Price</th>
					</tr>
					<tr>
						<th id="head-price__blue-essence" className="head-divider head-cell" >Blue Essence</th>
						<th id="head-price__riot-points" className="head-divider head-cell" >Riot Points</th>
					</tr>
				</thead>
				<tbody>
					{ champions.length === 0 ? (
						<tr className="champion" >
							<td colSpan={5} className="text-center" >
								<h2>
									Loading...
								</h2>
							</td>
						</tr>
					) : (
						<TableBodyContent champions={champions} />
					) }
				</tbody>
			</Table>
		</TableContainer>
	);
};


export default ChampionsTable; //Export main component



const TableBodyContent = ({champions}) => {

	const navigate = useNavigate();

	//Description. What does this?
	const sendToChampionPage = (championName, version) => {
		navigate(`./${version}/${championName}`)
	};

	return(
		<>
			{champions.map( champion => (
				<tr key={champion.key} data-champion={champion.name} id={`champion__${champion.name}`} className="champion" onClick={() => sendToChampionPage(champion.name, champion.version)} >
					<td id="champion-icon__container" >
						<div>
							<img id="champion-icon" src={champion.img} alt={`${champion.name} icon`} loading="lazy" />
						</div>
					</td>
					<td id="champion-name" >
						{champion.name}, {champion.title}
					</td>
					<td className='text-center' >
						Region
					</td>
					<td className='text-center' >1200</td>
					<td className='text-center' >190</td>
				</tr>
			) )}
		</>
	)
};
