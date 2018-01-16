import React, { Component } from 'react';
import { connect } from 'react-redux';
import { evUpdate, evCreate } from '../../../actions';
import { Card, CardSection, Button } from '../../common';
import EvForm from './EvForm';

class EvCreate extends Component {
  onNextPress() {
    this.props.navigation.navigate('EvPicture');
  }
  onCancelPress() {
    this.props.navigation.navigate('DisplayEv');
  }

  render() {
    return (
      <Card>
        <EvForm {...this.props} />
        <CardSection>
          <Button onPress={this.onNextPress.bind(this)}>Next</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onCancelPress.bind(this)}>Cancel</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { title, description, eventDate } = state.evForm;

  return { title, description, eventDate };
};

export default connect(mapStateToProps, { evUpdate, evCreate })(EvCreate);
