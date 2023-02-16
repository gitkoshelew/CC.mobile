import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootCardsScreenParamsList} from '@customTypes/navigation-types';
import {ViewFlex} from '@src/components/ui/ReadyStyles/Containers/index';
import {ScreenList} from '@src/navigation/navigation';
import {CardsList} from '@src/screens/Cards/components/CardsList/index';

const Stack = createNativeStackNavigator<RootCardsScreenParamsList>();

export const Cards = () => {
  return (
    <ViewFlex>
      <Stack.Navigator>
        <Stack.Screen name={ScreenList.CARDS_LIST} component={CardsList} />
      </Stack.Navigator>
    </ViewFlex>
  );
};
