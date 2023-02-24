import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ViewFlex} from '@src/components/ui/ReadyStyles/Containers';
import {ScreenList} from '@src/navigation/navigation';
import {RootHomeScreenParamsList} from '@src/customTypes/navigation-types';
import {Main} from '@src/screens/Main/Main/Main';

const {Navigator, Screen} = createNativeStackNavigator<RootHomeScreenParamsList>();

export const Home = () => {
  return (
    <ViewFlex>
      <Navigator>
        <Screen name={ScreenList.MAIN} component={Main} options={{headerShown: false}} />
      </Navigator>
    </ViewFlex>
  );
};
