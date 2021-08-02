import PokemonCard from './summary-card';
import { PokemonSummary } from '../../services/getPokemonListFromPage';

export default function PokemonCardList({ pokemonList = [] }: { pokemonList: PokemonSummary[] }) {
  return (
    <div>
      {
        pokemonList.map((listItem) => (
          <PokemonCard
            key={listItem.name}
            name={listItem.name}
            types={listItem.types}
            species={listItem.species}
            id={listItem.id}
            imageURL={listItem.imageUrl}
          />
        ))
      }
    </div>
  );
}
