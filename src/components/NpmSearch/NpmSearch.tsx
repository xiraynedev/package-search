import {FC, FormEvent, useState} from 'react';
import {useActions} from '../../redux/hooks/useActions';
import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {RootState} from '../../redux/types';
import {v4} from 'uuid';

export const NpmSearch: FC = () => {

  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const [packageName, setPackageName] = useState('');
  const {searchPackages} = useActions();
  const {loading, error, data} = useTypedSelector((state) => state.packageReducer);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    searchPackages(packageName);

    setPackageName('');
  }

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setPackageName(event.currentTarget.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='w-9/12 md:max-w-2xl mx-auto'>
        <div className="flex flex-col p-4">
          <input type="search" placeholder="Enter package name..."
                 className="border p-2 mb-3" value={packageName} onChange={handleChange}/>
          <button type="submit" className="border-red-50 border p-2 bg-blue-900 text-white tracking-widest">Submit
          </button>
        </div>
      </form>
      <div className='w-9/12 md:max-w-2xl mx-auto'>
        {error && <h3 className='pl-4 pt-2 text-red-700'>{error}</h3>}
        {loading && <h3 className='pl-4 pt-2'>Loading...</h3>}
        {
          !error && !loading && (
            <ul className='pt-2 pl-4'>
              {data.map(result => {
                return <li key={v4()}>{result}</li>
              })}
            </ul>
          )
        }
      </div>
    </>
  );
};