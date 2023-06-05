//Lib
import { readLastVersion } from "./readVersion";


//Typings
import Champion from "@/typings/champion";


const readChampion = async (champion: string, version?: string): Promise<Champion> => {

	if( !champion ){
		throw new Error('No champion provieded');
	}

	if(!version){
		version = await readLastVersion();
	};

	const href: string = `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${champion}.json`;

	const res = await fetch(href);

	if( !res.ok ){
		throw new Error('Failed to fetch champion.');
	};

	const json = await res.json();

	const newValue: Champion = {
		...json['data'][champion],
		version,
	}

	return newValue;
};


export default readChampion;
