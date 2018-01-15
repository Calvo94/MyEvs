import { StackNavigator, TabNavigator } from 'react-navigation';
import Intro from '../components/Intro'; //I
import EvList from '../components/event/display/EvList'; //L
import EventAgenda from '../components/event/display/EventAgenda'; //A
import EvDesc from '../components/event/display/EvDesc'; //D
import LoginForm from '../components/login/LoginForm'; //LOGIN
import EvCreate from '../components/event/modify/EvCreate'; //C
import EvPicture from '../components/event/modify/EvPicture'; //P

export const DisplayEvs = TabNavigator({
  //1
  Listev: {
    screen: EvList
  },
  EventAgenda: {
    screen: EventAgenda
  }
});

export const CreateEv = TabNavigator({
  //2
  EvCreate: {
    screen: EvCreate
  },
  EvPicture: {
    screen: EvPicture
  },
  EvDescC: {
    screen: EvDesc
  }
});

export const DisplayEv = StackNavigator(
  {
    //3

    DisplayEvs: {
      screen: DisplayEvs,
      navigationOptions: {
        header: null
      }
    },
    EvDesc: {
      screen: EvDesc,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title
      })
    }
  },
  {
    mode: 'modal'
  }
);

export const HomeApp = StackNavigator({
  //4
  DisplayEv: {
    screen: DisplayEv,
    navigationOptions: {
      header: null
    }
  },
  CreateEv: {
    screen: CreateEv,
    navigationOptions: {
      header: null
    }
  }
});

export const SignIn = StackNavigator({
  //5
  LoginForm: {
    screen: LoginForm,
    navigationOptions: {
      headerTitle: 'Login'
    }
  },
  HomeApp: {
    screen: HomeApp,
    navigationOptions: {
      header: null
    }
  }
});

export const Root = StackNavigator(
  //6
  {
    Intro: {
      screen: Intro
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    headerMode: 'none'
  }
);
