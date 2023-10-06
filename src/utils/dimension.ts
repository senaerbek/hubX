import {Dimensions, PixelRatio} from 'react-native';

const dimensions = Dimensions.get('window');
const screenWidth = dimensions.width;
const screenHeight = dimensions.height;

const referenceScreenWidth = 375;
const referenceScreenHeight = 812;
const scaleX = screenWidth / referenceScreenWidth;
const scaleY = screenHeight / referenceScreenHeight;

export function RoundPixel(dp: number) {
  const scaledValue = dp * Math.min(scaleX, scaleY);
  return PixelRatio.roundToNearestPixel(scaledValue);
}
