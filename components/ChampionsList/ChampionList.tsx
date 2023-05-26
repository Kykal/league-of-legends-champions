//Typings
import { ChampionPreview } from "@/typings/champion";
type ChampionList = {
	champions: ChampionPreview[];	
}


//Components
import TableBody from "./_TableBody";
import TableHead from "./_TableHead";


//Main component content
const ChampionList = ({champions}: ChampionList): JSX.Element => {
	//Main component render
	return (
		<table>
			<TableHead />
			<TableBody
				champions={champions}
			/>
		</table>
	);
};


export default ChampionList; //Export main component
