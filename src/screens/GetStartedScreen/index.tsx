import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from './style';
import {ButtonComponent} from '../../componenets/ButtonComponent';
import {AppText} from '../../componenets/AppText';

export function GetStartedScreen() {
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={require('./images/get-started-background.png')}>
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>
          Welcome to <AppText style={styles.titleInner}>PlantApp</AppText>
        </AppText>
        <AppText style={styles.description}>
          Identify more than 3000+ plants and 88% accuracy.
        </AppText>
      </View>
      <View style={styles.startImageContainer}>
        <Image
          style={styles.startedImage}
          source={require('./images/started-image.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent text="Get Started" onPress={() => {}} />
      </View>
      <Text style={styles.bottomText}>
        By tapping next, you are agreeing to PlantID{' '}
        <Text style={styles.bottomTextInner}>Terms of Use</Text> &{' '}
        <Text style={styles.bottomTextInner}>Privacy Policy.</Text>
      </Text>
    </ImageBackground>
  );
}
