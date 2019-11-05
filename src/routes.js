import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '~/pages/Login';
import Main from '~/pages/Main';
import Notification from '~/pages/Notification';


const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Main,
    Notification,
    },{
     mode:'modal'
  })
);

export default Routes;
