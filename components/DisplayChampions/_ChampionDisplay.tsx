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

	const version: URLSearchParams = new URLSearchParams({
		version: champion.version,
	});
	const href: string = `/champion/${champion.id}?${version}`;
	const src: string = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`;
	const alt: string = `${champion.name}-loading-screen`;
	const width: number = 308;
	const height: number = 560;


	//Main component render
	return (
		<Link
			href={href}
			className='center border border-transparent hover:border-gold'
		>
			<figure
				className='relative'
			>
				<Image
					src={src}
					alt={alt}
					width={width}
					height={height}
					className='border border-black'
				/>
				<_Caption champion={champion} />
			</figure>
		</Link>
	);
};


export default ChampionDisplay; //Export main component



const _Caption = ({ champion }: ChampionDisplay) => {

	const text = 'text-gold text-xl text-center';
	const position = 'absolute bottom-0';
	const height = 'h-10';
	const background = 'bg-black/75';
	const size = 'w-full';


	return(
		<figcaption
			className={`center ${text} ${position} ${height} ${background} ${size}`}
		>
			{champion.name}
		</figcaption>
	);
}
