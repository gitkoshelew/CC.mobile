import {Formik} from 'formik';
import {AppButton} from '../ui/AppButton';
import {FormInput} from '../ui/FormInput';
import {ViewCenter, ViewContainer} from '../ui/ReadyStyles/Containers';
import {
  BlockBox,
  SmallBox,
  SmallTextBox,
  TextDescription,
  Title,
} from '../ui/ReadyStyles/Boxes';
import {Container} from './styles';
import {LinkButton} from '../ui/LinkButton';
import {useAppNavigate} from '../../hooks/hooks';
import {ScreenList} from '../../navigation/navigation';

export interface ISignInValues {
  email: string;
  password: string;
}
export const FormSignIn = () => {
  const {navigate} = useAppNavigate();

  const signInValues: ISignInValues = {
    email: '',
    password: '',
  };

  return (
    <Formik initialValues={signInValues} onSubmit={(): void => {}}>
      {({handleChange, handleSubmit, values}) => (
        <Container
          source={require('../../assets/images/background-second.png')}
          resizeMode="stretch">
          <ViewContainer>
            <Title>Sign In</Title>
            <TextDescription>Please sign in to continue</TextDescription>
            <BlockBox>
              <FormInput
                placeholder="Enter email"
                onChangeText={handleChange('email')}
                value={values.email}
              />
            </BlockBox>
            <BlockBox>
              <FormInput
                placeholder="Enter password"
                onChangeText={handleChange('password')}
                value={values.password}
                secureTextEntry={true}
                // textContentType="password"
              />
            </BlockBox>
            <ViewCenter>
              <SmallBox>
                <AppButton
                  onPress={handleSubmit}
                  title="Sign In"
                  type="secondary"
                />
              </SmallBox>
              <SmallBox>
                <SmallTextBox>or</SmallTextBox>
              </SmallBox>
              <LinkButton
                onPress={() =>
                  navigate(ScreenList.HOME, {screen: ScreenList.SIGN_UP})
                }>
                Sign up
              </LinkButton>
            </ViewCenter>
          </ViewContainer>
        </Container>
      )}
    </Formik>
  );
};
