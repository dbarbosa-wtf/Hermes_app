import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '~/pages/Login';
import Main from '~/pages/Main';
import Notification from '~/pages/Notification';


const Routes = ( userLogged = false ) => createAppContainer(
  createSwitchNavigator({
    Login,
    Main,
    Notification,
    },{
      initialRouteName:userLogged ? 'Main' : 'Login',
    })
);

export default Routes;
