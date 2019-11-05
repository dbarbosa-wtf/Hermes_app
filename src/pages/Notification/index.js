import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { View,StyleSheet,Image,ScrollView,Text, Card,StatusBar } from 'react-native';
import CardNotification from '~/components/card_notification';
import { Header ,ScrView, Body } from './styles';
import { Container } from 'native-base';


export default class Notification extends Component {


  handleMain=async()=>{
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
     <View style={styles.container}>
        <StatusBar hidden/>
       <Header>
          <View style={styles.btnVoltar}>
          <TouchableOpacity onPress={this.handleMain}>
            <Image
              source={
                require('~/Images/VOLTAR.png')
              }
            />
          </TouchableOpacity>
        </View>
        <View style={styles.notificacaotxt}>
          <Text style={styles.textSemiBold}>Notificações</Text>
          <LinearGradient colors={['#E1544F','#F08155']} style={styles.sublinhado} />
        </View>
       </Header>
        <View style={styles.containerscr}>
          <ScrView >
            <CardNotification/>

          </ScrView>
        </View>
     </View>

    );

  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'flex-start',
    justifyContent:'center',
  },

  containerscr:{
    flex:3,
    width:'90%',
    alignSelf: 'center',
    justifyContent:'center',

  },

  sublinhado:{
    top:50,
    width:22,
    height:7,
    borderRadius: 4,
  },

  textSemiBold:{
    fontFamily:"Poppins SemiBold",
    fontSize:18,
    top:50,
  },

  notificacaotxt:{
    bottom:5,
    left:40
  },

  btnVoltar:{
    left:20
  }

});
