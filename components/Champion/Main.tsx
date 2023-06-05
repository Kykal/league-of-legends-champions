//Components
import Spell from "./_Spell";
import Passive from "./_Passive";
import SkinsCarousel from "./SkinsCarousel";


//Typings
import Champion from "@/typings/champion";
type Main = {
	champion: Champion;
}


//Main component content
const Main = ({champion}: Main): JSX.Element => {
	//Main component render
	return (
		<main
			className='flex flex-col gap-8 px-8 pb-8 pt-4'
		>
			<_Abilities champion={champion} />
			<SkinsCarousel champion={champion} />
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
				className='grid bg-light-blue p-4 flex gap-2 grid-cols-5 items-start'
			>
				<Passive champion={champion} />
				{Object.entries(champion.spells).map( ([name, data]) => (
					<Spell
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
