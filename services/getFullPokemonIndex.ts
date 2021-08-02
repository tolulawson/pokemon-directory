import { API_BASE } from '../app.config';
import getPokemonDetails from './getPokemonDetails';

const fetch = require('node-fetch');
const throat = require('throat');

const MAX_PARALLEL_IO = 30;

export interface PokemonIndex {
  name: string;
  species: string[];
  types: string[];
}

export default async function getFullPokemonIndex(): Promise<PokemonIndex[]> {
  const { count }: { count: number } = await (await fetch(`${API_BASE}/pokemon`)).json();

  const { results: allPokemon }: { results: [{ name: string, url: string}] } = await (await fetch(`${API_BASE}/pokemon?limit=${count}`)).json();

  const allPokemonDetails = await Promise.all<PokemonIndex>(
    allPokemon.map(
      throat(MAX_PARALLEL_IO,
        (pokemon: { name: string, url: string}) => getPokemonDetails({ url: pokemon.url })),
    ),
  );

  return allPokemonDetails.map((pokemon) => ({
    name: pokemon.name,
    species: pokemon.species,
    types: pokemon.types,
  }));
}
