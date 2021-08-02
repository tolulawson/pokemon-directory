/* eslint-disable no-use-before-define */
import React from 'react';
import { useRouter } from 'next/router';
import { usePokemonList } from '../../context/pokemonContext';

interface SearchBoxProps {
  searchQuery?: string;
}
export default function SearchBox({ searchQuery }: SearchBoxProps) {
  const [query, setQuery] = React.useState(searchQuery);
  const router = useRouter();

  const { setPokemonList } = usePokemonList();

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    router.push(`/search?q=${query}`);
  };

  React.useEffect(() => {
    const getSearchResults = async () => {
      const searchResults = await (await fetch(`api/search/?q=${query}`)).json();
      setPokemonList(searchResults);
    };
    if (query && query.length > 2) {
      getSearchResults();
    }
  }, [query]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  return (
    <form className='relative w-96 rounded-full border' onSubmit={handleSubmit}>
      <input type='text' className='h-14 w-full pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none rounded-full' placeholder='Search Pokémon names...' defaultValue={searchQuery} onChange={handleChange} autoComplete='off' />
      <div className='absolute top-4 right-3'>
        {' '}
        <button className='btn btn-square' type='submit'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-6 h-6 stroke-current'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
          </svg>
        </button>
        {' '}
      </div>
    </form>
  );
}

SearchBox.defaultProps = {
  searchQuery: '',
};
