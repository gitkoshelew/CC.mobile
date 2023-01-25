import {Formik} from 'formik';
import {FormInput} from '../ui/FormInput';
import {ViewCenter} from '../ui/ReadyStyles/Containers';
import {BlockBox, SmallTitle} from '../ui/ReadyStyles/Boxes';
import {LoginButton} from '../ui/LoginButton';
import {Wrapper} from '../Header/styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import * as Yup from 'yup';
import {TextError} from '../ui/ReadyStyles/TextError';
import {Container} from './styles';

export interface ISignInValues {
  email: string;
  password: string;
}

interface IProps {
  isOpen: boolean;
}

export const FormSignIn = ({isOpen}: IProps) => {
  const opacityValue = useSharedValue(0);

  const opacity = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value,
    };
  });

  isOpen
    ? (opacityValue.value = withTiming(1, {duration: 1500}))
    : (opacityValue.value = withTiming(0, {duration: 300}));

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
          <Animated.View style={opacity}>
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
              <LoginButton
                onPress={handleSubmit}
                title="Sign in"
                type="primary"
              />
            </Container>
          </Animated.View>
        </Wrapper>
      )}
    </Formik>
  );
};
