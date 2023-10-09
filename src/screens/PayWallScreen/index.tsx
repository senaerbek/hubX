import React, {useCallback} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import {AppText} from '../../componenets/AppText';
import {PayWallInfoComponent} from './InfoComponent';
import {PriceSelectionComponent} from './PriceSelectionComponent';
import {ButtonComponent} from '../../componenets/ButtonComponent';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {changeStackNavigation} from '../../store/navigate/navigateSlice';
import {Price} from '../../models/Price';
import {PremiumInfo} from '../../models/PremiumInfo';

const premiumInfoList: PremiumInfo[] = [
  {
    icon: require('./images/scanner.png'),
    title: 'Unlimited',
    description: 'Plant Identify',
  },
  {
    icon: require('./images/speedometer.png'),
    title: 'Faster',
    description: 'Process',
  },
  {
    icon: require('./images/scanner.png'),
    title: 'Unlimited',
    description: 'Plant Identify',
  },
];

const priceList: Price[] = [
  {
    id: 1,
    price: '$9.99',
    duration: '$2.99/month, auto renewable',
  },
  {
    id: 2,
    price: '$19.99',
    duration: 'First 3 days free, then $529,99/year',
  },
];

export function PayWallScreen() {
  const dispatch = useDispatch();
  const [selectedPrice, setSelectedPrice] = React.useState(priceList[0]);

  const navigateToHome = useCallback(() => {
    AsyncStorage.setItem('isOnBoardingDone', 'true').then(() => {
      dispatch(changeStackNavigation({switchNavigationRoute: 'Main'}));
    });
  }, [dispatch]);

  const selectPrice = useCallback((price: Price) => {
    setSelectedPrice(price);
  }, []);

  const renderPayWallInfoComponent = ({item}: {item: PremiumInfo}) => {
    return (
      <View style={styles.infoListContainer}>
        <PayWallInfoComponent info={item} />
      </View>
    );
  };

  const renderPriceSelectionComponent = ({item}: {item: Price}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          selectPrice(item);
        }}
        style={styles.priceListContainer}>
        <PriceSelectionComponent
          price={item}
          isSelected={selectedPrice.id === item.id}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={require('./images/background.png')}
      style={styles.imageBackground}>
      <TouchableOpacity
        onPress={navigateToHome}
        style={styles.closeIconContainer}>
        <Image
          style={styles.closeIcon}
          source={require('./images/close-icon.png')}
        />
      </TouchableOpacity>
      <View style={styles.body}>
        <AppText style={styles.title}>
          <AppText style={styles.titleInner}>PlantApp</AppText> Premium
        </AppText>
        <AppText style={styles.description}>Access All Features</AppText>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={premiumInfoList}
          renderItem={renderPayWallInfoComponent}
          keyExtractor={(item, index) => index.toString()}
        />
        <FlatList
          scrollEnabled={false}
          data={priceList}
          renderItem={renderPriceSelectionComponent}
          keyExtractor={(item, index) => index.toString()}
        />
        <ButtonComponent text={'Try free For 3 days'} onPress={() => {}} />
        <AppText style={styles.bottomText}>
          After the 3-day free trial period you’ll be charged ₺274.99 per year
          unless you cancel before the trial expires. Yearly Subscription is
          Auto-Renewable
        </AppText>
        <AppText style={styles.bottomInfoText}>
          Terms • Privacy • Restore
        </AppText>
      </View>
    </ImageBackground>
  );
}
