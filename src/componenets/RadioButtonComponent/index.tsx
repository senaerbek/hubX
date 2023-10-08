import {View} from 'react-native';
import {styles} from './style';
import React from 'react';

export function RadioButton(props: any) {
  const {isSelected} = props;

  return (
    <View
      style={[
        styles.radioButton,
        isSelected ? styles.selectedRadioButton : undefined,
      ]}>
      {isSelected && <View style={styles.radioButtonInner} />}
    </View>
  );
}
