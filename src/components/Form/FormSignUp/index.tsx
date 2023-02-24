import {FormInput} from '../../ui/FormInput';
import {ViewCenter} from '../../ui/ReadyStyles/Containers';
import {BlockBox, BoldText, SmallTextBox, SmallTitle} from '../../ui/ReadyStyles/Boxes';
import {WrapperAuth} from '../../Header/styles';
import {TextError} from '../../ui/ReadyStyles/TextError';
import {View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {RegistrationType} from '@customTypes/authAPI-types';
import {useAppDispatch} from '@hooks/hooks';
import {register} from '@src/bll/authReducer';
import {FormType} from '@src/components/Form';
import {FormButtons} from '@src/components/Form/FormButtons';

export const FormSignUp = ({setIsLogForm}: FormType) => {
  const dispatch = useAppDispatch();
  const {
    control,
    formState: {errors},
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: '',
      nickname: '',
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data: RegistrationType) => {
    await dispatch(register(data));
    reset();
  };

  return (
    <WrapperAuth>
      <View>
        <ViewCenter>
          <SmallTitle>
            Please <BoldText>Sign Up</BoldText> to continue
          </SmallTitle>
        </ViewCenter>
        <BlockBox>
          <SmallTextBox>Name</SmallTextBox>
          <Controller
            control={control}
            rules={{
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Minimum 3 characters',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <FormInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter name"
              />
            )}
            name={'name'}
          />
          {errors.name && <TextError>{errors.name.message || 'Error!'}</TextError>}
        </BlockBox>
        <BlockBox>
          <SmallTextBox>Nickname</SmallTextBox>
          <Controller
            control={control}
            rules={{
              required: 'Nickname is required',
              minLength: {
                value: 3,
                message: 'Minimum 3 characters',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <FormInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter nickname"
              />
            )}
            name={'nickname'}
          />
          {errors.nickname && <TextError>{errors.nickname.message || 'Error!'}</TextError>}
        </BlockBox>
        <BlockBox>
          <SmallTextBox>Email</SmallTextBox>
          <Controller
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: 'Invalid email',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <FormInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter email"
              />
            )}
            name={'email'}
          />
          {errors.email && <TextError>{errors.email.message || 'Error!'}</TextError>}
        </BlockBox>
        <BlockBox>
          <SmallTextBox>Password</SmallTextBox>
          <Controller
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Minimum 8 characters',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <FormInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter password"
                secureTextEntry={true}
              />
            )}
            name={'password'}
          />
          {errors.password && <TextError>{errors.password.message || 'Error!'}</TextError>}
        </BlockBox>
        <FormButtons
          title="Sign in"
          buttonTitle="Sign up"
          setIsLogForm={setIsLogForm}
          value={true}
          onSubmit={handleSubmit(onSubmit)}
        />
      </View>
    </WrapperAuth>
  );
};
