/* eslint-disable no-use-before-define */
import React from 'react';
import { GetStaticProps } from 'next';
import PageContainer from '../components/page-container';
import PokemonCardList from '../components/pokemon-card-list';
import getPokemonListFromPage, { PokemonSummary } from '../services/getPokemonListFromPage';
import { usePokemonList } from '../context/pokemonContext';

export default function Home({ _pokemonList }: { _pokemonList: PokemonSummary[] }) {
  const { pokemonList, setPokemonList } = usePokemonList();
  React.useEffect(() => {
    setPokemonList(_pokemonList);
  }, []);
  return (
    <>
      <PageContainer title='Home'>
        <PokemonCardList pokemonList={pokemonList} />
      </PageContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { summaryList: _pokemonList } = await getPokemonListFromPage(1);
  return {
    props: {
      _pokemonList,
    },
  };
};
