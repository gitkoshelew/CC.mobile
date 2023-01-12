import {TouchableOpacityProps as DefaultTouchableOpacityProps} from 'react-native';

export type ITouchableOpacityProps = DefaultTouchableOpacityProps;

export interface IButtonProps extends ITouchableOpacityProps {
  onPress?: () => void;
  title: string;
  type: 'primary' | 'secondary';
}
