//NextJS
'use client';
import { useRouter } from "next/navigation";


//React
import { useState, ChangeEvent, FormEvent } from "react";


//Typings
import { ChampionPreview } from "@/typings/champion";
type SearchChampionInput = {
	champions: ChampionPreview[];
}


//Main component content
const SearchChampionInput = ({champions}: SearchChampionInput): JSX.Element => {

	const router = useRouter();


	//States
	const [ value, setValue ] = useState<string>('');


	//Handlers
	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const url: string = `/?query=${value.trim()}`;

		router.push(url);
	};

	const valueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};


	//Main component render
	return (
		<form
			className='flex items-center'
			onSubmit={submitHandler}
		>
			<input
				value={value}
				onChange={valueHandler}

				autoComplete='true'
				name='champion-input'
				list='champions-input'
				id='champion-input'
				placeholder='Search for champion...'
				className='bg-blue px-3 py-4 grow text-light-gold'
			/>
			<datalist id='champions-input' >
				{champions.map( (champion: ChampionPreview) => (
					<option
						key={`${champion.name}-datalist-option`}
						value={champion.name}
					>
						{champion.name}
					</option>
				) )}
			</datalist>
		</form>
	);
};


export default SearchChampionInput; //Export main component
