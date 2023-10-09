import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './style';

interface TabViewProps {
  images: React.ReactNode[];
  title: React.ReactNode;
}
export function TabView(props: TabViewProps) {
  const {images, title} = props;

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.titleContainer}>{title}</View>
        <View>
          <>
            {images.map((image, index) => (
              <View key={index} style={styles.imageContainer}>
                {image}
              </View>
            ))}
          </>
        </View>
      </SafeAreaView>
    </View>
  );
}
