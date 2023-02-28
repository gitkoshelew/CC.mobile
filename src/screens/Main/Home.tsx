import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ViewFlex} from '@src/components/ui/ReadyStyles/Containers';
import {ScreenList} from '@src/navigation/navigation';
import {RootHomeScreenParamsList} from '@src/customTypes/navigation-types';
import {MainContainer} from '@src/screens/Main/Main/MainContainer';

const {Navigator, Screen} = createNativeStackNavigator<RootHomeScreenParamsList>();

export const Home = () => {
  return (
    <ViewFlex>
      <Navigator>
        <Screen
          name={ScreenList.MAIN}
          component={MainContainer}
          options={{headerShown: false}}
        />
      </Navigator>
    </ViewFlex>
  );
};
