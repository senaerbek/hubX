import React, {useCallback, useEffect} from 'react';
import {
  FlatList,
  ImageBackground,
  Linking,
  TouchableOpacity,
  View,
} from 'react-native';
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
import {AdvertisementButton} from './AdvertisementButton';

export function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const questions = useSelector((state: RootState) => state.questions);
  const categories = useSelector((state: RootState) => state.categories);

  const onQuestionPress = useCallback(async (uri: string) => {
    await Linking.openURL(uri);
  }, []);

  const renderQuestion = ({item}: {item: Question}) => {
    return (
      <TouchableOpacity
        onPress={() => onQuestionPress(item.uri)}
        style={styles.questionListItemContainer}>
        <QuestionCardComponent question={item} />
      </TouchableOpacity>
    );
  };

  const renderCategory = ({item}: {item: CategoryData}) => {
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={styles.categoryListItemContainer}>
        <CategoryCardComponent category={item} />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    dispatch(getQuestions());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <View style={styles.container}>
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
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.categoryListWrapper}
        data={categories.categories.data}
        renderItem={renderCategory}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={
          <>
            <View style={styles.advertisementContainer}>
              <AdvertisementButton />
            </View>
            <AppText style={styles.startedTitle}>Get Started</AppText>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.questionListContentContainer}
              data={questions.questions}
              renderItem={renderQuestion}
              keyExtractor={item => item.id.toString()}
            />
          </>
        }
        ListHeaderComponentStyle={styles.categoryListHeader}
      />
    </View>
  );
}
