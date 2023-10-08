import React, {useEffect} from 'react';
import {FlatList, ImageBackground, Text, View} from 'react-native';
import {styles} from './style';
import {AppText} from '../../componenets/AppText';
import {TextInputComponent} from '../../componenets/TextInputComponent';
import {useDispatch, useSelector} from 'react-redux';
import {getQuestions} from '../../api/services/question-service';
import {AppDispatch, RootState} from '../../store';

export function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const questions = useSelector(
    (state: RootState) => state.questions.questions,
  );

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

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
      <FlatList data={questions} renderItem={() => <Text>item</Text>} />
      <Text>HomeScreen</Text>
    </>
  );
}
