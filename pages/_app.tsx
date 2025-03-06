import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { PokemonContextProvider } from '../context/pokemonContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokemon Directory</title>
      </Head>
      <PokemonContextProvider>
        <Component {...pageProps} />
      </PokemonContextProvider>
    </>
  );
}
export default MyApp;
