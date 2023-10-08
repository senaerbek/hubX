import {StyleSheet} from 'react-native';
import {RoundPixel} from '../../../utils/dimension';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#24201A',
    height: RoundPixel(64),
    flexDirection: 'row',
    borderRadius: RoundPixel(12),
  },
  advertisementIconContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  advertisementIcon: {
    width: RoundPixel(36),
    height: RoundPixel(36),
  },
  titleContainer: {
    flex: 6,
    justifyContent: 'center',
  },
  title: {
    fontSize: RoundPixel(16),
    fontWeight: '600',
  },
  subtitle: {
    fontSize: RoundPixel(13),
    fontWeight: '400',
  },
  arrowContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: RoundPixel(24),
    height: RoundPixel(24),
  },
});
