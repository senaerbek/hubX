import {StyleSheet} from 'react-native';
import {RoundPixel} from '../../utils/dimension';
import {constants} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: constants.colors.whiteColor,
    height: RoundPixel(50),
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: RoundPixel(25),
    height: RoundPixel(25),
  },
  tabIconFocused: {
    tintColor: constants.colors.mainColor,
  },
  tabIconUnfocused: {
    tintColor: constants.colors.lightGrayColor,
  },
  label: {
    fontSize: RoundPixel(10),
  },
  labelFocused: {
    color: constants.colors.mainColor,
  },
  labelUnfocused: {
    color: constants.colors.grayColor,
  },
});
