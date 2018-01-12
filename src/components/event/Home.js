import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager,
  Image
 } from 'react-native';
import { CardSection,Button } from '../common';
import {  Header, Card  } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

class Home extends Component {
  onActualitePress(){
    Actions.evList({});
  }
  onAgendaPress(){
    Actions.eventAgenda();
  }
  onLoginPress(){
    Actions.login();
  }
  onCreatePress(){
    Actions.evcreate();
  }
  render(){
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <Card>
          <LinearGradient colors={['#772953', '#e95420']} locations={[0.1,0.9]}>
          <CardSection>
          <Button onPress={this.onActualitePress.bind(this)}>Actualite</Button>
          </CardSection>
          <CardSection>
          <Button onPress={this.onAgendaPress.bind(this)}>Agenda</Button>
          </CardSection>
          <CardSection>
          <Button onPress={this.onLoginPress.bind(this)}>Login</Button>
          </CardSection>
          <CardSection>
          <Button onPress={this.onCreatePress.bind(this)}>Create event</Button>
          </CardSection>
        </LinearGradient>
        </Card>
      </View>
    )
  }
}

export default Home;
