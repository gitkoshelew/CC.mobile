import React, {useEffect, useRef, useState} from 'react';
import {CustomText} from '@src/components/ui/ReadyStyles/Boxes/index';
import {TouchableOpacity, View} from 'react-native';
import {getStyles} from '@src/components/MemoryCardsList/styles';
import {MemoryCard} from '@src/components/MemoryCardsList/MemoryCard/index';
import LottieView from 'lottie-react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {memoryCardMoc} from '@src/Mocs/MemoryCards';

export const MemoryCardsList = () => {
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
        <CustomText fs="24px" fw="bold">
          Memory cards
        </CustomText>
        <TouchableOpacity
          style={getStyles().listFormatButton}
          onPress={onChangeTypeListPressed}>
          <LottieView ref={animatedValue} source={require('../../assets/02')} loop={true} />
        </TouchableOpacity>
      </View>
      <Animated.View entering={FadeInDown} style={getStyles(formatList).container}>
        {memoryCardMoc.map((card, index) => (
          <MemoryCard key={card.id} index={index} card={card} blockStructure={formatList} />
        ))}
      </Animated.View>
    </View>
  );
};
