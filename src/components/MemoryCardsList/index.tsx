import React, {useEffect, useRef, useState} from 'react';
import {CustomText} from '@src/components/ui/ReadyStyles/Boxes/index';
import {TouchableOpacity, View} from 'react-native';
import {styles} from '@src/components/MemoryCardsList/styles';
import {MemoryCard} from '@src/components/MemoryCardsList/MemoryCard/index';
import LottieView from 'lottie-react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';

export const MemoryCardsList = () => {
  const fakeMemoryCard = [...Array(6)].map((_, i) => ({
    id: i,
    title: `Pack ${i + 1}`,
    description: 'Lorem ipsum dolor.',
  }));
  const [formatList, setFormatList] = useState<'row' | 'column'>('row');
  let animatedValue = useRef<LottieView>(null);
  const onChangeTypeListPressed = () => {
    setFormatList(state => (state === 'row' ? 'column' : 'row'));
  };

  useEffect(() => {
    animatedValue.current?.play();
  }, [formatList]);

  return (
    <View style={styles().wrapper}>
      <View style={styles().headerContainer}>
        <CustomText fs="24px" fw="bold">
          Memory cards
        </CustomText>
        <TouchableOpacity style={styles().listFormatButton} onPress={onChangeTypeListPressed}>
          <LottieView ref={animatedValue} source={require('../../assets/02')} loop={true} />
        </TouchableOpacity>
      </View>
      <Animated.View entering={FadeInDown} style={styles(formatList).container}>
        {fakeMemoryCard.map((item, index) => (
          <MemoryCard key={item.id} index={index} item={item} blockStructure={formatList} />
        ))}
      </Animated.View>
    </View>
  );
};
