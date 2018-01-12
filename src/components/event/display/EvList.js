import React, { Component } from 'react';
import { ListView } from 'react-native';
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
    return <ListItem ev={ev} />;
  }

  render() {
    if(this.props.isLoading)
    {
        return (<Spinner />)
    }
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {

  return { evs: state.evs.evs,isLoading: state.evs.isLoading };
};

const mapDispatchToProps = dispatch => {
	return {
		evsGet: () => dispatch(evsGet())
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(LibraryList);
