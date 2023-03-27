import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootCardsScreenParamsList} from '@customTypes/navigation-types';
import {ViewFlex} from '@src/components/ui/ReadyStyles/Containers/index';
import {ScreenList} from '@src/navigation/navigation';
import {CardsList} from '@src/screens/Cards/components/CardsList/index';
import {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';
import {styles} from '@src/components/ui/ReadyStyles/navigatorStyle';

const Stack = createNativeStackNavigator<RootCardsScreenParamsList>();

export const Cards = () => {
  const theme = useContext(ThemeContext);

  return (
    <ViewFlex>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles(theme).headerStyle,
          headerTitleStyle: styles(theme).headerTitleStyle,
        }}>
        <Stack.Screen name={ScreenList.CARDS_LIST} component={CardsList} />
      </Stack.Navigator>
    </ViewFlex>
  );
};
