import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Confirm } from '../../common';
import { evUpdate, evSave, evDelete,evValidate } from '../../../actions';
import EvForm from './EvForm';
import { Actions } from 'react-native-router-flux';

class EvEdit extends Component {
  state = { showModal: false };
  componentWillMount() {
    _.each(this.props.ev, (value, prop) => {
      this.props.evUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { title, description, eventDate } = this.props;

    this.props.evSave({ title, description, eventDate, _id:this.props.ev._id });
  }

  onValidatePress() {
    this.props.evValidate({ _id:this.props.ev._id });
  }

  onAccept() {

    this.props.evDelete({ _id:this.props.ev._id });
    this.setState({ showModal: false });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  validate(ver){
    if(!ver){
      return (
        <CardSection>
          <Button onPress={this.onValidatePress.bind(this)}>
            Validate Ev
          </Button>
        </CardSection>
      )
    }
  }

  render() {
    return (
      <Card>
        <EvForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        {this.validate(this.props.ev.verified)}

        <CardSection>
          <Button onPress={() => Actions.evPicture({ imgbase64: this.props.ev.imgbase64 , _id: this.props.ev._id})}>
            Update picture Ev
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.setState.showModal })}>
            Delete Ev
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { title, description, eventDate } = state.evForm;

  return { title, description, eventDate };
};

export default connect(mapStateToProps,
  { evUpdate, evSave,evValidate, evDelete }
)(EvEdit);
