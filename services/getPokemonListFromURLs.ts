import getPokemonDetails, { PokemonDetails } from './getPokemonDetails';

export interface PokemonSummary {
  name: string;
  imageUrl: string;
  species: string;
  types: string[];
  placeholder: string;
}

export default async function getPokemonListFromURLs(urls: string[]): Promise<PokemonSummary[]> {
  const pageListDetailsPromises:any[] = [];
  urls.forEach((url) => {
    pageListDetailsPromises.push(getPokemonDetails({ url }));
  });

  const pageListDetails = await Promise.all<PokemonDetails>(pageListDetailsPromises);

  const summaryList = pageListDetails.map((listItem: PokemonDetails) => ({
    name: listItem.name,
    imageUrl: listItem.imageUrl,
    species: listItem.species,
    types: listItem.types,
    placeholder: listItem.placeholder,
  }));

  return (summaryList);
}
