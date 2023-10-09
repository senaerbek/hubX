import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GetStartedScreen} from '../screens/GetStartedScreen';
import {PayWallScreen} from '../screens/PayWallScreen';
import {OnBoardingScreen} from '../screens/OnBoardingScreen';

export type OnBoardingStackList = {
  GetStarted: undefined;
  PayWall: undefined;
  OnBoarding: undefined;
};

const OnBoardingStack = createStackNavigator<OnBoardingStackList>();
export const OnBoardingStackNavigator = memo(
  function OnBoardingStackNavigator() {
    return (
      <OnBoardingStack.Navigator screenOptions={{headerShown: false}}>
        <OnBoardingStack.Screen
          name="GetStarted"
          component={GetStartedScreen}
        />
        <OnBoardingStack.Screen
          name="OnBoarding"
          component={OnBoardingScreen}
        />
        <OnBoardingStack.Screen name="PayWall" component={PayWallScreen} />
      </OnBoardingStack.Navigator>
    );
  },
);
