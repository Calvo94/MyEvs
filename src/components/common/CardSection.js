import React from 'react';
import { View } from 'react-native';

const CardSection = props => (
  <View style={[styles.containerStyle, props.style]}>{props.children}</View>
);

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'rgba(255, 255, 255, 0.8)'
  }
};

export { CardSection };
