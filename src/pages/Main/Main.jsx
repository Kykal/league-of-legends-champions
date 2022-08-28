import React, { useState, useEffect } from 'react';

//Axios
import axios from 'axios';


//Style component
import styled from 'styled-components';

//Custom components
import SearchChampion	from './SearchChampion';
import ChampionsTable	from './ChampionsTable';

const MainSx = styled.main`
	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

const Container = styled.div`
	min-width: 5em;
	width: 60em;
	max-width: 60em;

	margin-left: 2em;
	margin-right: 2em;
`;



//Main component content
const Main = () => {

	//States
	const [ championsNameAutocomplete, setChampionsNameAutocomplete ] = useState([]);
	const [ championsList, setChampionsList ] = useState([]);

	//On component mount
	useEffect( () => {
		const getChampionsList = async () => {
			let version = await axios.get("https://ddragon.leagueoflegends.com/api/versions.json");
			version = version.data[0];

			let champions = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
			champions = champions.data.data;


			const newChampionsNameAutocomplete = [];
			const newChampionList = [];

			for( const championName in champions ){
				const actualChampion = champions[championName];
				newChampionsNameAutocomplete.push(championName);

				const temporalChampionData = {
					key: actualChampion.key,
					name: actualChampion.id,
					title: actualChampion.title,
					img: `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${actualChampion.id}.png`
				}
				newChampionList.push(temporalChampionData);
			}

			setChampionsNameAutocomplete(newChampionsNameAutocomplete);
			setChampionsList(newChampionList);
		}

		getChampionsList();
	}, [] );


	

	//Component render
	return (
		<MainSx>
			<Container>
				<SearchChampion championsNames={championsNameAutocomplete} />
				<ChampionsTable champions={championsList} />
			</Container>
		</MainSx>
	);
};


export default Main; //Export main component
