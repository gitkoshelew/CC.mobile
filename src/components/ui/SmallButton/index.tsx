import {TouchableOpacity} from 'react-native';
import {Box} from './styles';
import {Color} from '@theme/colors';
import {IButtonProps} from '@customTypes/SmallButton-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const SmallButton = ({type, onPress, ...props}: IButtonProps) => {
  return (
    <Box>
      <TouchableOpacity {...props} onPress={onPress}>
        {type === 'check' && (
          <Ionicons name={'shield-checkmark'} size={17} color={Color.GrayMedium} />
        )}
        {type === 'edit' && <MaterialIcons name={'edit'} size={17} color={Color.GrayMedium} />}
        {type === 'delete' && (
          <MaterialIcons name={'delete'} size={17} color={Color.GrayMedium} />
        )}
      </TouchableOpacity>
    </Box>
  );
};
