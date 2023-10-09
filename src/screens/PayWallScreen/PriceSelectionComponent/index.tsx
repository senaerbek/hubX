import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {AppText} from '../../../componenets/AppText';
import {RadioButton} from '../../../componenets/RadioButtonComponent';
import {Price} from '../../../models/Price';

interface PriceSelectionComponentProps {
  price: Price;
  isSelected: boolean;
}

export function PriceSelectionComponent(props: PriceSelectionComponentProps) {
  const {price, isSelected} = props;

  return (
    <View
      style={[
        styles.container,
        isSelected ? styles.selectedContainer : undefined,
      ]}>
      {isSelected ? (
        <View style={styles.labelContainer}>
          <AppText style={styles.label}>Save 50%</AppText>
        </View>
      ) : null}
      <View style={styles.radioButtonContainer}>
        <RadioButton isSelected={isSelected} />
      </View>
      <View style={styles.titleContainer}>
        <AppText style={styles.price}>{price.price}</AppText>
        <AppText numberOfLines={1} style={styles.duration}>
          {price.duration}
        </AppText>
      </View>
    </View>
  );
}
