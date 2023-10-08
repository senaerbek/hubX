import {StyleSheet} from 'react-native';
import {RoundPixel} from '../../../utils/dimension';
import {constants} from '../../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    width: RoundPixel(156),
    height: RoundPixel(130),
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: RoundPixel(14),
    justifyContent: 'space-between',
    padding: RoundPixel(16),
  },
  title: {
    color: constants.colors.whiteColor,
    fontSize: RoundPixel(20),
    fontWeight: '500',
  },
  description: {
    color: constants.colors.whiteColor,
    fontSize: RoundPixel(13),
    fontWeight: '400',
  },
  iconContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    borderRadius: RoundPixel(8),
    width: RoundPixel(36),
    height: RoundPixel(36),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: RoundPixel(18),
    height: RoundPixel(18),
  },
});
