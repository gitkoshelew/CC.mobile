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
import {useTranslation} from 'react-i18next';

export const FormSignUp = ({setIsLogForm}: FormType) => {
  const dispatch = useAppDispatch();
  const {t} = useTranslation('loginForm');

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
            {t('Please')} <BoldText>{t('Sign Up')}</BoldText> {t('to continue')}
          </SmallTitle>
        </ViewCenter>
        <BlockBox>
          <SmallTextBox>{t('Name')}</SmallTextBox>
          <Controller
            control={control}
            rules={{
              required: t('validationFields.name.required')!,
              minLength: {
                value: 3,
                message: t('validationFields.name.message')!,
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <FormInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder={t('Enter name')!}
              />
            )}
            name={'name'}
          />
          {errors.name && <TextError>{errors.name.message || 'Error!'}</TextError>}
        </BlockBox>
        <BlockBox>
          <SmallTextBox>{t('Nickname')}</SmallTextBox>
          <Controller
            control={control}
            rules={{
              required: t('validationFields.nickname.required')!,
              minLength: {
                value: 3,
                message: t('validationFields.nickname.message')!,
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <FormInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder={t('Enter nickname')!}
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
              required: t('validationFields.email.required')!,
              pattern: {
                value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: t('validationFields.email.message')!,
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <FormInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={t('Enter email')!}
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
              required: t('validationFields.password.required')!,
              minLength: {
                value: 8,
                message: t('validationFields.password.message')!,
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <FormInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder={t('Enter password')!}
                secureTextEntry={true}
              />
            )}
            name={'password'}
          />
          {errors.password && <TextError>{errors.password.message || 'Error!'}</TextError>}
        </BlockBox>
        <FormButtons
          titleWithoutBackground={t('button.Sing In')!}
          titleWithBackground={t('button.Sing Up')!}
          setIsLogForm={setIsLogForm}
          value={true}
          onSubmit={handleSubmit(onSubmit)}
        />
      </View>
    </WrapperAuth>
  );
};
