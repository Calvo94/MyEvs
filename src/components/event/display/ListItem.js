import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager,
  Image
 } from 'react-native';
import { connect } from 'react-redux';
import { CardSection,Button,Card } from '../../common';
import * as actions from '../../../actions';
import { Actions } from 'react-native-router-flux';
import StarRating from 'react-native-star-rating';


class ListItem extends Component {

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  verif(ver){
    if(ver){
      return (<Text style={styles.textstyle}>Verified</Text>);
    }
    else {
      return (<Text style={styles.textstyle}>Unverified</Text>);
    }
  }
  onUpdatePress(){
    Actions.evEdit({ ev: this.props.ev });
  }
  onValidatePress(){
    this.props.evValidate({ _id:this.props.ev._id });
  }
  validate(ver){
    if(!ver){
      return (
        <Button onPress={this.onValidatePress.bind(this)}>
          Validate
        </Button>
      )
    }
  }

  renderimg(){
    if(this.props.ev.imgbase64){
      return (
        <CardSection>
          <Image style={{flex:1, height: 200, width: 50}} resizeMode="contain" source={{uri: `data:image/jpg;base64,${this.props.ev.imgbase64}`}} />
        </CardSection>
      )
    }
  }
  onStarRatingPress(rating){
    this.props.evRate({ note: rating, _id:this.props.ev._id });
  }
  stared(){
    if(this.props.ev.nb==0){
      return (
        <StarRating
        disabled={false}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        rating={0}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starColor={'red'}
      />
      )
    } else {
      const res= this.props.ev.note/this.props.ev.nb;
      return (
        <StarRating
        disabled={false}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        rating={res}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starColor={'white'}
      />
      )
    }
  }

  time(t){
    let year = t.substring(0,4);
    let month = t.substring(5,7);
    let day = t.substring(8,10);
    let hour = t.substring(11,13);
    let min = t.substring(14,16);
    return year + '/' + month + '/' + day + ' ' + hour + ':' + min;
  }

  renderDescription() {
    const { ev, expanded } = this.props;

    if (expanded) {
      return (
        <Card>
        {this.renderimg()}
        <CardSection>
          <Text style={styles.textstyle}>description : {ev.description}</Text>
        </CardSection>
        <CardSection>
          <Text style={styles.textstyle}>created at : {this.time(ev.createdAt)}</Text>
          </CardSection>
          <CardSection>
          <Text style={styles.textstyle}>event date : {this.time(ev.eventDate)}</Text>
          </CardSection>
          <CardSection>
          {this.verif(ev.verified)}
          </CardSection>
          <CardSection>
          {this.stared()}
          </CardSection>
          <CardSection>
          <Button onPress={this.onUpdatePress.bind(this)}>
            Update
          </Button>
          {this.validate(ev.verified)}
          </CardSection>
        </Card>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { _id, title } = this.props.ev;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.evSelect(_id)}
      >
        <View style={{backgroundColor: '#000'}}>
          <CardSection style={{borderBottomWidth: 1}}>
            <Text style={ titleStyle}>
              Event : {title}
              {'\n'}Created by : Said
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    textAlign : 'center',
    fontSize: 20 ,
    fontFamily: "Montserrat",
    paddingLeft: 15,
    color: 'rgba(255, 255, 255, 0.8)'
  },
  textstyle: {
    color: 'white',
    flex: 1,
    fontSize: 16 ,
    fontFamily: "Montserrat Medium"
  }
};

const mapStateToProps = (state, ownProps) => {
const expanded = state.evs.ev_id === ownProps.ev._id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
