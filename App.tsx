import 'react-native-gesture-handler';
import {useCallback, useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Navigation from '@src/navigation/navigation';
import {Notification} from '@src/components/ui/Notification';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useAppDispatch} from '@hooks/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setIsAuth} from '@src/bll/authReducer';

export const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const dispatch = useAppDispatch();

  const checkToken = useCallback(async () => {
    const value = await AsyncStorage.getItem('token');
    if (value) {
      dispatch(setIsAuth(true));
    }
    return;
  }, [dispatch]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    SplashScreen.hide();
    checkToken();
  }, [checkToken]);

  return (
    <NavigationContainer>
      <Navigation />
      <Notification />
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </NavigationContainer>
  );
};
