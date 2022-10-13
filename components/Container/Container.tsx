import { FC } from 'react';
import { Provider } from 'react-redux';
import store from '../../src/app/store';
import { NpmSearch } from '../../src/features/npmSearch/NpmSearch';

const Container: FC = () => {
  return (
    <Provider store={store}>
      <NpmSearch />
    </Provider>
  );
};

export default Container;
