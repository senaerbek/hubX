import React from 'react';
import {memo} from 'react';
import {SafeAreaView, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {OnBoardingStackNavigator} from './onboarding-navigator';

const Stack = createStackNavigator();

export const AppNavigator = memo(function ApplicationNavigator() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={OnBoardingStackNavigator} />
      </Stack.Navigator>
    </View>
  );
});
