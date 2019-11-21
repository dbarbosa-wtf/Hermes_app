import React,{Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import '~/config/ReactotronConfig';
import { Provider } from 'react-redux';
import store from './store';
import createNavigator from '~/routes';


export default class App extends Component {
  state={
    userChecked:false,
    userLogged:false,
  };

  async componentDidMount(){
    const token = await AsyncStorage.getItem('@Hermes:token')
    
    this.setState({
      userChecked:true,
      userLogged: !!token,
    })

  }

  render(){
    const {userChecked,userLogged} = this.state;

    if(!userChecked) return null;

    const Routes = createNavigator(userLogged)

    return  <Routes />;
  }

}


