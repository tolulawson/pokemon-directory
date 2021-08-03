/* eslint-disable no-use-before-define */
import React from 'react';
import { GetStaticProps } from 'next';
import PageContainer from '../components/page-container';
import PokemonCardList from '../components/pokemon-card-list';
import getPokemonListFromPageNumber, { PokemonSummary } from '../services/getPokemonListFromPageNumber';
import { usePokemonList } from '../context/pokemonContext';
import Pagination from '../components/pokemon-card-list/pagination';

export default function Home({ _pokemonList }: { _pokemonList: PokemonSummary[] }) {
  const { pokemonList, setPokemonList } = usePokemonList();
  React.useEffect(() => {
    setPokemonList(_pokemonList);
  }, []);
  return (
    <PageContainer title='Home'>
      <PokemonCardList pokemonList={pokemonList} />

      <div className='w-80 mx-auto pb-10'>
        <Pagination />
      </div>
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { summaryList: _pokemonList } = await getPokemonListFromPageNumber(1);
  return {
    props: {
      _pokemonList,
    },
  };
};
