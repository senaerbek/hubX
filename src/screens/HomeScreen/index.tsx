import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './style';
import {AppText} from '../../componenets/AppText';
import {TextInputComponent} from '../../componenets/TextInputComponent';

export function HomeScreen() {
  return (
    <>
      <ImageBackground
        source={require('./images/header.png')}
        style={styles.headerContainer}>
        <View style={styles.headerBody}>
          <View>
            <AppText style={styles.headerTitle}>Hi, plant lover!</AppText>
            <AppText style={styles.headerSubTitle}>Good Afternoon! ⛅</AppText>
          </View>
          <TextInputComponent setTextInput={() => {}} />
        </View>
      </ImageBackground>
      <Text>HomeScreen</Text>
    </>
  );
}
