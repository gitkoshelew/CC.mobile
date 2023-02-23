import {ViewDynamicFlex} from '@src/components/ui/ReadyStyles/Containers';
import {Container} from '@src/components/Form/styles';
import {LoginButton} from '@src/components/ui/LoginButton';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Color} from '@theme/colors';

type FormButtonType = {
  onSubmit: () => Promise<void>;
  setIsLogForm: (value: boolean) => void;
  value: boolean;
  title: string;
  buttonTitle: string;
};

export const FormButtons = ({
  onSubmit,
  setIsLogForm,
  value,
  title,
  buttonTitle,
}: FormButtonType) => {
  return (
    <>
      <ViewDynamicFlex justifyC="center" alignI="center">
        <Container>
          <LoginButton onPress={() => onSubmit()} title={buttonTitle} type="primary" />
        </Container>
        <TouchableOpacity onPress={() => setIsLogForm(value)}>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      </ViewDynamicFlex>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginBottom: 25,
    color: Color.BlueLight,
    fontFamily: 'Montserrat-Regular',
  },
});
