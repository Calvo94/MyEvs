import React, { Component } from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { CardSection, Card } from '../../common';
import StarRating from 'react-native-star-rating';

class EvDesc extends Component {
  verif(ver) {
    if (ver) {
      return <Text style={styles.textstyle}>Verified</Text>;
    } else {
      return <Text style={styles.textstyle}>Unverified</Text>;
    }
  }

  renderimg(imgbase64) {
    if (imgbase64) {
      return (
        <CardSection>
          <Image
            style={{ flex: 1, height: 200, width: 50 }}
            resizeMode="contain"
            source={{ uri: `data:image/jpg;base64,${imgbase64}` }}
          />
        </CardSection>
      );
    }
  }
  onStarRatingPress(rating) {
    this.props.evRate({ note: rating, _id: this.props.ev._id });
  }
  stared() {
    if (this.props.ev.nb == 0) {
      return (
        <StarRating
          disabled={false}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          maxStars={5}
          rating={0}
          selectedStar={rating => this.onStarRatingPress(rating)}
          starColor={'red'}
        />
      );
    } else {
      const res = this.props.ev.note / this.props.ev.nb;
      return (
        <StarRating
          disabled={false}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          maxStars={5}
          rating={res}
          selectedStar={rating => this.onStarRatingPress(rating)}
          starColor={'white'}
        />
      );
    }
  }

  time(t) {
    let year = t.substring(0, 4);
    let month = t.substring(5, 7);
    let day = t.substring(8, 10);
    let hour = t.substring(11, 13);
    let min = t.substring(14, 16);
    return year + '/' + month + '/' + day + ' ' + hour + ':' + min;
  }

  render() {
    const ev = this.props.navigation.state.params;

    return (
      <Card>
        {this.renderimg(ev.imgbase64)}
        <CardSection>
          <Text style={styles.textstyle}>title : {ev.title}</Text>
        </CardSection>
        <CardSection>
          <Text style={styles.textstyle}>author : Admin</Text>
        </CardSection>
        <CardSection>
          <Text style={styles.textstyle}>description : {ev.description}</Text>
        </CardSection>

        <CardSection>
          <Text style={styles.textstyle}>
            event date : {this.time(ev.eventDate)}
          </Text>
        </CardSection>
      </Card>
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
  }
});

export default EvDesc;
