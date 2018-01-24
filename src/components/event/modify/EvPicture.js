import React, { Component } from 'react';
import { Image } from 'react-native';
import PhotoUpload from 'react-native-photo-upload';
import { CardSection, Button } from '../../common';
import { evUpdate, evCreate } from '../../../actions';
import { connect } from 'react-redux';

class EvPicture extends Component {
  onValidatePress() {
    const { title, description, eventDate, imgbase64 } = this.props;
    this.props.evCreate({ title, description, eventDate, imgbase64 });
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
        onPhotoSelect={value => {
          if (value) {
            this.props.evUpdate({ prop: 'imgbase64', value });
          }
        }}
      >
        {this.img()}
        <CardSection>
          <Button onPress={this.onValidatePress.bind(this)}>
            Create Event
          </Button>
        </CardSection>
      </PhotoUpload>
    );
  }
}
const mapStateToProps = state => {
  const { title, description, eventDate, imgbase64 } = state.evForm;

  return { title, description, eventDate, imgbase64 };
};
export default connect(mapStateToProps, { evUpdate, evCreate })(EvPicture);
