import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input, Spinner } from '../common';
import {
  FormValidationMessage,
  Card,
  Button,
  SocialIcon
} from 'react-native-elements';
import { emailChanged, nameChanged, loginUser } from '../../actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fbloading: false
    };
  }
  onNameChange(text) {
    this.props.nameChanged(text);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onButtonPress() {
    const { email, name } = this.props;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (name.length > 6 && reg.test(email)) {
      this.props.loginUser({ email, name });
    }
  }
  onFbPress() {
    this.setState({ fbloading: !this.state.fbloading });
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <View>
        <CardSection>
          <Button
            raised
            onPress={this.onButtonPress.bind(this)}
            buttonStyle={{
              backgroundColor: 'black',
              borderRadius: 10,
              padding: 10
            }}
            textStyle={{
              textAlign: 'center',
              fontSize: 17,
              fontFamily: 'Montserrat'
            }}
            title={'Sign In'}
            loading={this.props.loading}
          />
        </CardSection>
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
          />
        </CardSection>
      </View>
    );
  }
  renderusrerr() {
    if (this.props.name.length < 6 && this.props.name.length > 0)
      return <FormValidationMessage>Name is too short</FormValidationMessage>;
  }
  renderemailerr() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!reg.test(this.props.email) && this.props.email.length > 0)
      return <FormValidationMessage>email is not valid</FormValidationMessage>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Full Name"
            onChangeText={this.onNameChange.bind(this)}
            value={this.props.name}
          >
            said mansouri
          </Input>
        </CardSection>
        {this.renderusrerr()}
        <CardSection>
          <Input
            label="email"
            onChangeText={this.onEmailChange.bind(this)}
            placeholder="myemail@gmail.com"
            value={this.props.email}
          >
            saiidma@gmail.com
          </Input>
        </CardSection>
        {this.renderemailerr()}
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        {this.renderButton()}
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, name, error, loading } = auth;
  return { email, name, error, loading };
};
export default connect(mapStateToProps, {
  emailChanged,
  nameChanged,
  loginUser
})(LoginForm);
