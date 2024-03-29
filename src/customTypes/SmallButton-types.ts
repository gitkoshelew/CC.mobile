import {TouchableOpacityProps as DefaultTouchableOpacityProps} from 'react-native';
import {Color} from '@theme/colors';

export type ITouchableOpacityProps = DefaultTouchableOpacityProps;

export interface IButtonProps extends ITouchableOpacityProps {
  type: SmallButtonType;
  onPress?: () => void;
  color?: Color;
}

export type SmallButtonType = 'check' | 'edit' | 'delete' | 'theme' | 'exit';
