//NextJS
import Image from "next/image";


//Typings
import Champion from "@/typings/champion";
type Passive = {
	champion: Champion;
}


//Main component content
const Passive = ({champion}: Passive) => {
	
	const src: string = `https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/passive/${champion.passive.image.full}`;
	const alt: string = `${champion.passive.name}-passive`;
	const size: number = 60;


	const display: string = 'flex flex-col gap-2 justify-center items-center';
	const text: string = 'text-center';


	return(
			<figure
				className={`${display} ${text}`}
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
};


export default Passive; //Export main component
