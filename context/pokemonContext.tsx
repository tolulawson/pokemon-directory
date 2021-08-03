/* eslint-disable no-use-before-define */
import React, { Dispatch } from 'react';
import { PokemonSummary } from '../services/getPokemonListFromPageNumber';

interface PokemonContextValue {
  pokemonList: PokemonSummary[];
  setPokemonList: Dispatch<PokemonSummary[]>;
}

const PokemonContext = React.createContext<PokemonContextValue | undefined>(undefined);

function PokemonContextProvider({ children }: { children: React.ReactNode }) {
  const [pokemonList, setPokemonList] = React.useState<PokemonSummary[]>([]);

  const value: PokemonContextValue = { pokemonList, setPokemonList };

  return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;
}

function usePokemonList() {
  const context = React.useContext(PokemonContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export {
  PokemonContextProvider,
  usePokemonList,
};
