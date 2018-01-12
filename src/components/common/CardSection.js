import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={[styles.containerStyle, props.style]}>{props.children}</View>
  );

const styles = {
  containerStyle: {
    padding: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'rgba(255, 255, 255, 0.8)',
    position: 'relative'
  }
};

export { CardSection };
