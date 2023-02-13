import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {CustomText} from '@src/components/ui/ReadyStyles/Boxes/index';
import {Color} from '@theme/colors';
import {styles} from '@src/components/MemoryCardsList/MemoryCard/styles';

type CardType = {
  id: number;
  title: string;
  description: string;
};

type MemoryCardPropsType = {
  index: number;
  card: CardType;
  blockStructure: 'row' | 'column';
};

export const MemoryCard = ({card, index, blockStructure}: MemoryCardPropsType) => {
  return (
    <TouchableOpacity style={styles({blockStructure}).wrapper}>
      <View style={styles({blockStructure, index}).container}>
        <CustomText fs="18px" color={Color.White} fw="bold">
          {card.title}
        </CustomText>
        <CustomText fs="14px" color={Color.White}>
          {card.description}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};
