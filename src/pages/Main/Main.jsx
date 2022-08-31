import React, { useState, useEffect } from 'react';

//Axios
import axios from 'axios';


//Custom components
import SearchChampion	from './SearchChampion';
import ChampionsTable	from './ChampionsTable';


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

			let champions = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
			champions = champions.data.data;


			const newChampionsNameAutocomplete = [];
			const newChampionList = [];

			for( const championName in champions ){
				const actualChampion = champions[championName];
				newChampionsNameAutocomplete.push(championName);

				const temporalChampionData = {
					key: actualChampion.key,
					name: actualChampion.name,
					id: actualChampion.id,
					title: actualChampion.title,
					img: `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${actualChampion.id}.png`,
					version: version
				}
				newChampionList.push(temporalChampionData);
			}

			setChampionsNameAutocomplete(newChampionsNameAutocomplete);
			setChampionsList(newChampionList);
		}

		document.title = "League of Legends Champions"

		getChampionsList();
	}, [] );


	

	//Component render
	return (
		<>
			<SearchChampion championsNames={championsNameAutocomplete} />
			<ChampionsTable champions={championsList} />
		</>
	);
};


export default Main; //Export main component
