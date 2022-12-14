import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar, StyleSheet,
  useColorScheme,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {Home} from "./src/screens/Home";
import SplashScreen from "react-native-splash-screen";

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
        <Image
            testID='image'
            style={styles.tinyLogo}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});


export default App;
