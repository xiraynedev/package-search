import {FC} from 'react';
import {NpmSearch} from '../NpmSearch/NpmSearch';
import {store} from '../../redux/store';
import { Provider} from 'react-redux';

export const Container: FC = () => {
  return (
    <Provider store={store}>
        <NpmSearch />
    </Provider>
  );
};