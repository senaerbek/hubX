import {StyleSheet} from 'react-native';
import {RoundPixel} from '../../utils/dimension';
import {constants} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
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
  scanIcon: {
    tintColor: '#fff',
    width: RoundPixel(25),
    height: RoundPixel(25),
  },
  scanButton: {
    height: RoundPixel(60),
    width: RoundPixel(60),
    backgroundColor: constants.colors.mainColor,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButtonOuter: {
    height: RoundPixel(64),
    width: RoundPixel(64),
    position: 'absolute',
    top: RoundPixel(-16),
    backgroundColor: '#2CCC80',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    zIndex: 1,
  },
});
