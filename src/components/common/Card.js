import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Card = (props) => (
    <LinearGradient colors={['#772953', '#e95420']} locations={[0.1,0.9]}>
      <View style={[styles.containerStyle,props.style]}>{props.children}</View>
    </LinearGradient>
  );

const styles = {
  containerStyle: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#ffff',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
  }
};

export { Card };
