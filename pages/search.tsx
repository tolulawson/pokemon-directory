/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { GetServerSideProps } from 'next';
import PageContainer from '../components/page-container';
import PokemonCardList from '../components/pokemon-card-list';
import { PokemonSummary } from '../services/getPokemonListFromPageNumber';
import { getSearchResults } from './api/search';
import { usePokemonList } from '../context/pokemonContext';

export default function Search(
  { _pokemonList, query = '' }: { _pokemonList: PokemonSummary[], query?: string },
) {
  const { pokemonList, setPokemonList } = usePokemonList();
  React.useEffect(() => {
    setPokemonList(_pokemonList);
  }, []);
  return (
    <>
      <PageContainer title='Search' searchQuery={query}>
        <h3 className='text-center text-xl font-medium'>
          {query}
          {' '}
          -
          {' '}
          <span className='font-normal text-lg text-gray-400'>Pokémon Directory search</span>
        </h3>
        <PokemonCardList pokemonList={pokemonList} />
      </PageContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query.q ? context.query.q.toString() : '';

  if (query.length < 1) {
    return ({
      props: {},
    });
  }

  const _pokemonList = await getSearchResults(query);
  return {
    props: {
      _pokemonList,
      query,
    },
  };
};

Search.defaultProps = {
  query: '',
};
