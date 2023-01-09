import {TouchableOpacity} from 'react-native';
import {StyledTouchableOpacityText} from './styles';
import {TouchableOpacityProps as DefaultTouchableOpacityProps} from 'react-native';

export type ITouchableOpacityProps = DefaultTouchableOpacityProps;

export interface ILinkButtonProps extends ITouchableOpacityProps {
  onPress?: () => void;
}

export const LinkButton = ({onPress, children, ...props}: ILinkButtonProps) => {
  return (
    <TouchableOpacity {...props} onPress={onPress}>
      <StyledTouchableOpacityText>{children}</StyledTouchableOpacityText>
    </TouchableOpacity>
  );
};
