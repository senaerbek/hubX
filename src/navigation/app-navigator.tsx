import React from 'react';
import {memo} from 'react';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainNavigator} from './main-navigator';

const Stack = createStackNavigator();

export const AppNavigator = memo(function ApplicationNavigator() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </SafeAreaView>
  );
});