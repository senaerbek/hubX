import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

interface ButtonComponentProps {
  text: string;
  onPress: () => void;
}
export function ButtonComponent(props: ButtonComponentProps) {
  const {text, onPress} = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
