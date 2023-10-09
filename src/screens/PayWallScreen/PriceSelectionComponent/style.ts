import {StyleSheet} from 'react-native';
import {constants} from '../../../utils/theme';
import {RoundPixel} from '../../../utils/dimension';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    height: RoundPixel(60),
    borderRadius: RoundPixel(14),
    borderColor: 'rgba(255, 255, 255, 0.3)',
    flexDirection: 'row',
  },
  selectedContainer: {
    borderWidth: 3,
    borderColor: constants.colors.mainColor,
  },
  labelContainer: {
    backgroundColor: constants.colors.mainColor,
    height: RoundPixel(26),
    position: 'absolute',
    right: 0,
    borderTopRightRadius: RoundPixel(10),
    borderBottomLeftRadius: RoundPixel(14),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: RoundPixel(10),
  },
  label: {
    color: constants.colors.whiteColor,
    fontSize: RoundPixel(12),
    fontWeight: '500',
  },
  radioButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 5,
    justifyContent: 'center',
  },
  price: {
    color: constants.colors.whiteColor,
    fontSize: RoundPixel(16),
    fontWeight: '500',
  },
  duration: {
    color: constants.colors.lightGrayColor,
    fontSize: RoundPixel(12),
    fontWeight: '300',
  },
});
