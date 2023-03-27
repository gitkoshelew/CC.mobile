import {FormInput} from '../../ui/FormInput';
import {ViewCenter} from '../../ui/ReadyStyles/Containers';
import {BlockBox, BoldText, SmallTextBox, SmallTitle} from '../../ui/ReadyStyles/Boxes';
import {WrapperAuth} from '../../Header/styles';
import {TextError} from '../../ui/ReadyStyles/TextError';
import {View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {LoginType} from '@customTypes/authAPI-types';
import {useAppDispatch} from '@hooks/hooks';
import {login} from '@src/bll/authReducer';
import {FormType} from '@src/components/Form';
import {FormButtons} from '@src/components/Form/FormButtons';
import {useTranslation} from 'react-i18next';

export const FormSignIn = ({setIsLogForm}: FormType) => {
  const dispatch = useAppDispatch();
  const {t} = useTranslation('loginForm');

  const {
    control,
    formState: {errors},
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data: LoginType) => {
    await dispatch(login(data));
    reset();
  };

  return (
    <WrapperAuth>
      <View>
        <ViewCenter>
          <SmallTitle>
            {t('Please')} <BoldText>{t('Sign In')}</BoldText> {t('to continue')}
          </SmallTitle>
        </ViewCenter>
        <BlockBox>
          <SmallTextBox>{t('Email')}</SmallTextBox>
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
          <SmallTextBox>{t('Password')}</SmallTextBox>
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
          titleWithoutBackground={t('button.Sing Up')}
          titleWithBackground={t('button.Sing In')}
          setIsLogForm={setIsLogForm}
          value={false}
          onSubmit={handleSubmit(onSubmit)}
        />
      </View>
    </WrapperAuth>
  );
};
