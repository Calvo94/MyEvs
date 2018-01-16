import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
} from 'react-navigation';
import Intro from '../components/Intro'; //I
import EvList from '../components/event/display/EvList'; //L
import EventAgenda from '../components/event/display/EventAgenda'; //A
import EvDesc from '../components/event/display/EvDesc'; //D
import LoginForm from '../components/login/LoginForm'; //LOGIN
import EvCreate from '../components/event/modify/EvCreate'; //C
import EvPicture from '../components/event/modify/EvPicture'; //P

export const DisplayListev = DrawerNavigator(
  {
    Listev: {
      screen: EvList
    },
    EvDescL: {
      screen: EvDesc
    }
  },
  {
    mode: 'modal'
  }
);

export const DisplayAgendaev = DrawerNavigator(
  {
    EventAgenda: {
      screen: EventAgenda
    },
    EvDescA: {
      screen: EvDesc
    }
  },
  {
    mode: 'modal'
  }
);

export const DisplayEvs = TabNavigator({
  //1
  DisplayListev: {
    screen: DisplayListev
  },
  DisplayAgendaev: {
    screen: DisplayAgendaev
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

export const HomeApp = StackNavigator({
  //4
  DisplayEv: {
    screen: DisplayEvs,
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
