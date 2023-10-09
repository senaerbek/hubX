import {Dimensions, StyleSheet} from 'react-native';
import {RoundPixel} from '../../utils/dimension';
import {constants} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    zIndex: 999,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: RoundPixel(28),
    fontWeight: '500',
    color: constants.colors.mainTextColor,
  },
  boldTitle: {
    fontSize: RoundPixel(28),
    fontWeight: '800',
    color: constants.colors.mainTextColor,
  },
  image: {
    width: Dimensions.get('window').width,
    height: RoundPixel(523),
    resizeMode: 'contain',
    zIndex: 0,
  },
  buttonContainer: {
    marginHorizontal: RoundPixel(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RoundPixel(60),
    marginTop: RoundPixel(32),
  },
  slideIcon: {
    marginHorizontal: RoundPixel(8),
    width: RoundPixel(6),
    height: RoundPixel(6),
    borderRadius: RoundPixel(10),
    backgroundColor: constants.colors.borderColor,
  },
  activeSlideIcon: {
    width: RoundPixel(10),
    height: RoundPixel(10),
    backgroundColor: constants.colors.blackColor,
  },
});
