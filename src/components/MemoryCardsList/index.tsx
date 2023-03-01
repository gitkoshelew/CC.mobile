import React, {useEffect, useRef, useState} from 'react';
import {CustomText, TextDescription} from '@src/components/ui/ReadyStyles/Boxes';
import {TouchableOpacity, View} from 'react-native';
import {getStyles} from '@src/components/MemoryCardsList/styles';
import {MemoryCard} from '@src/components/MemoryCardsList/MemoryCard';
import LottieView from 'lottie-react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {memoryCardMoc} from '@src/Mocs/MemoryCards';
import {useTranslation} from 'react-i18next';
type MemoryCardsType = {
  isLoggedIn: boolean;
};
export const MemoryCardsList = ({isLoggedIn}: MemoryCardsType) => {
  const {t} = useTranslation(['profile', 'validationFields']);
  const [formatList, setFormatList] = useState<'row' | 'column'>('row');
  let animatedValue = useRef<LottieView>(null);
  const onChangeTypeListPressed = () => {
    setFormatList(state => (state === 'row' ? 'column' : 'row'));
  };

  useEffect(() => {
    animatedValue.current?.play();
  }, [formatList]);

  return (
    <View style={getStyles().wrapper}>
      <View style={getStyles().headerContainer}>
        <CustomText fs="20px" fw="bold">
          {t('Memory cards')}
        </CustomText>
        {isLoggedIn && (
          <TouchableOpacity
            style={getStyles().listFormatButton}
            onPress={onChangeTypeListPressed}>
            <LottieView ref={animatedValue} source={require('../../assets/02')} loop={true} />
          </TouchableOpacity>
        )}
      </View>
      {isLoggedIn ? (
        <Animated.View entering={FadeInDown} style={getStyles(formatList).container}>
          {memoryCardMoc.map((card, index) => (
            <MemoryCard key={card.id} index={index} card={card} blockStructure={formatList} />
          ))}
        </Animated.View>
      ) : (
        <View style={getStyles().description}>
          <TextDescription>{t('Need to log in', {ns: 'validationFields'})}</TextDescription>
        </View>
      )}
    </View>
  );
};
