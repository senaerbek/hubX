import {StyleSheet} from 'react-native';
import {RoundPixel} from '../utils/dimension';
import {constants} from '../utils/theme';

export const iconSize = 24;
export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: constants.colors.backgroundColor,
  },
  icon: {
    width: RoundPixel(24),
    height: RoundPixel(24),
  },
});
