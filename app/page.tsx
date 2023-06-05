//NextJS
import { Metadata } from "next";


//Library
import { readChampionsPreview } from "@/lib/ddragon/readChampions";


//Components
import SearchChampion		from "@/components/SearchChampion";
import DisplayChampions	from "@/components/DisplayChampions";
import sharedMetadata from "./shared-metadata";


//Typings
import { ChampionPreview } from "@/typings/champion";


export const metadata: Metadata = sharedMetadata;


//Main component content
const Page = async (): Promise<JSX.Element> => {

	//Fetch
	const champions: ChampionPreview[] = await readChampionsPreview();


	//Main component render
	return (
		<main
			className="container mx-auto max-w-5xl flex flex-col gap-y-10 px-5"
		>
			<SearchChampion
				champions={champions}
			/>
			<DisplayChampions
				champions={champions}
			/>
		</main>
	);
};


export default Page; //Export main component
