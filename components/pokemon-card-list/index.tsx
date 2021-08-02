import PokemonCard from './summary-card';
import { PokemonSummaryList, PokemonSummary } from '../../services/getPokemonSummaryList';

export default function PokemonCardList({ pokemonList }: { pokemonList: PokemonSummaryList }) {
  return (
    <div>
      {
        pokemonList.summaryList.map((listItem: PokemonSummary) => (
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
