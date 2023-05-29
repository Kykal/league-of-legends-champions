//NextJS
import Image from "next/image";


//Lib
import readChampion from "@/lib/ddragon/readChampion";


//Components
import BackgroundImage from "@/components/Champion/BackgroundImage";


//Typings
import Champion from "@/typings/champion";


//Main component content
const Page = async (props: any): Promise<JSX.Element> => {

	const champion: Champion = await readChampion(props.params.champion, props.searchParams.version);
	

	const splashSrc: string = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;
	const iconSrc: string = `https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.id}.png`;
	const iconSize: number = 80;

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
				className='container mx-auto max-w-5xl shadow-black shadow-2xl bg-blue'
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
				<header
					className='p-4'
				>
					<figure
						className='flex items-center gap-3'
					>
						<Image
							src={iconSrc}
							alt={`${champion.id}-square-icon`}
							width={iconSize}
							height={iconSize}
						/>
						<figcaption
							className='text-3xl text-gold'
						>
							{champion.name}, {champion.title}
						</figcaption>
					</figure>
					<p
						className='text-justified'
					>
						{champion.blurb}
					</p>
				</header>
				<hr
					className='border-ultra-light-blue'
				/>
				<main>
					Main
				</main>
			</article>
		</>
	);
};


export default Page; //Export main component
