import {StyleSheet} from 'react-native';
import {RoundPixel} from '../../utils/dimension';
import {constants} from '../../utils/theme';

export const styles = StyleSheet.create({
  scanIcon: {
    width: RoundPixel(25),
    height: RoundPixel(25),
    tintColor: constants.colors.iconColor,
  },
  scanButton: {
    height: RoundPixel(60),
    width: RoundPixel(60),
    backgroundColor: constants.colors.mainColor,
    borderRadius: RoundPixel(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButtonOuter: {
    height: RoundPixel(64),
    width: RoundPixel(64),
    position: 'absolute',
    top: RoundPixel(-16),
    backgroundColor: '#2CCC80',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    zIndex: 1,
  },
});
