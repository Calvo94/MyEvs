import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardSection } from '../common';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { SocialIcon } from 'react-native-elements';
import { loginUser } from '../../actions';
import { GoogleSignin } from 'react-native-google-signin';
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

class LoginForm extends Component {

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

  onFbPress() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(token => {
            this.props.loginUser({
              token: token.accessToken,
              provider: 'facebook'
            });
          });
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
    );
  }
  onGooglePress() {
    GoogleSignin.configure({}).then(() => {
      GoogleSignin.signIn()
        .then(token => {
          // alert(JSON.stringify(token));
          this.props.loginUser({
            token: token.accessToken,
            provider: 'google'
          });
        })
        .catch(err => {
          alert(err);
        })
        .done();
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1}}>
        <View style={{flex:3}}>
          <AppIntroSlider
            slides={slides}
            renderItem={this._renderItem}
            onDone={() => navigate('SignIn')}
            onSkip={() => navigate('SignIn')}
          />
        </View>
        <View style={{flex:1}}>
          <CardSection>
            <SocialIcon
              title="Sign In With Facebook"
              button
              onPress={this.onFbPress.bind(this)}
              type="facebook"
              fontFamily="Montserrat"
              style={{ padding: 10 }}
              loading={this.props.loading}
            />
          </CardSection>
          <CardSection>
            <SocialIcon
              title="Sign In With Google"
              button
              type="google-plus-official"
              fontFamily="Montserrat"
              style={{ padding: 10 }}
              loading={this.props.loading}
              onPress={this.onGooglePress.bind(this)}
            />
          </CardSection>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { loading } = auth;
  return { loading };
};
export default connect(mapStateToProps, {loginUser})(LoginForm);
