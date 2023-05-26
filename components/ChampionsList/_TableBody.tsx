//Components
import TableBodyRow from "./_TableBodyRow";


//Typings
import { ChampionPreview } from "@/typings/champion";
type TableBody = {
	champions: ChampionPreview[];
}


//Main component content
const TableBody = ({ champions}: TableBody): JSX.Element => {
	//Main component render
	return (
		<tbody
			className='bg-light-blue'
		>
			{champions.map( (champion: ChampionPreview) => (
				<TableBodyRow
					key={`${champion.name}-table-body-row`}
					champion={champion}
				/>
			) )}
		</tbody>
	);
};


export default TableBody; //Export main component



