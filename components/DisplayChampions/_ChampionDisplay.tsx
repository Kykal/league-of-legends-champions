//NextJS
import Link		from "next/link";
import Image	from "next/image";


//Typings
import { ChampionPreview } from "@/typings/champion";
type ChampionDisplay = {
	champion: ChampionPreview;
}


//Main component content
const ChampionDisplay = ({ champion }: ChampionDisplay): JSX.Element => {

	const href: string = `/champion/${champion.id}`;
	const src: string = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`;
	const alt: string = `${champion.name}-loading-screen`;
	const width: number = 308;
	const height: number = 560;


	//Main component render
	return (
		<Link
			href={href}
			className='flex justify-center items-center'
		>
			<figure>
				<Image
					src={src}
					alt={alt}
					width={width}
					height={height}
					className='border border-black'
				/>
				<figcaption
					className='text-gold text-xl text-center'
				>
					{champion.name}
				</figcaption>
			</figure>
		</Link>
	);
};


export default ChampionDisplay; //Export main component
