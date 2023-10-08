import React from 'react';
import {TextInputProps} from 'react-native';
import {AppText} from '../AppText';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import {styles} from './style';

interface GradientTextProps extends TextInputProps {
  colors: string[];
}

export function GradientTextComponent(props: GradientTextProps) {
  return (
    // @ts-ignore
    <MaskedView maskElement={<AppText {...props} style={props.style} />}>
      <LinearGradient
        colors={props.colors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <AppText {...props} style={[props.style, styles.text]} />
      </LinearGradient>
    </MaskedView>
  );
}
