//React
import { ChangeEvent } from "react";


//Typings
import { ChampionPreview } from "@/typings/champion";
type Input = & {
	champions: ChampionPreview[];
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}


//Main component content
const Input = ({ champions, value, onChange }: Input): JSX.Element => {
	//Main component render
	return (
		<>
			<input
				value={value}
				onChange={onChange}

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
		</>
	);
};


export default Input; //Export main component
