import {View} from 'react-native';
import {styles} from './style';
import React from 'react';

interface RadioButtonProps {
  isSelected: boolean;
}

export function RadioButton(props: RadioButtonProps) {
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
