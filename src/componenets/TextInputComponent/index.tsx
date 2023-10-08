import React from 'react';
import {Image, TextInput, View} from 'react-native';
import {styles} from './style';

interface TextInputComponentProps {
  setTextInput: (text: string) => void;
}

export function TextInputComponent(props: TextInputComponentProps) {
  const {setTextInput} = props;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require('./images/search-icon.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setTextInput}
          style={styles.input}
          placeholder="Search for plants"
          placeholderTextColor="#AFAFAF"
        />
      </View>
    </View>
  );
}
