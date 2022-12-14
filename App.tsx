import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {Home} from "./src/screens/Home";



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(()=>{

    SplashScreen.hide();
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
        <Home/>
    </SafeAreaView>
  );
};


export default App;
