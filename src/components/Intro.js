import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';

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

const slides = [
  {
    key: 'somethun',
    title: 'My Evs !!!',
    text: 'Welcome to MyEvs! An App where you can find all your events',
    icon: 'ios-images-outline',
    colors: ['#63E2FF', '#B066FE']
  },
  {
    key: 'somethun1',
    title: 'Super customizable',
    text:
      'The component is also super customizable, so you can adapt it to cover your needs and wants.',
    icon: 'ios-options-outline',
    colors: ['#A3A1FF', '#3A3897']
  },
  {
    key: 'somethun2',
    title: 'No need to buy me beer',
    text: 'Usage is all free',
    icon: 'ios-beer-outline',
    colors: ['#29ABE2', '#4F00BC']
  }
];

export default class Intro extends Component {
  _renderItem(props) {
    return (
      <LinearGradient
        style={[
          styles.mainContent,
          {
            paddingTop: props.topSpacer,
            paddingBottom: props.bottomSpacer
          }
        ]}
        colors={props.colors}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0.1, y: 1 }}
      >
        <View>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </LinearGradient>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        onDone={() => navigate('SignIn')}
        onSkip={() => navigate('SignIn')}
        bottomButton
        showSkipButton
      />
    );
  }
}
