import Link from 'next/link';

interface PokemonCardProps {
  imageURL: string;
  name: string;
  id: string;
  types: string[];
  species: string[];
}

export default function PokemonCard({
  name, types, species, id, imageURL,
}: PokemonCardProps) {
  return (
    <Link href='/'>
      <a href='/'>
        <div className='shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4'>
          <div className='flex-col  flex justify-center items-center'>
            <div className='flex-shrink-0'>
              <div className='block relative'>
                <img alt={name} src={imageURL} className='mx-auto object-cover rounded-full h-16 w-16 ' />
              </div>
            </div>
            <div className='mt-2 text-center flex flex-col'>
              <span className='text-gray-600 dark:text-white text-lg font-medium'>
                {name}
              </span>
              <span className='text-gray-400 text-xs'>
                CTO
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
