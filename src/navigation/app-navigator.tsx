import React from 'react';
import {memo} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainNavigator} from './main-navigator';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {OnBoardingStackNavigator} from './onboarding-navigator';
import {styles} from './style';

const Stack = createStackNavigator();

export const AppNavigator = memo(function ApplicationNavigator() {
  const navigate = useSelector(
    (state: RootState) => state.navigate.switchNavigationRoute,
  );

  return (
    <View style={styles.screenContainer}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {navigate === 'OnBoard' ? (
          <Stack.Screen name="OnBoard" component={OnBoardingStackNavigator} />
        ) : (
          <Stack.Screen name="Main" component={MainNavigator} />
        )}
      </Stack.Navigator>
    </View>
  );
});
