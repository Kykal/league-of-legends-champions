//NextJS
import Image from "next/image";


//Lib
import readChampion from "@/lib/ddragon/readChampion";


//Components
import BackgroundImage from "@/components/Champion/BackgroundImage";
import Header from "@/components/Champion/Header";
import Champion from "@/typings/champion";


//Typings
import Main from "@/components/Champion/Main";
type ChampionAsProps = {
	champion:Champion;
}

//Main component content
const Page = async (props: any): Promise<JSX.Element> => {

	const champion: Champion = await readChampion(props.params.champion, props.searchParams.version);
	

	const splashSrc: string = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;
	

	const alt: string = `${champion.id}-article-image`;
	const width: number = 1215;
	const height: number = 717;
	const size: string = 'w-full h-auto';



	//Main component render
	return (
		<>
			<BackgroundImage
				champion={champion}
			/>
			<article
				className='container mx-auto max-w-5xl shadow-black shadow-2xl bg-blue mb-8'
			>
				<figure>
				<Image
					src={splashSrc}
					alt={alt}
					width={width}
					height={height}
					className={`${size}`}
				/>
				</figure>
				<Header champion={champion} />
				<hr
					className='border-ultra-light-blue'
				/>
				<Main champion={champion} />
			</article>
		</>
	);
};


export default Page; //Export main component
