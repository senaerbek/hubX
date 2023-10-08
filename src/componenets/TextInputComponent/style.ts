import {StyleSheet} from 'react-native';
import {RoundPixel} from '../../utils/dimension';
import {constants} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: RoundPixel(44),
    backgroundColor: constants.colors.whiteColor,
    opacity: 0.88,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3C3C431A',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 7,
    justifyContent: 'center',
  },
  input: {
    justifyContent: 'center',
    color: constants.colors.blackColor,
  },
  icon: {
    width: RoundPixel(20),
    tintColor: constants.colors.grayColor,
  },
});
