//NextJS
'use client';
import Image	from "next/image";
import { useRouter } from "next/navigation";


//Assets
import runaterraIcon from '@/assets/images/runaterraIcon.png';


//Typings
import { ChampionPreview } from "@/typings/champion";
type TableBodyRow = {
	champion: ChampionPreview;
}


//Main component content
const TableBodyRow = ({champion}: TableBodyRow): JSX.Element => {

	const router = useRouter();


	//Handlers
	const onClickHandler = () => {
		const url: string = `/champion/${champion.id}?version=${champion.version}`;
		
		router.push(url);
	};

	//Main component render
	return (
		<tr
			className='hover:bg-ultra-light-blue hover:cursor-pointer h-20'
			onClick={onClickHandler}
		>
			<_ChampionIcon champion={champion} />
			<_ChampionCell champion={champion} />
			<_ChampionRegion champion={champion} />
		</tr>
	);
};


export default TableBodyRow; //Export main component



const _ChampionIcon = ({champion}: TableBodyRow): JSX.Element => {

	const iconSize: number = 60;

	return (
		<td
			className='w-20'
		>
			<figure
				className='p-2'
			>
				<Image
					src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.id}.png`}
					alt={champion.name}
					className='border border-black'
					width={iconSize}
					height={iconSize}
				/>
			</figure>
		</td>
	);
};

const _ChampionCell = ({champion}: TableBodyRow): JSX.Element => {
	return (
		<td>
			<div>
				<p>
					{champion.name}
				</p>
				<p
					className='text-dimmed'
				>
					{champion.title}
				</p>
			</div>
		</td>
	);
};

const _ChampionRegion = ({champion}: TableBodyRow): JSX.Element => {
	
	const iconSize: number = 38;
	
	return (
		<td
			className='text-center flex items-center'
		>
			<Image
				src={runaterraIcon}
				alt='Runaterra'
				height={iconSize}
			/>
			<p>
				Runaterra
			</p>
		</td>
	);
};
