//NextJS
import { PageProps } from "@/.next/types/app/champion/[champion]/page";


//Lib
import readChampion from "@/lib/ddragon/readChampion";


//Components
import BackgroundImage from "@/components/Champion/BackgroundImage";


//Typings
import Champion from "@/typings/champion";


//Main component content
const Page = async (props: PageProps): Promise<JSX.Element> => {

	const champion: Champion = await readChampion(props.params.champion, props.searchParams.version);

	console.info( champion );
	
	//Main component render
	return (
		<>
			<BackgroundImage
				champion={champion}
			/>
			<article>
				<figure>

				</figure>
				<header>

				</header>
				<main>

				</main>
			</article>
		</>
	);
};


export default Page; //Export main component
