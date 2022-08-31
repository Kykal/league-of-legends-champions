import React, { useState } from 'react';


//React router
import { useNavigate } from 'react-router-dom';


//Style components
import styled from 'styled-components';


const FormSx = styled.form`

	position: relative;
	z-index: 1;

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

const ErrorMessage = styled.p`
	padding-left: 0.5em;
	padding-top: 0.5em;
	color: rgba( 255, 0, 0, 0.66 );
`;


//Main component content
const SearchChampion = ({championsNames, version}) => {

	//React router
	const navigate = useNavigate();

	//State
	const [ isError, setIsError ] = useState(false);
	const [ searchValue, setSearchValue ] = useState("");
	
	//Query champion 
	const onSubmitHandler = (event) => {
		event.preventDefault();

		//Look for coincidences, if there are, obtain its result
		const [query] = championsNames.filter( champion => champion.name === searchValue );

		if(!query) {
			setIsError(true);
			return;
		};
		
		//Query the id of the coincidental name
		navigate(`${version}/${query.id}`);
	};

	//Update input state
	const searchValueHandler = (event) => {
		
		//Save constant;
		const newValue = event.target.value;

		//Update state
		setSearchValue(newValue);

		//Look up for coincidences
		const [query] = championsNames.filter( champion => champion.name === newValue );

		//If input value does not coincide with any champion name, keep error true
		if(!query) return;

		//If input value coincides with any champion, remove error
		setIsError(false);
	};

	//Component render
	return (
		<>
			<FormSx onSubmit={onSubmitHandler} >
				<InputSx type="text" id="search_champion" list="champions" placeholder="Champion" value={searchValue} onChange={searchValueHandler} />
				<datalist id="champions" >
					{championsNames.map( champion => (
						<option key={champion.id} value={champion.name}>{champion.name}</option>
					) )}
				</datalist>
				<ButtonSx onClick={onSubmitHandler} >
					Search
				</ButtonSx>
			</FormSx>
			{isError && (
				<ErrorMessage>
					Please input a valid champion name.
				</ErrorMessage>
			)}
		</>
	);
};


export default SearchChampion; //Export main component
