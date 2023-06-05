//NextJS
'use client';
import Image from "next/image";


//React
import { useState } from "react";


//MATERIAL DESIGN
//Icons
import {
	BiLeftArrowCircle,
	BiRightArrowCircle,
} from 'react-icons/bi';



//Typings
import Champion, { Skin as BaseSkin } from "@/typings/champion";
type SkinsCarousel = {
	champion: Champion;
}
type Skin = BaseSkin & {
 champion: string;
}


//Main component content
const SkinsCarousel = ({champion}: SkinsCarousel): JSX.Element => {

	//States
	const [ index, setIndex ] = useState<number>(0);

	const maxSkinIndex = Object.keys(champion.skins).length - 1;

	//Handlers
	const goPreviousHandler = () => {
		setIndex(index - 1);
	};

	const goNextHandler = () => {
		setIndex(index + 1);
	};

	//Main component render
	return (
		<section>
			<h2
				className='text-gold text-2xl font-bold'
			>
				Skins
			</h2>
			<div
				className='bg-light-blue p-4 flex flex-col gap-2'
			>
				<h3
					className='text-center text-gold text-3xl'
				>
					{champion.skins[index].name}
				</h3>
				<div>
					<Skin
						champion={champion.id}
						{...champion.skins[index]}
					/>
				</div>
				<div
					className='center gap-2'
				>
					<button
						className='text-3xl disabled:cursor-not-allowed text-gold disabled:text-gold/50'
						onClick={goPreviousHandler}
						disabled={index === 0}
					>
						<BiLeftArrowCircle />
					</button>
					{}
					<button
						className='text-3xl disabled:cursor-not-allowed text-gold disabled:text-gold/50'
						onClick={goNextHandler}
						disabled={index === maxSkinIndex}
					>
						<BiRightArrowCircle />
					</button>
				</div>
			</div>
		</section>
	);
};


export default SkinsCarousel; //Export main component



const Skin = (props: Skin) => {
	return(
		<div
			className='relative w-full min-w-full center max-h-96 aspect-video'
		>
			<_Loading {...props} />
			<_Splash {...props} />
		</div>
	);
}


const _Loading = (props: Skin) => {
	
	const loading = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.champion}_${props.num}.jpg`;

	return(
		<Image
			src={loading}
			alt={`${props.champion}-loading-skin`}
			width={308}
			height={560}
			className='h-full w-auto'
		/>
	);
}


const _Splash = (props: Skin) => {
	
	const splash = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.champion}_${props.num}.jpg`;

	return(
		<Image
			src={splash}
			alt={`${props.champion}-splash-skin`}
			width={1215}
			height={717}
			className='h-full w-auto'
		/>
	);
}
