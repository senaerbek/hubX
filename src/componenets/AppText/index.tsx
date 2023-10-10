import React, {useMemo} from 'react';
import {Text, TextProps} from 'react-native';

const fontList = [
  {propWeight: '300', family: 'Rubik-Light'},
  {propWeight: '400', family: 'Rubik-Regular'},
  {propWeight: '500', family: 'Rubik-Medium'},
  {propWeight: '600', family: 'Rubik-SemiBold'},
  {propWeight: '700', family: 'Rubik-Bold'},
  {propWeight: '800', family: 'Rubik-ExtraBold'},
  {propWeight: '900', family: 'Rubik-Black'},
];

export function AppText(props: TextProps) {
  const fontFamily = useMemo(() => {
    return fontList.find(item => item.propWeight === props.style?.fontWeight)
      ?.family;
  }, [props.style]);

  return <Text {...props} style={[{fontFamily}, props.style]} />;
}
