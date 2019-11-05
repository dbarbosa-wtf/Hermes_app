import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View,Text,StyleSheet, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
// import { Container } from './styles';

export default class card_compromise extends Component {
  render() {
    return (
      <View style={styles.Card}>
        <View style={styles.CardHeader}>
          <LinearGradient colors={['#E1544F','#F08155']} style={styles.Degrade}/>
        </View>
        <LinearGradient colors={['#E1544F','#F08155']} style={styles.DegradeOpacity}/>
      <View style={styles.CardBody}>
        <View style={styles.CardBodyHorario}>
          <View style={styles.Calendar}>
              <Text style={styles.Dia}>16  </Text>
              <Text style={styles.Mes}>Jun</Text>
          </View>
          <View style={styles.Clock}>
            <Text style={styles.IconClock}> - </Text>
            <Text style={styles.Horario}>15:56H</Text>
          </View>
        </View>
        <View style={styles.CardBodyInformation}>
          <Text style={styles.Title}>Reunião do Cosmos</Text>
          <Text style={styles.SimpleText}>Reunião do Cosmos</Text>
        </View>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
Card:{
  flex:1,
  backgroundColor:'#EFF4FC',
  borderRadius:9,
  height: 110,
  marginBottom: 10
},

Degrade:{
position:'absolute',
width:6,
height:50,
borderRadius:6,
top: 30,
left:0
},

DegradeOpacity:{
  alignSelf:"flex-end",
  opacity: 0.1,
  bottom:0,
  width:'75%',
  height:20
},

CardHeader:{
  flexDirection:"row",
  justifyContent:"space-between"
},

Calendar:{
  flexDirection: "row",
},

Dia:{
  color: '#443B49',
  fontFamily:'Poppins Bold' ,
  fontSize: 30,
  bottom: 4,
  alignSelf: "center"
},

Mes:{
  fontFamily:'Poppins Regular',
  color:'#A1A3B0',
  marginRight: '8%',
  right: 5,
  fontSize:15,
  alignSelf: "center"
},

Clock:{
  flexDirection: "row"
},

IconClock:{

},

Horario:{
fontFamily:'Poppins Bold' ,
color:'#443B49',
fontSize:12
},

Title:{
  fontFamily:'Poppins Bold' ,
  fontSize:13,
  color:'#443B49'
},

NameHermes:{
  fontFamily:'Poppins Bold' ,
  fontSize:13,
  color:'#443B49'
},

SimpleText:{
 fontFamily:'Poppins Regular',
 color:'#A1A3B0',
 fontSize:11
},

CardBody:{
  left:13,
  padding:5,
  flexDirection: "row",
},
CardBodyInformation: {
  borderLeftColor: '#C9CEDB',
  borderLeftWidth: 1,
  paddingLeft: '5%'
}

});
