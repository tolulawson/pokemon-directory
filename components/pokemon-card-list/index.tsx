import Link from 'next/link';
import PokemonCard from './summary-card';
import { PokemonSummary } from '../../services/getPokemonListFromPageNumber';

export default function PokemonCardList({ pokemonList = [] }: { pokemonList: PokemonSummary[] }) {
  return (
    <div>
      <div className='flex flex-wrap gap-x-3 gap-y-12 md:gap-x-8 justify-center py-12'>
        {
        pokemonList.length > 0
          ? pokemonList.map((listItem) => (
            <PokemonCard
              key={listItem.name}
              name={listItem.name}
              types={listItem.types}
              species={listItem.species}
              imageURL={listItem.imageUrl}
            />
          ))
          : (
            <p className='text-gray-500 py-20 px-8 text-center'>
              It&apos;s lonely out here.
              <br />
              Try a different search term or go back
              {' '}
              <Link href='/'><a className='font-bold text-blue-500' href='/'>home</a></Link>
            </p>
          )
      }
      </div>
    </div>
  );
}
