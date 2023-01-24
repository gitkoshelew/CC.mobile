import {Formik} from 'formik';
import {FormInput} from '../ui/FormInput';
import {ViewCenter} from '../ui/ReadyStyles/Containers';
import {BlockBox, SmallBox, SmallTitle} from '../ui/ReadyStyles/Boxes';
import {LoginButton} from '../ui/LoginButton';
import {Wrapper} from '../Header/styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

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

  const changeOpacity = () => {
    isOpen
      ? (opacityValue.value = withTiming(1, {duration: 1500}))
      : (opacityValue.value = withTiming(0, {duration: 300}));
  };

  isOpen ? changeOpacity() : changeOpacity();

  const signInValues: ISignInValues = {
    email: '',
    password: '',
  };

  return (
    <Formik initialValues={signInValues} onSubmit={(): void => {}}>
      {({handleChange, handleSubmit, values}) => (
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
            </BlockBox>
            <BlockBox>
              <FormInput
                placeholder="Enter password"
                onChangeText={handleChange('password')}
                value={values.password}
                secureTextEntry={true}
              />
            </BlockBox>
            <ViewCenter>
              <SmallBox>
                <LoginButton
                  onPress={handleSubmit}
                  title="Sign in"
                  type="primary"
                />
              </SmallBox>
            </ViewCenter>
          </Animated.View>
        </Wrapper>
      )}
    </Formik>
  );
};
