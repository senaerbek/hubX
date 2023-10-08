import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {memo} from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {DiagnoseScreen} from '../screens/DiagnoseScreen';
import {MyGardenScreen} from '../screens/MyGardenScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {BottomNavigatorComponent} from '../componenets/BottomNavigatorComponent';
import {SafeAreaView} from 'react-native';
import {constants} from '../utils/theme';

export type StackParamList = {
  Home: undefined;
  Diagnose: undefined;
  MyGarden: undefined;
  Profile: undefined;
  Scan: undefined;
};

const BottomTab = createBottomTabNavigator<StackParamList>();

const BottomNavigator = memo(function BottomNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props: BottomTabBarProps) => (
        <BottomNavigatorComponent {...props} />
      )}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <BottomTab.Screen
        name="Diagnose"
        component={DiagnoseScreen}
        options={{tabBarLabel: 'Diagnose'}}
      />
      <BottomTab.Screen
        name="Scan"
        component={ProfileScreen}
        options={{tabBarLabel: 'Profile'}}
      />
      <BottomTab.Screen
        name="MyGarden"
        component={MyGardenScreen}
        options={{tabBarLabel: 'My Garden'}}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarLabel: 'Profile'}}
      />
    </BottomTab.Navigator>
  );
});

export const MainNavigator = memo(function MainNavigator() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: constants.colors.whiteColor,
      }}>
      <BottomNavigator />
    </SafeAreaView>
  );
});
