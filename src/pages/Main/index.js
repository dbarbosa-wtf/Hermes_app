import React,{Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import CardCompromissos from '~/components/card_compromise'
import {
  Text, 
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
  View,
  BackHandler,
  PixelRatio
} from 'react-native';

import { Header, ScrView,ButtonText } from './styles';
import OneSignal from 'react-native-onesignal';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-elements';

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
};

const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
};

 const socket =io('http://172.16.0.90:3000/',{
   transports: ['websocket'], 
   jsonp: false 
 });


export default class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
    navigate: PropTypes.func,      
    }).isRequired,
  };

  constructor(props) {
    super(props)
    this.state={
      show:false,
    };
  }

  ShowHideComponent=()=>{
    if(this.state.show == false){
      this.setState({show:true});
    }else{
      this.setState({show:false})
    }
  }

  handleNotification=async()=>{
    const {navigation}=this.props;
    
    navigation.navigate('Notification');
  }

  async componentDidMount(){   
    
    const nome = await AsyncStorage.getItem('@Hermes:username');
    
    this.setState({nome});
    
    socket.connect ();
     socket.on ('connect', () => { 
     console.log ('conectado ao servidor')
    }); 

    
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
    //  console.log('id:',device)
    
      socket.emit("RegistrarUsuarioCelular",{
        id_onesignal:device.userId,
        id_usuario: 40
      });
  };

   componentWillUnmount() {
  
     OneSignal.removeEventListener('received', this.onReceived);
     OneSignal.removeEventListener('opened', this.onOpened);
     OneSignal.removeEventListener('ids', this.onIds);
  }
  
  signOut = async ()=>{
    const {navigation}=this.props;

    await AsyncStorage.clear();

    navigation.navigate('Login');
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
        <TouchableOpacity onPress={this.handleNotification} style={styles.cxsino}>
          <Image
            source={
             require('~/Images/SINO.png')
            }
            style={
              styles.sino
            }
          />
        </TouchableOpacity>
        
        <Avatar          
          rounded
          showEditButton   
          size={60}
          title="dl"
          onPress={this.ShowHideComponent}
          activeOpacity={0.7}                
          containerStyle={{borderWidth:2, borderColor:'#00000029',marginLeft:10}}
          source={
            require('~/Images/Doug.jpg')
          }
        />
                
      </Header>
      
      <View style={styles.tituloNome}>
       <Text style={styles.textBase}>Olá</Text>
       <Text style={styles.textBold}>{this.state.nome}</Text> 
      </View>

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

      {this.state.show ? (
        <View style={styles.Card}>        
          <View style={styles.CardBody}>
            <View style={styles.linha}></View>
            <TouchableOpacity onPress={this.signOut}>
              <ButtonText>Perfil</ButtonText>
            </TouchableOpacity>          
          </View>          
          <View style={styles.Sair}>
            <TouchableOpacity onPress={this.signOut}>
              <ButtonText style={styles.buttontxt}>Sair</ButtonText>        
            </TouchableOpacity>
        </View>
      </View>
      ):null }
      
    </View>
    );
  }

};

const styles = StyleSheet.create({
  tituloNome:{        
    right:widthPercentageToDP('13%'),
  },

  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'flex-end',
    paddingHorizontal: 10,
    backgroundColor:'#FFFFFF'
  },

  Card:{    
    position:'absolute',
    backgroundColor:'#FFFF',
    borderColor:'lightgray',
    borderWidth:1,
    borderRadius:4,          
    top:85,
    height:80,
    width:140,
    right:heightPercentageToDP('1.5%'),
  },

  CardBody:{       
    width:widthPercentageToDP('15%'),
    marginTop:heightPercentageToDP('2.5%'),
    marginLeft:widthPercentageToDP('4%')    
  },

  logoBack:{
    top:110,
    right:widthPercentageToDP('30%')
  },
  
  cxsino:{
    left:heightPercentageToDP('1.5%'),        
    width:50,
    height:50,       
  },

  sino:{
    left:heightPercentageToDP('1.5%')
  },

  Compromissos:{
    height:heightPercentageToDP('75%'),
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
    bottom:5,  
  },

  textBold:{
    fontFamily:"Poppins Bold",
    fontSize:25,  
    bottom:16,
    
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

  buttontxt:{
    textDecorationLine:'underline',
    fontFamily:"Poppins Bold",
    fontSize:12,    
  },

  Sair:{    
    marginTop:heightPercentageToDP('1%'),
    marginLeft:widthPercentageToDP('25%')
  },

  linha:{
    borderTopColor: '#C9CEDB',
    borderTopWidth: 2,
    marginBottom: heightPercentageToDP('1%')
  }

});


