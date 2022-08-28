import React from 'react';


//Style component
import styled from 'styled-components';


const TableContainer = styled.div`
	padding-top: 2em;

	overflow: hidden;
`;

const Table = styled.table`
	width: 100%;

	height: 10em;
	max-height: 10em;	

	td {
		background-color: var(--light-blue);
	}

	border-spacing: 0;
`;

const TableHead = styled.thead`
	background-color: var(--blue);

	th {
		padding-top: 0.5em;
		padding-bottom: 0.5em;
	}

	th.border {
		border-bottom: 1px solid var(--gold);
	}
`;

const TableBody = styled.tbody`
	tr:hover td {
		background-color: var(--ultra-light-blue);
		cursor: pointer;
	}
`;

const Icon = styled.img`
	width: 3em;
	height: 3em;
`;

const TableIcon = styled.td`
	width: 3.75em;
	height: 3.75em;

	div {
		height: 100%;
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const RegionCell = styled.td`
	text-align: center;
`;

const PriceCell = styled.td`
	text-align: center;
`;


//Main component content
const ChampionsTable = ({champions}) => {


	//Component render
	return (
		<TableContainer>
			{champions.length > 0 && (
				<Table>
					<TableHead>
						<tr>
							<th colSpan={2} rowSpan={2} className="border" >Champion</th>
							<th rowSpan={2} className="border" >Region</th>
							<th colSpan={2} >Price</th>
						</tr>
						<tr>
							<th className='border' >Blue essence</th>
							<th className='border' >Riot Points</th>
						</tr>
					</TableHead>
					<TableBody>
						{champions.map( champion => (
							<tr key={champion.key} >
								<TableIcon>
									<div>
										<Icon src={champion.img} alt={`${champion.name} icon`} loading="lazy" />
									</div>
								</TableIcon>
								<td>
									{champion.name}, {champion.title}
								</td>
								<RegionCell>
									Region
								</RegionCell>
								<PriceCell>1200</PriceCell>
								<PriceCell>190</PriceCell>
							</tr>
						) )}
					</TableBody>
				</Table>
			)}
		</TableContainer>
	);
};


export default ChampionsTable; //Export main component
