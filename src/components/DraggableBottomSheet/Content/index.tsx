import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header} from '@src/components/Header/index';
import {FormSignIn} from '@src/components/FormSignIn/index';
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import {useTranslation} from 'react-i18next';
import {Color} from '@theme/colors';
import {SmallButton} from '@src/components/ui/SmallButton/index';

const isAuth = false;

export type ContentPropsType = {
  isOpen: boolean;
};

export const Content = ({isOpen}: ContentPropsType) => {
  const {i18n} = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  const opacityValue = useSharedValue(0);

  const opacity = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value,
    };
  });

  isOpen
    ? (opacityValue.value = withTiming(1, {duration: 1500}))
    : (opacityValue.value = withTiming(0, {duration: 300}));

  return (
    <Animated.View style={opacity}>
      <View style={styles.controlPanel}>
        <TouchableOpacity
          onPress={() => changeLanguage(i18n.language === 'en' ? 'ru' : 'en')}
          style={styles.changeLanguageButton}>
          <Text style={styles.textLanguage}>{i18n.language.toUpperCase()}</Text>
        </TouchableOpacity>
        <View style={styles.rowButtons}>
          <SmallButton type="theme" onPress={() => {}} />
          <SmallButton type="exit" onPress={() => {}} />
        </View>
      </View>
      {isAuth ? <Header /> : <FormSignIn />}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  controlPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  changeLanguageButton: {
    backgroundColor: Color.Semitransparent,
    width: 36,
    height: 36,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLanguage: {
    color: Color.White,
    fontWeight: 'bold',
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
  },
});