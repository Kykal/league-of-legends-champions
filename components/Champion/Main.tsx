//NextJS
import Image from "next/image";


//Typings
import Champion, { ChampionPassive, ChampionSpell } from "@/typings/champion";
type Main = {
	champion: Champion;
}
type Spell = {
	name: string
	version: string;
	spell: ChampionSpell;
}


//Main component content
const Main = ({champion}: Main): JSX.Element => {
	//Main component render
	return (
		<main
			className='flex flex-col gap-4 p-8'
		>
			<_Abilities champion={champion} />
		</main>
	);
};


export default Main; //Export main component



const _Abilities = ({champion}: Main) => {
	return(
		<section
			className='flex flex-col gap-2'
		>
			<h2
				className='text-gold text-2xl font-bold'
			>
				Abilities
			</h2>
			<div
				className='grid bg-light-blue px-4 pt-8 pb-4 flex gap-2 grid-cols-5 items-start'
			>
				<_Passive champion={champion} />
				{Object.entries(champion.spells).map( ([name, data]) => (
					<_Spell
						key={`${champion.name}-${data.id}`}
						name={name}
						spell={data}
						version={champion.version}
					/>
				) )}
			</div>
		</section>
	);
}


const _Passive = ({champion}: Main) => {
	
	const src: string = `https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/passive/${champion.passive.image.full}`;
	const alt: string = `${champion.passive.name}-passive`;
	const size: number = 60;
	
	return(
		<figure
			className='flex flex-col gap-2 text-center justify-center items-center'
		>
			<Image
				src={src}
				alt={alt}
				width={size}
				height={size}
				className='border border-gold'
			/>
			<figcaption
				className='flex flex-col items-center justify-center'
			>
				<span
					className='text-dimmed'
				>
					Passive
				</span>
				<span
					className='text-lg'
				>
					{champion.passive.name}
				</span>
			</figcaption>
		</figure>
	);
}


const _Spell = ({name, spell, version}: Spell) => {

	const src: string = `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.id}.png`;
	const size: number = 60;
	const alt: string = `${spell.id}-spell`;


	//Handler
	const spellNameHandler = (name: string): string => {
		const letter: any = {
			'0': 'Q',
			'1': 'W',
			'2': 'E',
			'3': 'R',
		}

		return letter[name];
	};

	return(
		<figure
			className='flex flex-col gap-2 text-center justify-center items-center'
		>
			<Image
				src={src}
				alt={alt}
				width={size}
				height={size}
				className='border border-gold'
			/>
			<figcaption
				className='flex flex-col items-center justify-center'
			>
				<span
					className='text-dimmed'
				>
					{spellNameHandler(name)}
				</span>
				<span
					className='text-lg'
				>
					{spell.name}
				</span>
			</figcaption>
		</figure>
	);
}
