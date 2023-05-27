//NextJS
'use client';
import { useRouter } from "next/navigation";


//React
import { useState, ChangeEvent, FormEvent } from "react";


//Components
import Input from "./_Input";


//Typings
import { ChampionPreview } from "@/typings/champion";
import SubmitButton from "./_SubmitButton";
type SearchChampion = {
	champions: ChampionPreview[];
};


//Main component content
const SearchChampion = ({champions}: SearchChampion): JSX.Element => {

	const router = useRouter();


	//States
	const [ value, setValue ] = useState<string>('');


	//Handlers
	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const newValue: string = value.trim();

		if( newValue.length === 0 ){
			return;
		}


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
			<Input
				value={value}
				onChange={valueHandler}
				champions={champions}
			/>
			<SubmitButton />
		</form>
	);
};


export default SearchChampion; //Export main component
