import React, { Component } from 'react';
import { connect } from 'react-redux';
import { evUpdate, evCreate } from '../../../actions';
import { Card, CardSection, Button } from '../../common';
import EvForm from './EvForm';

class EvCreate extends Component {
  onButtonPress() {
    const { title, description, eventDate } = this.props;
    this.props.evCreate({ title, description, eventDate });
  }
  render() {
    return (
      <Card>
        <EvForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
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
