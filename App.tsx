import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import Navigation from '@src/navigation/navigation';
import {Provider} from 'react-redux';
import store from '@src/bll/store/store';
import StorybookUIRoot from './.storybook/Storybook';
import {Notification} from '@src/components/Notification/index';

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
    <NavigationContainer>
      <Provider store={store}>
        <Navigation />
        <Notification />
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
      </Provider>
    </NavigationContainer>
  );
};

export default useStorybook ? StorybookUIRoot : App;
