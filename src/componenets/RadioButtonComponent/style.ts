import {StyleSheet} from 'react-native';
import {RoundPixel} from '../../utils/dimension';
import {constants} from '../../utils/theme';

export const styles = StyleSheet.create({
  radioButton: {
    width: RoundPixel(24),
    height: RoundPixel(24),
    borderRadius: RoundPixel(24),
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  selectedRadioButton: {
    backgroundColor: constants.colors.mainColor,
    borderColor: constants.colors.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonInner: {
    width: RoundPixel(10),
    height: RoundPixel(10),
    borderRadius: RoundPixel(12),
    backgroundColor: constants.colors.whiteColor,
  },
});
