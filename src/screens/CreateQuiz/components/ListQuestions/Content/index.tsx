import React, {useContext} from 'react';
import {
  BlockBox,
  BlockDynamicMargin,
  CustomText,
} from '@src/components/ui/ReadyStyles/Boxes/index';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Color} from '@theme/colors';
import {DefaultTheme} from 'styled-components';
import {ThemeContext} from 'styled-components/native';

type ContentPropsType = {
  isActive: boolean;
  description: string;
  options: string[];
};

export const Content = ({isActive, options, description}: ContentPropsType) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles().content, isActive ? styles(theme).active : styles(theme).inactive]}>
      <BlockBox>
        <Text style={styles(theme).title}>Description:</Text>
        <CustomText fs="13px">{description}</CustomText>
      </BlockBox>
      <CustomText fs="15px" m="0 0 7px 0" fw="500">
        Options:
      </CustomText>
      <View>
        {options.map((el, i) => (
          <View key={i} style={styles().container}>
            <BlockDynamicMargin m="0 5px 0 0 ">
              <Entypo name="controller-record" color={theme.layout} size={8} />
            </BlockDynamicMargin>
            <CustomText fs="13px">{el}</CustomText>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create((theme?: DefaultTheme) => ({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginBottom: 7,
    borderStyle: 'solid',
    borderColor: Color.GrayMedium,
    borderWidth: 1,
  } as ViewStyle,
  content: {
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: Color.White,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    elevation: 6,
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 5,
    color: theme?.textMainColor,
  } as ViewStyle,
  active: {
    backgroundColor: theme?.block,
  },
  inactive: {
    backgroundColor: theme?.block,
  },
}));
