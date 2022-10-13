import { FC, FormEvent, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  searchPackages,
  packagesSuccess,
  packagesError,
} from './npmSearchSlice';

interface PackageProps {
  objects: [
    {
      package: {
        date: string;
        description: string;
        keywords: string[];
        links: {
          npm: string;
          homepage: string;
          repository: string;
          bugs: string;
        };
        maintainers: [
          {
            username: string;
            email: string;
          },
        ];
        name: string;
        publisher: {
          username: string;
          email: string;
        };
        scope: string;
        version: string;
      };
      score: {
        detail: {
          quality: number;
          popularity: number;
          maintenance: number;
        };
        final: number;
      };
      searchScore: number;
    },
  ];
  time: string;
  total: number;
}

export const NpmSearch: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector((state) => state.search);

  const [packageName, setPackageName] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    dispatch(searchPackages());

    try {
      const response = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${packageName}`,
      );
      const data: PackageProps = await response.json();

      if (data) {
        const names = data.objects.map((result) => {
          return result.package.name;
        });

        dispatch(packagesSuccess(names));
      }
    } catch (err: unknown) {
      dispatch(packagesError('Package fetch has failed.'));
    }

    setPackageName('');
  }

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setPackageName(event.currentTarget.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='w-9/12 md:max-w-2xl mx-auto'>
        <div className='flex flex-col p-4'>
          <input
            type='search'
            placeholder='Enter package name...'
            className='border p-2 mb-3 outline-blue-200'
            value={packageName}
            onChange={handleChange}
          />
          <button
            type='submit'
            className='border-red-50 border p-2 bg-blue-900 text-white tracking-widest'
          >
            Submit
          </button>
        </div>
      </form>
      <div className='w-9/12 md:max-w-2xl mx-auto'>
        {error && <h3 className='pl-4 pt-2 text-red-700'>{error}</h3>}
        {loading && <h3 className='pl-4 pt-2'>Loading...</h3>}
        {!error && !loading && (
          <ul className='pt-2 pl-4'>
            {data.map((result) => {
              return <li key={nanoid()}>{result}</li>;
            })}
          </ul>
        )}
      </div>
    </>
  );
};
