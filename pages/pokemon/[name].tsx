import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import getPokemonDetails, { PokemonDetails } from '../../services/getPokemonDetails';
import getAllPokemonNames from '../../services/getAllPokemonNames';
import PageContainer from '../../components/page-container';

export default function Pokemon({ pokemon }: { pokemon: PokemonDetails}) {
  const statColors = [
    'red',
    'yellow',
    'green',
    'blue',
    'pink',
    'indigo',
  ];
  return (
    <PageContainer title={pokemon.name} showBackButton>
      <div>
        <h3 className='text-center text-2xl font-medium leading-8'>
          {pokemon.name}
        </h3>
        <div className='w-52 h-52 relative mx-auto'>
          <Image
            src={pokemon.imageUrl}
            alt='Pokemon Directory logo'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
      <div className='bg-white max-w-2xl shadow-lg overflow-hidden sm:rounded-lg mx-auto mb-20'>
        <div className=''>
          <dl>
            <div className='bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Species
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {pokemon.species}
              </dd>
            </div>
            <div className='bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Types
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {
                  (() => pokemon.types.join(', '))()
                }
              </dd>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Moves
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {
                  (() => pokemon.moves.join(', '))()
                }
              </dd>
            </div>
            <div className='bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Weight
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {pokemon.weight}
              </dd>
            </div>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Stats
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>

                <div className='w-full'>
                  {
                    pokemon.stats.map((stat, index) => (
                      <div key={stat.name}>
                        <div className='flex items-center justify-between text-gray-400 text-sm'>
                          <p>
                            {stat.name}
                          </p>
                          <p>
                            {stat.value}
                          </p>
                        </div>
                        <div className={`w-full h-2 bg-${statColors[index] ?? 'gray'}-100 rounded-full mb-4`}>
                          <div className={`h-full text-center text-xs text-white bg-${statColors[index] ?? 'gray'}-500 rounded-full`} style={{ width: `${stat.value < 100 ? stat.value : 100}%` }} />
                        </div>
                      </div>
                    ))
                  }
                </div>

              </dd>
            </div>
          </dl>
        </div>
      </div>
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params!;
  const pokemon = await getPokemonDetails({ id: name?.toString() });
  return {
    props: {
      pokemon,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allNames = await getAllPokemonNames();
  const paths = allNames.map((name) => ({
    params: { name },
  }));
  return {
    paths,
    fallback: false,
  };
};
