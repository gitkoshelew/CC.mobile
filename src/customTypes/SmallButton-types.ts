import {TouchableOpacityProps as DefaultTouchableOpacityProps} from 'react-native';

export type ITouchableOpacityProps = DefaultTouchableOpacityProps;

export interface IButtonProps extends ITouchableOpacityProps {
  onPress?: () => void;
  type: 'check' | 'edit' | 'delete';
}
