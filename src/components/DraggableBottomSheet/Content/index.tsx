import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header} from '@src/components/Header/index';
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import {useTranslation} from 'react-i18next';
import {Color} from '@theme/colors';
import {SmallButton} from '@src/components/ui/SmallButton/index';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {logout} from '@src/bll/authReducer';
import {Form} from '@src/components/Form';

export type ContentPropsType = {
  isOpen: boolean;
  isLogForm: boolean;
  setIsLogForm: (value: boolean) => void;
};

export const Content = ({isOpen, isLogForm, setIsLogForm}: ContentPropsType) => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.authReducer.isAuth);
  const {i18n} = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  const opacityValue = useSharedValue(0);
  const logoutHandler = () => {
    dispatch(logout());
    setIsLogForm(true);
  };

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
        <View style={isAuth && styles.rowButtons}>
          <SmallButton type="theme" />
          {isAuth && <SmallButton type="exit" onPress={logoutHandler} />}
        </View>
      </View>
      {isAuth ? <Header /> : <Form isLogForm={isLogForm} setIsLogForm={setIsLogForm} />}
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
