import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View,Text,StyleSheet } from 'react-native';
// import { Container } from './styles';

export default class card_notification extends Component {
  render() {
    return (
      <View style={styles.Card}>
        <View style={styles.CardHeader}>
          <LinearGradient colors={['#E1544F','#F08155']} style={styles.Degrade}/>
          <Text style={styles.Horario}>qua 15:56</Text>
        </View>
      <View style={styles.CardBody}>
        <Text style={styles.Title}>Alguem esta na recepção</Text>
        <Text style={styles.SimpleText} >Alguém solicitou a chamada do seu setor na
          <Text style={styles.NameHermes}> Recepção Hermes</Text>
        </Text>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
Card:{
  flex:1,
  backgroundColor:'#EFF4FC',
  borderColor:'#EA7153',
  borderWidth:2,
  borderRadius:4,
  height: 100,
  padding:10,
  marginBottom: 10
},

Degrade:{
width:10,
height:15,
borderRadius:6
},

CardHeader:{
  flexDirection:"row",
  justifyContent:"space-between"
},

Horario:{
fontFamily:'Poppins Bold' ,
color:'#A1A3B0',
fontSize:10
},

Title:{
  fontFamily:'Poppins Bold' ,
  fontSize:12,
  color:'#443B49'
},

NameHermes:{
  fontFamily:'Poppins Bold' ,
  fontSize:13,
  color:'#443B49'
},

SimpleText:{
 fontFamily:'Poppins Regular',
 color:'#888791',
 fontSize:13
},

CardBody:{
  left:13
}


});
