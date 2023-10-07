import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GetStartedScreen} from '../screens/GetStartedScreen';

export type OnBoardingStackList = {
  GetStarted: undefined;
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
      </OnBoardingStack.Navigator>
    );
  },
);
