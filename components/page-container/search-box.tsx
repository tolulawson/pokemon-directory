export default function SearchBox() {
  return (
    <form className='relative shadow-md w-96 rounded-full'>
      <input type='text' className='h-14 w-full pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none rounded-full' placeholder='Search Pokémon...' />
      <div className='absolute top-4 right-3'>
        {' '}
        <button className='btn btn-square btn-ghost' type='submit'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-6 h-6 stroke-current'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
          </svg>
        </button>
        {' '}
      </div>
    </form>
  );
}
