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
type Controllers = {
	index: number;
	maxSkinIndex: number;
	goPreviousHandler: () => void;
	goNextHandler: () => void;
	setIndexHandler: (newIndex: number) => void;
	champion: Champion;
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

	const setIndexHandler = (newValue: number) => {
		setIndex(newValue);
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
					<_Skin
						champion={champion.id}
						{...champion.skins[index]}
					/>
				</div>
				<_Controllers
					index={index}
					goPreviousHandler={goPreviousHandler}
					goNextHandler={goNextHandler}
					setIndexHandler={setIndexHandler}
					maxSkinIndex={maxSkinIndex}
					champion={champion}
				/>
			</div>
		</section>
	);
};


export default SkinsCarousel; //Export main component



const _Skin = (props: Skin) => {
	
	const splash = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.champion}_${props.num}.jpg`;
	
	return(
		<div
			className='relative w-full min-w-full center px-2'
		>
			<Image
			src={splash}
			alt={`${props.champion}-splash-skin`}
			width={1215}
			height={717}
			className='h-full w-auto'
		/>
		</div>
	);
}


const _Controllers = (props: Controllers) => {
	return(
		<div
			className='center gap-2'
		>
			<button
				className='text-3xl disabled:cursor-not-allowed text-gold disabled:text-gold/50'
				onClick={props.goPreviousHandler}
				disabled={props.index === 0}
			>
				<BiLeftArrowCircle />
			</button>
			<div
				className='flex items-center gap-2 overflow-auto'
			>
				{[...Array(props.maxSkinIndex+1)].map( (_, i) => (
					<button
						key={`${props.champion.name}-index-skin-${i}`}
						className={`border-2 ${i === props.index ? 'border-gold' : 'border-gold/50'} rounded-xl p-2 ${i === props.index ? 'bg-gold' : 'bg-transparent'}`}
						onClick={() => props.setIndexHandler(i)}
					/>
				) )}
			</div>
			<button
				className='text-3xl disabled:cursor-not-allowed text-gold disabled:text-gold/50'
				onClick={props.goNextHandler}
				disabled={props.index === props.maxSkinIndex}
			>
				<BiRightArrowCircle />
			</button>
		</div>
	);
}
