import React, { useEffect, useState } from 'react';


//Axios
import axios from 'axios';


//React router
import { useParams, useNavigate } from 'react-router-dom';


//Main component content
const Champion = () => {
	
	const navigate = useNavigate();

	const { champion, version } = useParams();

	
	const [ championData, setChampionData ] = useState({});

	
	useEffect( () => {

		axios.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${champion}.json`)
			.then( (response) => {
				const data = response.data.data[champion]
				
				const championData = {
					key: data.key,
					name: data.id,
					title: data.title,
					spashArt: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`,
					loadingScreen: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`,
					square: `https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champion}.png`,
					lore: data.lore
				};
				
				
				setChampionData(championData);
			} )
			.catch( () => {
				console.error( "Could not find champion. Redirecting to main page." );
				navigate("/");
			} );
	}, [] );


	//Component render
	return (
		<>
			a
		</>
	);
};


export default Champion; //Export main component
