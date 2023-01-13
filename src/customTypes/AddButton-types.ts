import {TouchableOpacityProps as DefaultTouchableOpacityProps} from 'react-native';

export type ITouchableOpacityProps = DefaultTouchableOpacityProps;

export interface IAddButtonProps extends ITouchableOpacityProps {
  onPress?: () => void;
  disabled?: boolean;
}
