//NextJS
import Image from "next/image";


//Typings
import { ChampionSpell } from "@/typings/champion";
type Spell = {
	name: string
	version: string;
	spell: ChampionSpell;
}


//Main component content
const Spell = ({name, spell, version}: Spell) => {

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


export default Spell; //Export main component
