import {StyleSheet} from 'react-native';
import {RoundPixel} from '../../../utils/dimension';
import {constants} from '../../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    width: RoundPixel(240),
    height: RoundPixel(164),
    justifyContent: 'flex-end',
  },
  containerImageStyle: {
    borderRadius: RoundPixel(12),
  },
  titleContainer: {
    height: RoundPixel(64),
    justifyContent: 'center',
    padding: RoundPixel(14),
  },
  title: {
    color: constants.colors.whiteColor,
    fontSize: RoundPixel(15),
    fontWeight: '400',
  },
});
