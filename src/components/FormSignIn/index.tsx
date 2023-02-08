import {Formik} from 'formik';
import {FormInput} from '../ui/FormInput';
import {ViewCenter} from '../ui/ReadyStyles/Containers';
import {BlockBox, SmallTitle} from '../ui/ReadyStyles/Boxes';
import {LoginButton} from '../ui/LoginButton';
import {Wrapper} from '../Header/styles';
import * as Yup from 'yup';
import {TextError} from '../ui/ReadyStyles/TextError';
import {Container} from './styles';
import {View} from 'react-native';

export interface ISignInValues {
  email: string;
  password: string;
}

export const FormSignIn = () => {
  const signInValues: ISignInValues = {
    email: '',
    password: '',
  };

  const signInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is equired'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Password is equired'),
  });

  return (
    <Formik
      initialValues={signInValues}
      onSubmit={(values: ISignInValues): void => {
        console.log(values);
      }}
      validationSchema={signInSchema}>
      {({handleChange, handleSubmit, values, errors}) => (
        <Wrapper>
          <View>
            <ViewCenter>
              <SmallTitle>Please sign in to continue</SmallTitle>
            </ViewCenter>
            <BlockBox>
              <FormInput
                placeholder="Enter email"
                onChangeText={handleChange('email')}
                value={values.email}
              />
              {errors.email && <TextError>{errors.email}</TextError>}
            </BlockBox>
            <BlockBox>
              <FormInput
                placeholder="Enter password"
                onChangeText={handleChange('password')}
                value={values.password}
                secureTextEntry={true}
              />
              {errors.password && <TextError>{errors.password}</TextError>}
            </BlockBox>
            <Container>
              <LoginButton onPress={handleSubmit} title="Sign in" type="primary" />
            </Container>
          </View>
        </Wrapper>
      )}
    </Formik>
  );
};
