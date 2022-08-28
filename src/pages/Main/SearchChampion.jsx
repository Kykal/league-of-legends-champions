import React, { useState } from 'react';


//Style components
import styled from 'styled-components';


const FormSx = styled.form`
	min-height: 2.5em;
	height: 2.5em;
	max-height: 2.5em;

	display: flex;
	align-items: center;
`;

const InputSx = styled.input`
	background-color: var(--blue);
	color: var(--white);
	border: none;
	padding: 0.5em 0.75em;

	font-size: larger;

	border-radius: 0.25em 0 0 0.25em;

	flex-grow: 1;

	height: 100%;
`;

const ButtonSx = styled.button`
	height: 100%;
	text-transform: uppercase;
	border: none;
	border-radius: 0 0.25em 0.25em 0;
	padding-left: 0.75em;
	padding-right: 0.75em;

	color: var(--white);

	cursor: pointer;

	background-color: var(--blue);
	border-left: 1px solid var(--dark-blue);

	&:hover {
		background-color: var(--light-blue);	
	}

	&:active {
		background-color: var(--blue);
		border: 1px solid var(--dark-blue);
	}
`;


//Main component content
const SearchChampion = ({championsNames}) => {

	const [ searchValue, setSearchValue ] = useState("");

	//Query champion 
	const onSubmitHandler = (event) => {
		event.preventDefault();
	};

	//Update input state
	const searchValueHandler = (event) => {
		setSearchValue(event.target.value);
	};

	//Component render
	return (
		<FormSx onSubmit={onSubmitHandler} >
			<InputSx type="text" id="search_champion" list="champions" placeholder="Champion" value={searchValue} onChange={searchValueHandler} />
			<datalist id="champions" >
				{championsNames.map( champion => (
					<option key={champion} value={champion}>{champion}</option>
				) )}
			</datalist>
			<ButtonSx>
				Search
			</ButtonSx>
		</FormSx>
	);
};


export default SearchChampion; //Export main component
