import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '@theme/colors';
import {BlockBox} from '@src/components/ui/ReadyStyles/Boxes/index';
import Octicons from 'react-native-vector-icons/Octicons';

export type CustomModalPropsType = {
  isModalVisible: boolean;
  onPress: (value: boolean) => void;
  text: string;
};

export const CustomModal = ({isModalVisible, onPress, text}: CustomModalPropsType) => {
  return (
    <View>
      <Modal
        style={styles.Wrapper}
        isVisible={isModalVisible}
        backdropOpacity={0.3}
        onBackdropPress={() => onPress(false)}>
        <View style={styles.ModalContainer}>
          <Octicons style={styles.AlertIcon} name="alert" size={30} color={Color.Yellow} />
          <BlockBox>
            <Text style={styles.TextBlock}>{text}</Text>
          </BlockBox>
          <TouchableOpacity style={styles.Button} onPress={() => onPress(!isModalVisible)}>
            <Text style={[styles.TextBlock, styles.TextButton]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.White,
    width: 300,
    paddingTop: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  AlertIcon: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextBlock: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
  TextButton: {
    color: Color.White,
    fontSize: 16,
  },
  Button: {
    width: 300,
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: Color.BlueLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
