import {StyleSheet} from 'react-native';
import {RoundPixel} from '../../utils/dimension';
import {constants} from '../../utils/theme';

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    marginTop: RoundPixel(12),
    paddingHorizontal: RoundPixel(24),
  },
  titleInner: {
    fontWeight: '600',
  },
  description: {
    fontWeight: '400',
    fontSize: RoundPixel(16),
    color: constants.colors.secondaryTextColor,
  },
  startImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  startedImage: {
    resizeMode: 'contain',
    width: RoundPixel(375),
    height: RoundPixel(499),
    marginTop: RoundPixel(24),
  },
  title: {
    fontWeight: '400',
    fontSize: RoundPixel(28),
    marginBottom: RoundPixel(8),
    color: constants.colors.mainTextColor,
  },
  buttonContainer: {
    paddingHorizontal: RoundPixel(24),
  },
  bottomText: {
    textAlign: 'center',
    fontSize: RoundPixel(11),
    marginVertical: RoundPixel(16),
    paddingHorizontal: RoundPixel(70),
    color: constants.colors.borderColor,
  },
  bottomTextInner: {
    textDecorationLine: 'underline',
  },
});
