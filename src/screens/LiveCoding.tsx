import {Text} from 'react-native';
import {DraggableBottomSheet} from '../components/DraggableBottomSheet';
import {ContentContainerMax} from '../components/ui/ReadyStyles/Containers';

export const LiveCoding = () => {
  return (
    <ContentContainerMax>
      <Text>Live coding</Text>
      <DraggableBottomSheet />
    </ContentContainerMax>
  );
};
