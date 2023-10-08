import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {GradientTextComponent} from '../../../componenets/GradientTextComponent';

const gradientColors = ['#E5C990', '#E4B046'];
export function AdvertisementButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.advertisementIconContainer}>
        <Image
          source={require('./images/advertisement-icon.png')}
          style={styles.advertisementIcon}
        />
      </View>
      <View style={styles.titleContainer}>
        <GradientTextComponent colors={gradientColors} style={styles.title}>
          FREE Premium Available
        </GradientTextComponent>
        <GradientTextComponent colors={gradientColors} style={styles.subtitle}>
          Tap to upgrade your account!
        </GradientTextComponent>
      </View>
      <View style={styles.arrowContainer}>
        <Image
          source={require('./images/arrow-icon.png')}
          style={styles.arrowIcon}
        />
      </View>
    </TouchableOpacity>
  );
}
