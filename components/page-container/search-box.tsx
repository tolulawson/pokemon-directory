/* eslint-disable no-use-before-define */
import React from 'react';
import { useRouter } from 'next/router';
import { usePokemonList } from '../../context/pokemonContext';

interface SearchBoxProps {
  searchQuery?: string;
}
export default function SearchBox({ searchQuery }: SearchBoxProps) {
  const [query, setQuery] = React.useState(searchQuery);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const { setPokemonList } = usePokemonList();

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    router.push(`/search?q=${query}`);
  };

  React.useEffect(() => {
    const getSearchResults = async () => {
      setLoading(true);
      const searchResults = await (await fetch(`/api/search/?q=${query}`)).json();
      setPokemonList(searchResults);
      setLoading(false);
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
          {
            !loading
              ? (
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-6 h-6 stroke-current'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
              )
              : (
                <svg width='24px' height='24px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor' color='#0867af'>
                  <g>
                    <path d='M10.998 22a.846.846 0 010-1.692 9.308 9.308 0 000-18.616 9.286 9.286 0 00-7.205 3.416.846.846 0 11-1.31-1.072A10.978 10.978 0 0110.998 0c6.075 0 11 4.925 11 11s-4.925 11-11 11z' />
                    <animateTransform attributeName='transform' attributeType='XML' type='rotate' from='0 11 11' to='360 11 11' dur='.6s' calcMode='linear' repeatCount='indefinite' />
                  </g>
                </svg>
              )
          }
        </button>
        {' '}
      </div>
    </form>
  );
}

SearchBox.defaultProps = {
  searchQuery: '',
};
