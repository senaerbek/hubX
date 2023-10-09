import {Image, TextProps, View} from 'react-native';
import {AppText} from '../AppText';
import React from 'react';
import {styles} from './style';

export function TextWithUnderlineImage(props: TextProps) {
  return (
    <View style={styles.container}>
      <AppText {...props} />
      <Image source={require('./images/underline.png')} style={styles.image} />
    </View>
  );
}
