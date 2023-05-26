//Library
import { readChampionsPreview } from "@/lib/ddragon/readChampions";
import { ChampionPreview } from "@/typings/champion";


//Components
import ChampionList from "@/components/ChampionsList/ChampionList";


//Main component content
const Page = async (): Promise<JSX.Element> => {

	//Fetch
	const champions: ChampionPreview[] = await readChampionsPreview();

	//Main component render
	return (
		<main
			className="container mx-auto flex flex-col px-10 gap-10"
		>
			<form
				className='flex items-center'
			>
				<input
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
			<ChampionList
				champions={champions}
			/>
		</main>
	);
};


export default Page; //Export main component
