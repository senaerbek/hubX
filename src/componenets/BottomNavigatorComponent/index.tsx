import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ScanButton} from '../ScanButtonComponent';
import {styles} from './style';

const BottomTabs = {
  Home: {
    icon: require('./images/home-icon.png'),
  },
  Diagnose: {
    icon: require('./images/diagnose-icon.png'),
  },
  Scan: {
    icon: require('./images/scan-icon.png'),
  },
  MyGarden: {
    icon: require('./images/my-garden-icon.png'),
  },
  Profile: {
    icon: require('./images/profile-icon.png'),
  },
};

interface BottomNavigatorComponentProps {
  state: TabNavigationState<ParamListBase>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}
export function BottomNavigatorComponent(props: BottomNavigatorComponentProps) {
  const {state, navigation} = props;
  const {routes} = state;

  return (
    <View style={styles.container}>
      {routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            onPress={onPress}
            style={styles.tab}
            key={route.key}>
            {route.name === 'Scan' ? (
              <ScanButton
                icon={BottomTabs[route.name]?.icon}
                onPress={onPress}
              />
            ) : (
              <>
                <Image
                  source={BottomTabs[route.name]?.icon}
                  style={[
                    styles.icon,
                    isFocused ? styles.tabIconFocused : styles.tabIconUnfocused,
                  ]}
                  resizeMode="contain"
                />
                <Text
                  style={[
                    styles.label,
                    isFocused ? styles.labelFocused : styles.labelUnfocused,
                  ]}>
                  {route.name}
                </Text>
              </>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
