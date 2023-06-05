//NextJS
import Image from "next/image";


import Champion from "@/typings/champion";
//Typings
type Header = {
	champion: Champion;
}


//Main component content
const Header = ({champion}: Header): JSX.Element => {
	const iconSrc: string = `https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.id}.png`;
	const iconSize: number = 80;


	//Main component render
	return(
		<header
			className='p-4 flex flex-col gap-4'
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
				className='container px-4 text-justify text-lg font-medium leading-9'
			>
				{champion.lore}
			</p>
		</header>
	);
};


export default Header; //Export main component
