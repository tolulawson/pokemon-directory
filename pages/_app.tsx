import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { PokemonContextProvider } from '../context/pokemonContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PokemonContextProvider>
      <Component {...pageProps} />
    </PokemonContextProvider>
  );
}
export default MyApp;
