import {StyleSheet} from 'react-native';
import {RoundPixel} from '../../utils/dimension';
import {constants} from '../../utils/theme';

export const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    height: RoundPixel(571),
    width: '100%',
    backgroundColor: '#101E17',
    justifyContent: 'flex-end',
  },
  body: {
    marginHorizontal: RoundPixel(24),
    marginBottom: RoundPixel(24),
  },
  title: {
    color: constants.colors.whiteColor,
    fontSize: RoundPixel(27),
    fontWeight: '300',
  },
  titleInner: {
    fontSize: RoundPixel(30),
    fontWeight: '800',
  },
  description: {
    color: constants.colors.whiteColor,
    fontSize: RoundPixel(17),
    fontWeight: '300',
  },
  infoListContainer: {
    marginRight: RoundPixel(8),
    marginTop: RoundPixel(20),
    marginBottom: RoundPixel(24),
  },
  priceListContainer: {
    marginBottom: RoundPixel(16),
  },
  bottomText: {
    textAlign: 'center',
    fontSize: RoundPixel(9),
    marginVertical: RoundPixel(16),
    color: constants.colors.grayColor,
    fontWeight: '300',
  },
  bottomInfoText: {
    textAlign: 'center',
    fontSize: RoundPixel(11),
    marginTop: RoundPixel(10),
    color: constants.colors.lightGrayColor,
    fontWeight: '400',
  },
});
