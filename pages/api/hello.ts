import type { NextApiRequest, NextApiResponse } from 'next';
// import getPokemonDetails, { PokemonDetails } from '../../services/getPokemonDetails';
import getPokemonSummaryList, { PokemonSummaryList } from '../../services/getPokemonSummaryList';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<PokemonDetails>,
  res: NextApiResponse<PokemonSummaryList>,
) {
  // const pokemon = await getPokemonDetails({ id: 200 });
  const pokemon = await getPokemonSummaryList(20);
  res.status(200).json(pokemon);
}
