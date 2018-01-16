import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Spinner } from '../../common';
import { Agenda } from 'react-native-calendars';
import { connect } from 'react-redux';
import { evsGet } from '../../../actions';
import { Row } from '../../common';

class EventAgenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  componentWillMount() {
    this.props.evsGet();
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  loadItems() {
    setTimeout(() => {
      const newItems = this.state.items;
      this.props.evs.forEach(function(ev) {
        const date = new Date(ev.eventDate);
        const strTime = date.toISOString().split('T')[0];
        if (!(strTime in newItems)) {
          newItems[strTime] = [];
          newItems[strTime].push(ev);
        } else if (!newItems[strTime].includes(ev)) {
          newItems[strTime].push(ev);
        }
      });

      //console.log(this.state.items);
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    const { navigate } = this.props.navigation;
    const { title, imgbase64 } = item;
    const user = 'admin';
    return (
      <Row
        img={imgbase64}
        name={title}
        author={user}
        onPress={() => navigate('EvDesc', item)}
      />
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  render() {
    if (this.props.isLoading) {
      return <Spinner />;
    }
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
        />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate('CreateEv')}
          >
            <Image
              resizeMode="contain"
              source={require('../../../../assets/img/add_red.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },
  container: {
    position: 'absolute',
    left: 0,
    right: 5,
    bottom: -40
  },
  button: {
    alignSelf: 'flex-end'
  },
  icon: {
    width: 50
  }
});

const mapStateToProps = state => {
  return { evs: state.evs.evs, isLoading: state.evs.isLoading };
};

const mapDispatchToProps = dispatch => {
  return {
    evsGet: () => dispatch(evsGet())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventAgenda);
