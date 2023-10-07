import {StyleSheet} from 'react-native';
import {RoundPixel} from '../../utils/dimension';
import {constants} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: RoundPixel(56),
    borderRadius: RoundPixel(12),
    backgroundColor: constants.colors.mainColor,
  },
  text: {
    fontWeight: '700',
    fontSize: RoundPixel(15),
    color: constants.colors.whiteColor,
  },
});
