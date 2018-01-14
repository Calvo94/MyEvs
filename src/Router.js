import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import EvList from './components/event/display/EvList';
import EvCreate from './components/event/modify/EvCreate';
import EvEdit from './components/event/modify/EvEdit';
import EvPicture from './components/event/modify/EvPicture';
import Home from './components/event/Home';
import EventAgenda from './components/event/display/EventAgenda';
import LoginForm from './components/login/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="asd">
        <Scene key="Home" component={Home} title="Home" initial />
        <Scene
          key="signin"
          component={LoginForm}
          title="Login"
          onRight={() => Actions.evcreate()}
          rightTitle="Sign Up"
        />
        <Scene
          onRight={() => Actions.evcreate()}
          rightTitle="Add"
          key="evList"
          component={EvList}
          title="evList"
          onBack={() => Actions.begin()}
        />
        <Scene key="evcreate" component={EvCreate} title="Create an ev" />
        <Scene key="evEdit" component={EvEdit} title="Edit an ev" />
        <Scene key="evPicture" component={EvPicture} title="Add a picture" />
        <Scene key="eventAgenda" title="Agenda" component={EventAgenda} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
