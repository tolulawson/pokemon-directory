/* eslint-disable max-len */
import { API_BASE, PAGE_LIMIT } from '../app.config';
import getPokemonDetails, { PokemonDetails } from './getPokemonDetails';

const fetch = require('node-fetch');

export interface PokemonSummary {
  name: string;
  imageUrl: string;
  species: string;
  types: string[];
}

export interface PokemonSummaryList {
  summaryList: PokemonSummary[],
  totalCount: number,
  currentPageCount: number,
  currentPage: number,
}

export default async function getPokemonListFromPageNumber(page: number): Promise<PokemonSummaryList> {
  const offset = PAGE_LIMIT * (page - 1);
  const pageList = await (await fetch(`${API_BASE}/pokemon/?limit=${PAGE_LIMIT}&offset=${offset}`)).json();

  const pageListDetailsPromises:any[] = [];
  pageList.results.forEach((result: {name: string, url: string}) => {
    pageListDetailsPromises.push(getPokemonDetails({ url: result.url }));
  });

  const pageListDetails = await Promise.all<PokemonDetails>(pageListDetailsPromises);

  const summaryList = pageListDetails.map((listItem: PokemonDetails) => ({
    name: listItem.name,
    imageUrl: listItem.imageUrl,
    species: listItem.species,
    types: listItem.types,
  }));

  return ({
    summaryList,
    totalCount: pageList.count,
    currentPageCount: pageList.results.length,
    currentPage: page,
  });
}
