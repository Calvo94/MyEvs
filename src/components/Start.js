import React, { Component } from 'react';
import { View, Text, AsyncStorage, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Intro extends Component {
  componentWillMount() {
    setTimeout(() => {
      const { navigate } = this.props.navigation;
      new Promise((resolve, reject) => {
        AsyncStorage.getItem('data')
          .then(res => {
            if (res.length > 0) {
              resolve(res);
            } else {
              reject();
            }
          })
          .catch(() => reject());
      }).then(
        function(user) {
          navigate('HomeApp', { user });
        },
        function() {
          navigate('Begin');
        }
      );
    }, 1000);
  }

  render() {
    return (
      <LinearGradient
        style={styles.mainContent}
        colors={['#A3A1FF', '#3A3897']}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0.1, y: 1 }}
      >
        <View>
          <Text style={styles.title}>MyEvs!</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image: {
    width: 320,
    height: 320
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium'
  },
  title: {
    fontSize: 25,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Montserrat-Medium'
  }
});
