import {Image, View} from 'react-native';
import {styles} from './style';
import {AppText} from '../../../componenets/AppText';
import React from 'react';

export function PayWallInfoComponent({info}: any) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={info.icon} style={styles.icon} />
      </View>
      <View>
        <AppText style={styles.title}>{info.title}</AppText>
        <AppText style={styles.description}>{info.description}</AppText>
      </View>
    </View>
  );
}
