import {useRef, useState} from 'react';
import {CustomText, TextDescription} from '@src/components/ui/ReadyStyles/Boxes';
import {TouchableOpacity, View} from 'react-native';
import {getStyles} from '@src/components/MemoryCardsList/styles';
import {MemoryCard} from '@src/components/MemoryCardsList/MemoryCard';
import LottieView from 'lottie-react-native';
import {memoryCardMoc} from '@src/Mocs/MemoryCards';
import {useAppSelector} from '@hooks/hooks';

type MemoryCardsType = {
  isLoggedIn: boolean;
};

const AnimateLocationBlocks = [
  require('@src/assets/splitting-square-dark.json'),
  require('@src/assets/splitting-square-light.json'),
];

export const MemoryCardsList = ({isLoggedIn}: MemoryCardsType) => {
  const currentTheme = useAppSelector(state => state.app.currentTheme);
  const [formatList, setFormatList] = useState<'row' | 'column'>('row');
  let animatedValue = useRef<LottieView>(null);
  const onChangeTypeListPressed = () => {
    setFormatList(state => (state === 'row' ? 'column' : 'row'));
  };

  return (
    <View style={getStyles().wrapper}>
      <View style={getStyles().headerContainer}>
        <CustomText fs="24px" fw="bold">
          Memory cards
        </CustomText>
        {isLoggedIn && (
          <TouchableOpacity
            style={getStyles().listFormatButton}
            onPress={onChangeTypeListPressed}>
            <LottieView
              ref={animatedValue}
              source={
                currentTheme === 'light' ? AnimateLocationBlocks[0] : AnimateLocationBlocks[1]
              }
              loop={true}
              autoPlay
            />
          </TouchableOpacity>
        )}
      </View>
      {isLoggedIn ? (
        <View style={getStyles(formatList).container}>
          {memoryCardMoc.map((card, index) => (
            <MemoryCard key={card.id} index={index} card={card} blockStructure={formatList} />
          ))}
        </View>
      ) : (
        <View style={getStyles().description}>
          <TextDescription>You need to login or register</TextDescription>
        </View>
      )}
    </View>
  );
};
