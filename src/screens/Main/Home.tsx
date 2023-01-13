import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ViewFlex} from '../../components/ui/ReadyStyles/Containers';
import {RootHomeScreenParamsList} from '@types/navigation-types';
import {ScreenList} from '../../navigation/navigation';
import {Main} from './Main';
import {SignUp} from './SignUp';
import {FormSignIn} from '@src/components/FormSignIn';

const {Navigator, Screen} =
  createNativeStackNavigator<RootHomeScreenParamsList>();

export const Home = () => {
  return (
    <ViewFlex>
      <Navigator>
        <Screen
          name={ScreenList.MAIN}
          component={Main}
          options={{headerShown: false}}
        />
        <Screen name={ScreenList.SIGN_IN} component={FormSignIn} />
        <Screen name={ScreenList.SIGN_UP} component={SignUp} />
      </Navigator>
    </ViewFlex>
  );
};
