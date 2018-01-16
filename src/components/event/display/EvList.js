import React, { Component } from 'react';
import {
  ListView,
  TouchableOpacity,
  View,
  Image,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { evsGet } from '../../../actions';

import { Spinner } from '../../common';

class LibraryList extends Component {
  componentWillMount() {
    this.props.evsGet();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    //nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ evs }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(evs);
  }

  renderRow(ev) {
    return <ListItem ev={ev} navigation={this.props.navigation} />;
  }

  render() {
    if (this.props.isLoading) {
      return <Spinner />;
    }

    const { navigate } = this.props.navigation;
    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
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

export default connect(mapStateToProps, mapDispatchToProps)(LibraryList);
