/* eslint-disable max-len */
import {
  API_BASE, PAGE_LIMIT, PAGINATION_NEXT_PAGES, PAGINATION_PREVIOUS_PAGES,
} from '../app.config';
import getPaginationPaths from './getPaginationPaths';
import getPokemonDetails, { PokemonDetails } from './getPokemonDetails';
import { PaginationProps } from '../components/pagination';

const fetch = require('node-fetch');

export interface PokemonSummary {
  name: string;
  imageUrl: string;
  species: string;
  types: string[];
}

export interface PokemonSummaryList {
  summaryList: PokemonSummary[];
  pagination: PaginationProps;
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

  const allPages = (await getPaginationPaths()).map((i) => Number(i));
  const previousPage = allPages[page - 2] || null;
  const nextPage = allPages[page] || null;
  const nextPages = allPages
    .slice(page - 1, page + PAGINATION_NEXT_PAGES);
  const previousPages = allPages
    .slice((page - PAGINATION_PREVIOUS_PAGES) < 0 ? 0 : page - 1 - PAGINATION_PREVIOUS_PAGES, page - 1);

  return ({
    summaryList,
    pagination: {
      currentPage: page,
      previousPage,
      nextPage,
      nextPages,
      previousPages,
      totalPages: allPages.length,
    },
  });
}
