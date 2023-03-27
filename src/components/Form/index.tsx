import {FormSignIn} from '@src/components/Form/FormSignIn';
import {FormSignUp} from '@src/components/Form/FormSignUp';

export type FormType = {
  isLogForm?: boolean;
  setIsLogForm: (value: boolean) => void;
};

export const Form = ({isLogForm, setIsLogForm}: FormType) => {
  return isLogForm ? (
    <FormSignIn setIsLogForm={setIsLogForm} />
  ) : (
    <FormSignUp setIsLogForm={setIsLogForm} />
  );
};
