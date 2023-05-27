//Library
import { readChampionsPreview } from "@/lib/ddragon/readChampions";


//Components
import SearchChampionInput from "@/components/SearchChampionInput";


//Typings
import { ChampionPreview } from "@/typings/champion";


//Main component content
const Page = async (): Promise<JSX.Element> => {

	//Fetch
	const champions: ChampionPreview[] = await readChampionsPreview();


	//Main component render
	return (
		<main
			className="container mx-auto max-w-5xl flex flex-col gap-10"
		>
			<SearchChampionInput
				champions={champions}
			/>
		</main>
	);
};


export default Page; //Export main component
