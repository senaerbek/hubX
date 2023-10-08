import {StyleSheet} from 'react-native';
import {RoundPixel} from '../../../utils/dimension';
import {constants} from '../../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: RoundPixel(152),
    backgroundColor: constants.colors.whiteColor,
    borderWidth: 0.5,
    borderColor: constants.colors.borderColor,
    borderRadius: RoundPixel(12),
    flexDirection: 'row',
  },
  containerImageStyle: {
    borderRadius: RoundPixel(12),
  },
  titleContainer: {
    flex: 0.7,
    paddingTop: RoundPixel(16),
    paddingLeft: RoundPixel(16),
  },
  title: {
    fontSize: RoundPixel(16),
    fontWeight: '500',
    color: constants.colors.mainTextColor,
  },
});
