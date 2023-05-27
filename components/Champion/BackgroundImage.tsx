//NextJS
import Image from "next/image";


//Typings
import type Champion from "@/typings/champion";
type BackgroundImage = {
	champion: Champion;
}


//Main component content
const BackgroundImage = ({champion}: BackgroundImage): JSX.Element => {

	const src: string = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;
	const alt: string = `${champion.id}-background-image`;
	const width: number = 1215;
	const height: number = 717;

	const position: string = 'absolute top-0 -z-10';
	const size: string = 'w-full h-auto';
	const blur: string = 'blur-sm';
	
	//Main component render
	return (
		<figure
			className={`${position} ${size}`}
		>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className={`${size} ${blur}`}
			/>
		</figure>
	);
};


export default BackgroundImage; //Export main component
