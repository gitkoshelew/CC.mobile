import {StyleSheet} from 'react-native';
import {Box, ButtonContainer} from './styles';
import {Color} from '@theme/colors';
import {IButtonProps} from '@customTypes/SmallButton-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const SmallButton = ({type, onPress, ...props}: IButtonProps) => {
  const styles = StyleSheet.create({
    boxColor: {
      backgroundColor:
        type === 'theme' || 'exit' ? Color.Semitransparent : Color.GrayLight,
    },
  });

  return (
    <Box onPress={onPress}>
      <ButtonContainer {...props} style={styles.boxColor}>
        {type === 'check' && (
          <Ionicons
            name={'shield-checkmark'}
            size={17}
            color={Color.GrayMedium}
          />
        )}
        {type === 'edit' && (
          <MaterialIcons name={'edit'} size={17} color={Color.GrayMedium} />
        )}
        {type === 'delete' && (
          <MaterialIcons name={'delete'} size={17} color={Color.GrayMedium} />
        )}
        {type === 'theme' && (
          <Ionicons name={'moon'} size={17} color={Color.White} />
        )}
        {type === 'exit' && (
          <MaterialCommunityIcons
            name={'location-exit'}
            size={17}
            color={Color.White}
          />
        )}
      </ButtonContainer>
    </Box>
  );
};
