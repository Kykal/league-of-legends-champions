//Library
import { readChampionsPreview } from "@/lib/ddragon/readChampions";


//Main component content
const Page = async (): Promise<JSX.Element> => {

  //Fetch
  const _champions = await readChampionsPreview();

  //Main component render
  return (
    <main>

    </main>
  );
};


export default Page; //Export main component
