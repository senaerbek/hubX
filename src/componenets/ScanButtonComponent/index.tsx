import {Image, ImageSourcePropType, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import React from 'react';

interface ScanButtonProps {
  icon: ImageSourcePropType;
  onPress: () => void;
}
export function ScanButton(props: ScanButtonProps) {
  const {icon, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.scanButtonOuter}>
      <View style={styles.scanButton}>
        <Image source={icon} style={[styles.scanIcon]} />
      </View>
    </TouchableOpacity>
  );
}
