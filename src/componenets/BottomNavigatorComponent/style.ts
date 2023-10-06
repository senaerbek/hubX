import {StyleSheet} from 'react-native';
import {RoundPixel} from '../../utils/dimension';

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
    tintColor: '#28AF6E',
  },
  tabIconUnfocused: {
    tintColor: '#BDBDBD',
  },
  label: {
    fontSize: RoundPixel(10),
  },
  labelFocused: {
    color: '#28AF6E',
  },
  labelUnfocused: {
    color: '#979798',
  },
  scanIcon: {
    tintColor: '#fff',
    width: RoundPixel(25),
    height: RoundPixel(25),
  },
  scanButton: {
    height: RoundPixel(60),
    width: RoundPixel(60),
    backgroundColor: '#28AF6E',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButtonOuter: {
    height: RoundPixel(64),
    width: RoundPixel(64),
    position: 'absolute',
    top: RoundPixel(-16),
    backgroundColor: '#5effb4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    zIndex: 1,
  },
});
