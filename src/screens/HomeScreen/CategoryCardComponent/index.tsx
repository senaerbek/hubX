import React from 'react';
import {ImageBackground, View} from 'react-native';
import {CategoryData} from '../../../models/Category';
import {styles} from './style';
import {AppText} from '../../../componenets/AppText';

interface CategoryCardComponentProps {
  category: CategoryData;
}
export function CategoryCardComponent(props: CategoryCardComponentProps) {
  const {category} = props;

  return (
    <ImageBackground
      style={styles.container}
      imageStyle={styles.containerImageStyle}
      source={{uri: category.image.url}}>
      <View style={styles.titleContainer}>
        <AppText numberOfLines={2} style={styles.title}>
          {category.title}
        </AppText>
      </View>
    </ImageBackground>
  );
}
