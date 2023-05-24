//Library
import Champion, { ChampionPreview } from "@/typings/champion";
import { readLastVersion } from "./readVersion";


/**Read all champions. If no version is given will fetch latest champions available.*/
const readChampions = async (version?: string): Promise<Map<string, object>[]> => {

	if( !version ){
		version = await readLastVersion();
	}

  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`, {
    cache: 'no-store',
  });

  if( !res.ok ){
    throw new Error('Failed to fetch champions.');
  };

  const json = await res.json();

  return json['data'];
}

export default readChampions;


export const readChampionsPreview = async (version?: string): Promise<ChampionPreview[]> => {

	if( !version ){
		version = await readLastVersion();
	}

  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`, {
    cache: 'no-store',
  });

  if( !res.ok ){
    throw new Error('Failed to fetch champions.');
  };

  const resJson = await res.json();
  const data: Map<string, object> = resJson['data'];

  const champions: ChampionPreview[] = Object.entries(data).map( ([_, championData ]) => ({
    id: championData.id,
    version: championData.version,
    title: championData.title,
    name: championData.name,
  }) ); 

  return champions;
}
