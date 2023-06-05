//NextJS
'use client';
import { useSearchParams } from "next/navigation";


//React
import { useState, useEffect } from "react";


//Components
import ChampionDisplay from "./_ChampionDisplay";


//Typings
import { ChampionPreview } from "@/typings/champion";
type DisplayChampions = {
	champions: ChampionPreview[];
}


//Main component content
const DisplayChampions = (props: DisplayChampions): JSX.Element => {

	//NextJS
	const searchParams = useSearchParams();

	//States
	const [ champions, setChampions ] = useState<ChampionPreview[]>(props.champions);


	useEffect( () => {
		const query = searchParams.get('query')?.toLocaleLowerCase();

		if(!query){

			setChampions(props.champions);

			return;
		}

		const newValue = props.champions.filter( (champion: ChampionPreview) => {
			const lowerCaseChampionName: string = champion.id.toLocaleLowerCase();

			return lowerCaseChampionName.includes(query);
		} );

		setChampions(newValue);

	}, [searchParams] );


	if( champions.length === 0 ){
		return(
			<div>
				<h2
					className='text-center text-3xl text-gold'
				>
					No results
				</h2>
			</div>
		);
	}

	//Main component render
	return (
		<div
			className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-3 bg-blue p-6'
		>
			{champions.map( (champion: ChampionPreview) => (
				<ChampionDisplay
					key={`champion-${champion.name}-display`}
					champion={champion}
				/>
			) )}
		</div>
	);
};


export default DisplayChampions; //Export main component
