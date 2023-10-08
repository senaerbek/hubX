import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigator} from './navigation/app-navigator';
import 'react-native-gesture-handler';
import {Provider, useDispatch} from 'react-redux';
import {store} from './store';
import {changeStackNavigation} from './store/navigate/navigateSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AppComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem('isOnBoardingDone').then(route => {
      if (route) {
        dispatch(changeStackNavigation({switchNavigationRoute: 'Main'}));
      } else {
        dispatch(changeStackNavigation({switchNavigationRoute: 'OnBoard'}));
      }
    });
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export function App() {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
}
