export const readLastVersion = async (): Promise<string> => {
  const res = await fetch('https://ddragon.leagueoflegends.com/api/versions.json', {
    cache: 'no-store',
  });

  if( !res.ok ){
    throw new Error('Failed to fetch version.');
  };

  const json: string[] = await res.json();

  return json[0];
}
