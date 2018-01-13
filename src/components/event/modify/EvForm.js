import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { evUpdate } from '../../../actions';
import { CardSection, Input, Button } from '../../common';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

class EvForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false
    };
  }

  _showDateTimePicker() {
    this.setState({ isDateTimePickerVisible: true });
  }

  _hideDateTimePicker() {
    this.setState({ isDateTimePickerVisible: false });
  }

  _handleDatePicked(value) {
    this.props.evUpdate({
      prop: 'eventDate',
      value: moment(value).format('YYYY/MM/DD HH:mm:ss')
    });
    this._hideDateTimePicker();
  }
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Title"
            placeholder="event"
            value={this.props.title}
            onChangeText={value =>
              this.props.evUpdate({ prop: 'title', value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Description"
            placeholder="this is a discription"
            value={this.props.description}
            onChangeText={value =>
              this.props.evUpdate({ prop: 'description', value })
            }
          />
        </CardSection>
        <CardSection>
          <Button onPress={this._showDateTimePicker.bind(this)}>
            Chose date
          </Button>
        </CardSection>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode="datetime"
        />
        <CardSection>
          <Text>{this.props.eventDate}</Text>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { title, description, eventDate } = state.evForm;

  return { title, description, eventDate };
};

export default connect(mapStateToProps, { evUpdate })(EvForm);
