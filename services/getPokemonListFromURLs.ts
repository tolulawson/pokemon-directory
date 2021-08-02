import getPokemonDetails, { PokemonDetails } from './getPokemonDetails';

export interface PokemonSummary {
  name: string;
  id: number;
  imageUrl: string;
  species: string[];
  types: string[];
}

export default async function getPokemonListFromURLs(urls: string[]): Promise<PokemonSummary[]> {
  const pageListDetailsPromises:any[] = [];
  urls.forEach((url) => {
    pageListDetailsPromises.push(getPokemonDetails({ url }));
  });

  const pageListDetails = await Promise.all<PokemonDetails>(pageListDetailsPromises);

  const summaryList = pageListDetails.map((listItem: PokemonDetails) => ({
    name: listItem.name,
    id: listItem.id,
    imageUrl: listItem.imageUrl,
    species: listItem.species,
    types: listItem.types,
  }));

  return (summaryList);
}
