import { StackNavigator } from 'react-navigation';
import Home from '../components/event/Home';
import Intro from '../components/Intro';

export const FeedStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  Intro: {
    screen: Intro,
    navigationOptions: {
      title: 'Intro'
    }
  }
});

export const Root = StackNavigator(
  {
    Home: {
      screen: FeedStack
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);
/*
export const Tabs = TabNavigator({
  Example: {
    screen: Example,
    navigationOptions: {
      tabBarLabel: 'AppIntro',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />
    },
  },
  AgendaScreen: {
    screen: AgendaScreen,
    navigationOptions: {
      tabBarLabel: 'Agenda',
      tabBarIcon: ({ tintColor }) => <Icon name="today" size={35} color={tintColor} />,
    },
  },

});
*/
