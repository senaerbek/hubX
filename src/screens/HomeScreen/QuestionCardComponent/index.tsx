import React from 'react';
import {ImageBackground, View} from 'react-native';
import {Question} from '../../../models/Question';
import {styles} from './style';
import {AppText} from '../../../componenets/AppText';

interface QuestionCardComponentProps {
  question: Question;
}

export function QuestionCardComponent(props: QuestionCardComponentProps) {
  const {question} = props;

  return (
    <ImageBackground
      source={{uri: question.image_uri}}
      style={styles.container}
      imageStyle={styles.containerImageStyle}>
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>{question.title}</AppText>
      </View>
    </ImageBackground>
  );
}
