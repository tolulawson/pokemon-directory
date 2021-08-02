import type { NextApiRequest, NextApiResponse } from 'next';
import MiniSearch, { SearchResult } from 'minisearch';
import { API_BASE } from '../../app.config';

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

  const pokemonSearch = new MiniSearch({
    fields: ['name'],
    storeFields: ['name'],
  });

  pokemonSearch.addAll(allPokemon.map((pokemon) => ({ ...pokemon, id: pokemon.name })));

  return pokemonSearch.search(query, { fuzzy: 0.2 });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchResult[]>,
) {
  const searchQuery: string = req.query.q.toString();
  const searchResults = await getSearchResults(searchQuery);

  res.status(200).json(searchResults);
}
