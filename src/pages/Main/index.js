import React,{Component} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import CardCompromissos from '~/components/card_compromise'
import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar,View,BackHandler
} from 'react-native';

import { Avatar,Header, ScrView } from './styles';
import OneSignal from 'react-native-onesignal';
import io from 'socket.io-client';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  handleNotification=async()=>{
    this.props.navigation.navigate('Notification');
  }

  componentDidMount(){
   this.socket =io('https://api.hermesagent.com:3000');

   OneSignal.init('9c803710-31ad-454d-85ae-ba1f31c5ec28');
   OneSignal.addEventListener('received', this.onReceived);
   OneSignal.addEventListener('opened',this.onOpened);
   OneSignal.addEventListener('ids',this.onIds);
  }

  onReceived= data => {
    console.log('Notification received:',data);

  };

  onOpened= notification => {
    console.log('Opened:',notification)
    // console.log('Message: ', openResult.notification.payload.body);
    // console.log('Data: ', openResult.notification.payload.additionalData);
    // console.log('isActive: ', openResult.notification.isAppInFocus);
    // console.log('openResult: ', openResult);
   };

  onIds= device => {
    console.log('id:',device)

    this.socket.emit("RegistrarUsuarioCelular",{
      id_onesignal:device.userId,
      id_usuario: 40
    });
  };

//   componentWillMount() {
//   BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);

//  }

   componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
     OneSignal.removeEventListener('received', this.onReceived);
     OneSignal.removeEventListener('opened', this.onOpened);
     OneSignal.removeEventListener('ids', this.onIds);
  }


  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }
  render = () =>{
    return(
    <View style={styles.container} >
    <StatusBar hidden/>
        <Image
            source={
            require('~/Images/mascara-16.png')
            }
            style={styles.logoBack}
        />
      <Header>
        <TouchableOpacity onPress={this.handleNotification} style={styles.sino}>
            <Image
              source={
              require('~/Images/SINO.png')
            }
            />
          </TouchableOpacity>
          <Avatar
            source={
            require('~/Images/Doug.jpg')
            }
            style={styles.avatar}
            />
        </Header>
      <Text style={styles.textBase}>Olá</Text>
      <Text style={styles.textBold}>Douglas</Text>

      <View style={styles.barra}/>

      <View style={styles.Compromissos}>
        <View style={styles.Header}>
          <Text style={styles.textSemiBold}>Compromissos</Text>
          <LinearGradient colors={['#E1544F','#F08155']} style={styles.sublinhado} />
        </View>
        <View style={styles.containerscr}>
          <ScrView >
            <CardCompromissos/>
            <CardCompromissos/>
            <CardCompromissos/>
            <CardCompromissos/>
            <CardCompromissos/>
            <CardCompromissos/>
            <CardCompromissos/>
            <CardCompromissos/>
            <CardCompromissos/>
          </ScrView>
        </View>
      </View>
    </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'flex-end',
    paddingHorizontal: 10,
    backgroundColor:'#FFFFFF'
  },

  logoBack:{
    top:110,
    right:130
  },
  sino:{
    right:10,
  },

  Compromissos:{
    height:'79%',
    width:'110%',
    backgroundColor:'#E3EEF9',
  },

  barra:{
    top:0,
    width:350,
    height:35,
    right:50,
    backgroundColor:'#443B49'
  },

  textBase:{
    fontFamily:"Poppins Regular",
    fontSize:25,
    color:'#A1A3B0',
    bottom:10,
    right:150
  },

  textBold:{
    fontFamily:"Poppins Bold",
    fontSize:25,
    right:115,
    bottom:18
  },
  sublinhado:{
    top:50,
    left:30,
    width:22,
    height:7,
    borderRadius: 4,
  },

  textSemiBold:{
    fontFamily:"Poppins SemiBold",
    fontSize:18,
    top:50,
    left:30
  },

  avatar:{
    borderWidth:2,
    borderColor:'#FFFFFF',
    borderRadius:30
  },

  Header:{
    flex:1,
    bottom:20
  },

  containerscr:{
    flex:6,
    width:'90%',
    alignSelf: 'center',
    justifyContent:'center',

  },

});


