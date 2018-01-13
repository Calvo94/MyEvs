import React from 'react';
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native';
import { CardSection } from './CardSection';

const Row = ({ img, name, author, onPress, children }) => {
  const { imgstyle, namestyle, authorstyle } = styles;
  if (img.length > 0) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <CardSection
            style={{ backgroundColor: '#000', borderBottomWidth: 1 }}
          >
            <Image
              style={imgstyle}
              resizeMode="contain"
              source={{ uri: `data:image/jpg;base64,${img}` }}
            />
            <View style={{ flex: 1 }}>
              <Text style={namestyle}>{name}</Text>
              <Text style={authorstyle}>{author}</Text>
            </View>
          </CardSection>
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <CardSection
            style={{ backgroundColor: '#000', borderBottomWidth: 1 }}
          >
            <View style={{ flex: 1 }}>
              <Text style={namestyle}>{name}</Text>
              <Text style={authorstyle}>{author}</Text>
            </View>
          </CardSection>
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = {
  imgstyle: {
    flex: 1,
    height: 100,
    width: 50
  },
  namestyle: {
    margin: 10,
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Montserrat',
    color: 'rgba(255, 255, 255, 0.8)'
  },
  authorstyle: {
    margin: 10,
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Montserrat',
    color: 'rgba(255, 255, 255, 0.8)'
  }
};

export { Row };
