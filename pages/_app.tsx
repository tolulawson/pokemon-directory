import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { PokemonContextProvider } from '../context/pokemonContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokemon Directory</title>
      </Head>
      <PokemonContextProvider>
        <Component {...pageProps} />
        <Analytics />
      </PokemonContextProvider>
    </>
  );
}
export default MyApp;
