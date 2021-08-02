import { GetServerSideProps } from 'next';
import PageContainer from '../components/page-container';
import PokemonCardList from '../components/pokemon-card-list';
import getPokemonSummaryList, { PokemonSummaryList } from '../services/getPokemonSummaryList';
import { getSearchResults } from './api/search';
import getPokemonDetails from '../services/getPokemonDetails';

export default function Home({ result }: { pokemonList: PokemonSummaryList }) {
  return (
    <>
      <PageContainer title='Home' searchQuery='pikachu' />
      {/* <PokemonCardList pokemonList={pokemonList} /> */}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query.q ? context.query.q.toString() : '';
  const searchResults = await getSearchResults(query);
  console.log(searchResults);
  return {
    props: {
      // pokemonList,
    },
  };
};
