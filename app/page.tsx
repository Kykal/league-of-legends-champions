const readLastVersion = async (): Promise<string> => {
  const res = await fetch('https://ddragon.leagueoflegends.com/api/versions.json', {
    cache: 'no-store',
  });

  if( !res.ok ){
    throw new Error('Failed to fetch version.');
  };

  const json: string[] = await res.json();

  return json[0];
}


const readChampions = async (): Promise<Map<string, object>[]> => {

  const version = await readLastVersion();

  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`, {
    cache: 'no-store',
  });

  if( !res.ok ){
    throw new Error('Failed to fetch champions.');
  };

  const json = await res.json();

  return json['data'];
}


//Main component content
const Page = async (): Promise<JSX.Element> => {

  const champions = await readChampions();

  //Main component render
  return (
    <main>

    </main>
  );
};


export default Page; //Export main component
