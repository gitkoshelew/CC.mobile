import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Home} from './src/screens/Home';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import store from './src/bll/store/store';
import StorybookUIRoot from './.storybook/Storybook';

const useStorybook = false;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default useStorybook ? StorybookUIRoot : App;
