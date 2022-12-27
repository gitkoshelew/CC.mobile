import React, {useEffect, useRef} from 'react';
import {ButtomCenter, styleWithSheet} from '../styles';
import * as Animatable from 'react-native-animatable';
import {getIcon} from '../../utils/getIconNavigate';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';

export type TabButtonPropsType = BottomTabBarButtonProps & {
  name: string;
  size?: number;
};

export const TabButton = (props: TabButtonPropsType) => {
  const {name, onPress, accessibilityState, size} = props;
  console.log(props);
  const viewRef = useRef<null>(null);
  const focused = accessibilityState?.selected;

  useEffect(() => {
    if (focused) {
      // @ts-ignore
      viewRef.current.animate({
        0: {scale: 0.5, rotate: '0deg'},
        1: {scale: 1.5, rotate: '360deg'},
      });
    } else {
      // @ts-ignore
      viewRef.current.animate({
        0: {scale: 1.5, rotate: '360deg'},
        1: {scale: 1, rotate: '0deg'},
      });
    }
  }, [focused]);

  return (
    <ButtomCenter onPress={onPress} activeOpacity={1}>
      <Animatable.View
        style={styleWithSheet.ViewCenter}
        ref={viewRef}
        animation="zoomIn"
        duration={1000}>
        {getIcon(name, focused, size)}
      </Animatable.View>
    </ButtomCenter>
  );
};
