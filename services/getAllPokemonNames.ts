import { API_BASE } from '../app.config';

const fetch = require('node-fetch');

export default async function getAllPokemonNames(): Promise<string[]> {
  const { count }: { count: number } = await (await fetch(`${API_BASE}/pokemon`)).json();

  const { results: allPokemon }: { results: [{ name: string, url: string}] } = await (await fetch(`${API_BASE}/pokemon?limit=${count}`)).json();
  const allNames = allPokemon.map((pokemon) => pokemon.name);
  return allNames;
}
