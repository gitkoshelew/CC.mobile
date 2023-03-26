import {Provider} from 'react-redux';
import store from '@src/bll/store/store';
import StorybookUIRoot from './.storybook/Storybook';
import {App} from './App';

const useStorybook = false;

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default useStorybook ? StorybookUIRoot : AppWrapper;
