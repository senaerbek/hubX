import React, {useEffect} from 'react';
import {FlatList, ImageBackground, View} from 'react-native';
import {styles} from './style';
import {AppText} from '../../componenets/AppText';
import {TextInputComponent} from '../../componenets/TextInputComponent';
import {useDispatch, useSelector} from 'react-redux';
import {getQuestions} from '../../api/services/question-service';
import {AppDispatch, RootState} from '../../store';
import {QuestionCardComponent} from './QuestionCardComponent';
import {getCategories} from '../../api/services/category-service';
import {CategoryCardComponent} from './CategoryCardComponent';
import {Question} from '../../models/Question';
import {CategoryData} from '../../models/Category';

export function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const questions = useSelector(
    (state: RootState) => state.questions.questions,
  );
  const categories = useSelector(
    (state: RootState) => state.categories.categories,
  );

  const renderQuestion = ({item}: {item: Question}) => {
    return (
      <View style={styles.questionListItemContainer}>
        <QuestionCardComponent question={item} />
      </View>
    );
  };

  const renderCategory = ({item}: {item: CategoryData}) => {
    return (
      <View style={styles.categoryListItemContainer}>
        <CategoryCardComponent category={item} />
      </View>
    );
  };

  useEffect(() => {
    dispatch(getQuestions());
    dispatch(getCategories());
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
      <View style={styles.contentBody}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={styles.categoryListWrapper}
          data={categories.data}
          renderItem={renderCategory}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.questionListContentContainer}
              data={questions}
              renderItem={renderQuestion}
              keyExtractor={item => item.id.toString()}
            />
          }
          ListHeaderComponentStyle={styles.categoryList}
        />
      </View>
    </>
  );
}
