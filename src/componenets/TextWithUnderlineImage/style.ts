import {StyleSheet} from 'react-native';
import {RoundPixel} from '../../utils/dimension';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexGrow: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: RoundPixel(12),
    width: '100%',
    resizeMode: 'stretch',
  },
});
