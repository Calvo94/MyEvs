import React, { Component } from 'react';
import { Image } from 'react-native';
import PhotoUpload from 'react-native-photo-upload';
import { CardSection, Button } from '../../common';
import { evPicture } from '../../../actions';
import { connect } from 'react-redux';

class EvPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      uploaded: false
    };
  }
  onValidatePress() {
    if (this.state.uploaded)
      this.props.evPicture({
        imgbase64: this.state.avatar,
        _id: this.props._id
      });
  }
  onSkipPress() {
    this.props.navigation.navigate('HomeApp');
  }
  img() {
    if (this.props.imgbase64) {
      return (
        <Image
          style={{
            paddingVertical: 30,
            width: 150,
            height: 150,
            borderRadius: 75
          }}
          resizeMode="cover"
          source={{ uri: `data:image/jpg;base64,${this.props.imgbase64}` }}
        />
      );
    } else {
      return (
        <Image
          style={{
            paddingVertical: 30,
            width: 150,
            height: 150,
            borderRadius: 75
          }}
          resizeMode="cover"
          source={{
            uri:
              'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
          }}
        />
      );
    }
  }

  render() {
    return (
      <PhotoUpload
        onPhotoSelect={avatar => {
          if (avatar) {
            this.setState({ avatar, uploaded: true });
          }
        }}
      >
        {this.img()}
        <CardSection>
          <Button onPress={this.onValidatePress.bind(this)}>Upload</Button>
          <Button onPress={this.onSkipPress.bind(this)}>Skip</Button>
        </CardSection>
      </PhotoUpload>
    );
  }
}
export default connect(null, { evPicture })(EvPicture);
