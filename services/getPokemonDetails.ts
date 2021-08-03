/* eslint-disable max-len */
import { API_BASE } from '../app.config';

const fetch = require('node-fetch');

export interface PokemonDetails {
  name: string;
  id: number;
  imageUrl: string;
  species: string;
  types: string[];
  stats: {[key: string]: number}[];
  weight: number;
  height: number;
  moves: string[];
}

export default async function getPokemonDetails(
  { id, url }: { id?: string | number, url?: string },
): Promise<PokemonDetails> {
  let pokemon;
  if (id) {
    pokemon = await (await fetch(`${API_BASE}/pokemon/${id}`)).json();
  } else if (url) {
    pokemon = await (await fetch(url)).json();
  }
  return ({
    name: pokemon.name,
    id: pokemon.id,
    imageUrl: pokemon.sprites.front_default,
    species: pokemon.species.name,
    types: pokemon.types.map((type: any) => type.type.name),
    stats: pokemon.stats.map((stat: any) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    })),
    weight: pokemon.weight,
    height: pokemon.height,
    moves: pokemon.moves.map((move: any) => move.move.name),
  });
}
