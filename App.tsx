import 'react-native-gesture-handler';
import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Navigation from '@src/navigation/navigation';
import {Notification} from '@src/components/ui/Notification';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {authMe, setIsLoggedIn} from '@src/bll/authReducer';
import {BASE_THEME, DARK_THEME} from '@theme/colors';
import {ThemeContext} from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setCurrentTheme, ThemeType} from '@src/bll/appReducer';

export const App = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(state => state.app.currentTheme);
  const isDarkTheme = currentTheme === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkTheme ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        dispatch(authMe());
      } else {
        dispatch(setIsLoggedIn(false));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    AsyncStorage.getItem('theme').then(theme => {
      if (theme) {
        dispatch(setCurrentTheme(theme as ThemeType));
      }
    });
  }, [dispatch]);

  return (
    <ThemeContext.Provider value={isDarkTheme ? DARK_THEME : BASE_THEME}>
      <NavigationContainer>
        <Navigation />
        <Notification />
        <StatusBar
          barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};
