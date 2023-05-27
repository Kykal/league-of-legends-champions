//NextJS
'use client';
import { useRouter, useSearchParams, usePathname } from "next/navigation";


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

	//NextJS
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();


	//States
	const [ value, setValue ] = useState<string>('');


	//Handlers
	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const newValue: string = value.trim();

		if( newValue.length === 0 ){
			router.push(pathname);
			return;
		}

		const newQuery = new URLSearchParams({
			query: newValue,
		});

		const url: string = `${pathname}?${newQuery}`;

		router.push(url);
	};

	const valueHandler = (event: ChangeEvent<HTMLInputElement>) => {

		const newValue: string = event.target.value;
		
		setValue(newValue);
		
		if( newValue.trim().length === 0 ){
			router.push(pathname);
			return;
		}
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
			<SubmitButton
				value={value}
			/>
		</form>
	);
};


export default SearchChampion; //Export main component
