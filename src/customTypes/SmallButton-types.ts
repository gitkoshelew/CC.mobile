import {TouchableOpacityProps as DefaultTouchableOpacityProps} from 'react-native';
import {Color} from '@theme/colors';

export type ITouchableOpacityProps = DefaultTouchableOpacityProps;

export interface IButtonProps extends ITouchableOpacityProps {
  type: 'check' | 'edit' | 'delete' | 'theme' | 'exit';
  onPress?: () => void;
  color?: Color;
}
