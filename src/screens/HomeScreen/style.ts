import {StyleSheet} from 'react-native';
import {RoundPixel} from '../../utils/dimension';
import {constants} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colors.backgroundColor,
  },
  headerContainer: {
    width: '100%',
    height: RoundPixel(140),
  },
  headerBody: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: RoundPixel(3),
    paddingBottom: RoundPixel(14),
    paddingHorizontal: RoundPixel(24),
  },
  headerTitle: {
    fontWeight: '400',
    fontSize: RoundPixel(16),
    color: constants.colors.mainTextColor,
  },
  headerSubTitle: {
    fontSize: RoundPixel(24),
    fontWeight: '500',
    marginTop: RoundPixel(6),
    color: constants.colors.mainTextColor,
  },
  categoryListWrapper: {
    justifyContent: 'space-between',
    marginHorizontal: RoundPixel(14),
  },
  questionListItemContainer: {
    marginRight: RoundPixel(10),
  },
  categoryListItemContainer: {
    flex: 0.5,
    marginHorizontal: RoundPixel(10),
    marginBottom: RoundPixel(16),
  },
  categoryListHeader: {
    marginBottom: RoundPixel(24),
  },
  questionListContentContainer: {
    marginHorizontal: RoundPixel(24),
  },
  advertisementContainer: {
    margin: RoundPixel(24),
  },
  startedTitle: {
    marginHorizontal: RoundPixel(24),
    marginBottom: RoundPixel(16),
    fontSize: RoundPixel(15),
    fontWeight: '500',
    color: constants.colors.mainTextColor,
  },
});
