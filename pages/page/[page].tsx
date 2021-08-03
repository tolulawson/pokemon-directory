/* eslint-disable no-use-before-define */
import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import PageContainer from '../../components/page-container';
import PokemonCardList from '../../components/pokemon-card-list';
import getPokemonListFromPageNumber, { PokemonSummary } from '../../services/getPokemonListFromPageNumber';
import { usePokemonList } from '../../context/pokemonContext';
import Pagination, { PaginationProps } from '../../components/pagination';
import getPaginationPaths from '../../services/getPaginationPaths';

export default function Page(
  { _pokemonList, pagination }: { _pokemonList: PokemonSummary[], pagination: PaginationProps },
) {
  const { pokemonList, setPokemonList } = usePokemonList();
  React.useEffect(() => {
    setPokemonList(_pokemonList);
  }, []);
  return (
    <PageContainer title='Home'>
      <PokemonCardList pokemonList={pokemonList} />

      <div className='w-80 mx-auto pb-10'>
        <Pagination {...pagination} />
      </div>
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const page = typeof context.params?.page !== 'undefined' ? context.params.page : 1;
  const {
    summaryList: _pokemonList,
    pagination,
  } = await getPokemonListFromPageNumber(Number(page));
  return {
    props: {
      _pokemonList,
      pagination,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paginationPaths = await getPaginationPaths();
  const paths = paginationPaths.map((page) => ({
    params: { page },
  }));
  return {
    paths,
    fallback: false,
  };
};
