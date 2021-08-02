import { GetStaticProps } from 'next';
import PageContainer from '../components/page-container';
import PokemonCardList from '../components/pokemon-card-list';
import getPokemonSummaryList, { PokemonSummaryList } from '../services/getPokemonSummaryList';

export default function Home({ pokemonList }: { pokemonList: PokemonSummaryList }) {
  return (
    <>
      <PageContainer title='Home' />
      <PokemonCardList pokemonList={pokemonList} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pokemonList = await getPokemonSummaryList(1);
  return {
    props: {
      pokemonList,
    },
  };
};
