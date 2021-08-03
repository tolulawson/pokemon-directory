import type { NextApiRequest, NextApiResponse } from 'next';
import { API_BASE, PAGE_LIMIT } from '../../app.config';
import getPokemonListFromURLs, { PokemonSummary } from '../../services/getPokemonListFromURLs';

const NodeCache = require('node-cache');

const pokemonCache = new NodeCache({ stdTTL: 60 * 60 });
export interface PokemonResult {
  name: string;
  url: string;
}

export async function getSearchResults(query: string) {
  let allPokemon: PokemonResult[] = pokemonCache.get('allPokemon');

  if (allPokemon === undefined) {
    const { count }: { count: number } = await (await fetch(`${API_BASE}/pokemon`)).json();

    const { results }: { results: [PokemonResult] } = await (await fetch(`${API_BASE}/pokemon?limit=${count}`)).json();

    pokemonCache.set('allPokemon', results);
    allPokemon = pokemonCache.get('allPokemon');
  }

  let searchResults;

  if (query) {
    searchResults = allPokemon.filter((pokemon) => pokemon.name.includes(query.toLowerCase()));
  } else {
    searchResults = allPokemon;
  }
  searchResults = searchResults.slice(0, PAGE_LIMIT + 1);

  const pokemonList = await getPokemonListFromURLs(
    searchResults
      .map((result) => result.url),
  );

  return pokemonList;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PokemonSummary[]>,
) {
  const searchQuery: string = req.query.q.toString();
  const searchResults = await getSearchResults(searchQuery);

  res.status(200).json(searchResults);
}
