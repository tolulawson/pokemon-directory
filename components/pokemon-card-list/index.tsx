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
            <p>
              It&apos;s lonely out here. Try a different search term or go back
              {' '}
              <Link href='/'><a href='/'>home</a></Link>
            </p>
          )
      }
      </div>
    </div>
  );
}
