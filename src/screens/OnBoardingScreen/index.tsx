import React, {useCallback, useRef, useState} from 'react';
import {FlatList, Image, ImageBackground, View} from 'react-native';
import {ButtonComponent} from '../../componenets/ButtonComponent';
import {TabView} from './TabView';
import {AppText} from '../../componenets/AppText';
import {styles} from './style';
import {TextWithUnderlineImage} from '../../componenets/TextWithUnderlineImage';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {OnBoardingStackList} from '../../navigation/onboarding-navigator';

const tabList = [
  {
    id: 1,
    backgroundImage: require('./images/background.png'),
    title: (
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>take a photo to </AppText>
        <TextWithUnderlineImage style={styles.boldTitle}>
          identify
        </TextWithUnderlineImage>
        <AppText style={styles.title}>the plant!</AppText>
      </View>
    ),
    images: [
      <Image style={styles.image} source={require('./images/phone.png')} />,
    ],
  },
  {
    id: 2,
    backgroundImage: require('./images/background.png'),
    title: (
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>Get plant </AppText>
        <TextWithUnderlineImage style={styles.boldTitle}>
          care guides
        </TextWithUnderlineImage>
      </View>
    ),
    images: [
      <Image style={styles.image} source={require('./images/leaf.png')} />,
      <Image style={styles.image} source={require('./images/iphone.png')} />,
    ],
  },
  {
    id: 3,
    backgroundImage: require('./images/background.png'),
    title: (
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>Get plant </AppText>
        <TextWithUnderlineImage style={styles.boldTitle}>
          care guides
        </TextWithUnderlineImage>
      </View>
    ),
    images: [
      <Image style={styles.image} source={require('./images/leaf.png')} />,
      <Image style={styles.image} source={require('./images/iphone.png')} />,
    ],
  },
];
export function OnBoardingScreen() {
  const scrollRef = useRef<FlatList>(null);
  const navigation = useNavigation<StackNavigationProp<OnBoardingStackList>>();
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback(() => {
    setActiveIndex(prevState => prevState + 1);
    scrollRef.current?.scrollToIndex({index: activeIndex + 1});
  }, [activeIndex]);

  const navigateToPayWallScreen = useCallback(() => {
    navigation.navigate('PayWall');
  }, [navigation]);

  const onContinuePress = useCallback(() => {
    if (activeIndex === tabList.length - 1) {
      navigateToPayWallScreen();
    } else {
      scrollToIndex();
    }
  }, [activeIndex, navigateToPayWallScreen, scrollToIndex]);

  const renderTabView = ({item}: {item: (typeof tabList)[0]}) => (
    <TabView images={item.images} title={item.title} />
  );

  const renderSlideView = ({index}: {index: number}) => (
    <View style={styles.slideIconContainer}>
      <View
        style={[
          styles.slideIcon,
          index === activeIndex ? styles.activeSlideIcon : undefined,
        ]}
      />
    </View>
  );

  return (
    <ImageBackground
      style={styles.container}
      source={tabList[activeIndex].backgroundImage}>
      <FlatList
        ref={scrollRef}
        horizontal={true}
        pagingEnabled={true}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        data={tabList}
        scrollEventThrottle={16}
        renderItem={renderTabView}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.buttonContainer}>
        <ButtonComponent text={'Continue'} onPress={onContinuePress} />
        <FlatList
          scrollEnabled={false}
          horizontal={true}
          data={tabList}
          renderItem={renderSlideView}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ImageBackground>
  );
}
