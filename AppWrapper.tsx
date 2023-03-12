import {Provider} from 'react-redux';
import store from '@src/bll/store/store';
import StorybookUIRoot from './.storybook/Storybook';
import {App} from './App';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

const persistor = persistStore(store);
const useStorybook = false;

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default useStorybook ? StorybookUIRoot : AppWrapper;
