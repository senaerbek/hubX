import {Dimensions, StyleSheet} from 'react-native';
import {RoundPixel} from '../../../utils/dimension';

const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    width: width,
  },
  titleContainer: {
    margin: RoundPixel(24),
  },
  imageContainer: {
    position: 'absolute',
  },
});
