/* eslint-disable max-len */
import Link from 'next/link';
import Image from 'next/image';

interface PokemonCardProps {
  imageURL: string;
  name: string;
  types: string[];
  species: string;
}

export default function SummaryCard({
  name, types, species, imageURL,
}: PokemonCardProps) {
  return (
    <Link href={`/pokemon/${name}`}>
      <a href={`/pokemon/${name}`}>
        <div className='bg-white rounded-3xl py-2 w-64 md:w-56 flex flex-col justify-center shadow-md bg-gray-50 transform transition duration-500 hover:scale-105'>
          <div className='w-44 h-44 relative mx-auto'>
            <Image
              src={imageURL}
              alt='Pokemon Directory logo'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className='p-2 text-gray-700 py-4'>
            <h3 className='text-center text-xl font-medium leading-8'>
              {name}
            </h3>
            <div className='text-center text-xs w-full text-gray-500'>
              <div>
                <span className='font-medium'>Species: </span>
                <span className='font-light'>{species}</span>
              </div>
              <div>
                <span className='font-medium'>Types: </span>
                <span className='font-light'>
                  {
                    (() => types.join(', '))()
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
