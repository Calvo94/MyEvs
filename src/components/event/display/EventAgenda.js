import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager,
  Image
 } from 'react-native';
import { CardSection,Button,Card,Spinner } from '../../common';
import { Actions } from 'react-native-router-flux';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { connect } from 'react-redux';
import { evsGet } from '../../../actions';

class EventAgenda extends Component {
  componentWillMount() {
    this.props.evsGet();
  }



  render()
  {
    if(this.props.isLoading)
    {
        return (<Spinner />)
    }
    var rv ={};
    this.props.evs.forEach(function(ev){ rv[ev.eventDate.substring(0,10)] = { color: 'red'}});
    console.log(rv);
    return (
      <CalendarList
      scrollEnabled={true}
    // Collection of dates that have to be marked. Default = {}
    markedDates={rv}
    markingType={'period'}
    onDayPress={(day) => {console.log('selected day', day)}}
    />
    )
  }

}
const mapStateToProps = state => {

  return { evs: state.evs.evs, isLoading: state.evs.isLoading };
};

const mapDispatchToProps = dispatch => {
	return {
		evsGet: () => dispatch(evsGet())
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(EventAgenda);
