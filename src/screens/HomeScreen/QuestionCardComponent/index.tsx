import React, {useCallback} from 'react';
import {ImageBackground, Linking, TouchableOpacity, View} from 'react-native';
import {Question} from '../../../models/Question';
import {styles} from './style';
import {AppText} from '../../../componenets/AppText';

interface QuestionCardComponentProps {
  question: Question;
}

export function QuestionCardComponent(props: QuestionCardComponentProps) {
  const {question} = props;

  const onQuestionPress = useCallback(() => {
    Linking.openURL(question.uri);
  }, [question.uri]);

  return (
    <TouchableOpacity onPress={onQuestionPress}>
      <ImageBackground
        source={{uri: question.image_uri}}
        style={styles.container}
        imageStyle={styles.containerImageStyle}>
        <View style={styles.titleContainer}>
          <AppText style={styles.title}>{question.title}</AppText>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
