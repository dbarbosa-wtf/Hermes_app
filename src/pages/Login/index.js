import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View,StyleSheet,Text,StatusBar,Image,ImageBackground,navigation,SafeAreaView} from 'react-native';
import {Input,ButtonText,Footer, ErrorMessage} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../services/api';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as LoginActions from '~/store/actions/login'


class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  state={
    email:'',
    senha:'',
    error:''
  };

  constructor (props) {
    super(props);
    this.state = {hasFocus: false,
      borderBottomColorLogin:'#E3EEF9',
      borderBottomColorPass:'#E3EEF9'};
      this.login = React.createRef();""
  }

  handleSubmit=async()=>{
    // const { email,senha } = this.state;
     const { loginSuccess, loginFailure,navigation } = this.props;

    // try {
    //   await api.post(`/api/v1/auth/${email,senha}`)
    //   //DEU CERTO
    //   loginSuccess(email,senha);
    //   //NAVEGAR
       navigation.navigate('Main')
    // } catch (err) {
    //   //SETAR O ERRO
    //   loginFailure();
    // }
    //this.props.navigation.navigate('Main');

  //   if(this.state.email.length === 0 || this.state.senha.length === 0) {
  //     this.setState({error:'Preencha usuário e senha para continuar!'},)
  //   }else{
  //     try {
  //       const response = await api.post('/api/v1/auth/',{
  //         email:this.state.email,
  //         senha:this.state.senha,
  //       });
  //       console.log(response.data.data.token)

  //       await AsyncStorage.setItem('@Hermes:token', response.data.token);

  //       const resetAction = StackActions.reset({
  //         index: 0,
  //         actions: [
  //           NavigationActions.navigate({ routeName: 'Main' }),
  //         ],
  //       });
  //       this.props.navigation.dispatch(resetAction);
  //     } catch (_err) {
  //       this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
  //     }
  //   }
  }

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (senha) => {
    this.setState({ senha });
  };

  onFocus(type) {
    if(type == "login"){
      this.setState({
        borderBottomColorLogin:'#EA7153',
      })
    }else if(type == "pass"){
      this.setState({
        borderBottomColorPass:'#EA7153',
      })
    }else{
      this.setState({
        borderBottomColorLogin:'#E3EEF9',
        borderBottomColorPass:'#E3EEF9',
      })
    }
  }

  onBlur(type) {
    if(type == "login"){
      this.setState({
        borderBottomColorLogin:'#E3EEF9',
      })
    }else if(type == "pass"){
      this.setState({
        borderBottomColorPass:'#E3EEF9',
      })
    }
  }

  render() {
    const { email,senha } = this.state;
    const { error } = this.props;

    return (
    <View style={styles.principal}>

      <StatusBar barStyle="light-content" backgroundColor="#443B49" />

      <View style={styles.imagem}>
      <ImageBackground
          source={
            require('~/Images/Imagem-63.png')
          }
          style={styles.imageBackground}
        >
        <Image
            source={
              require('~/Images/HERMES.png')
            }
            style={styles.logo}
          />
      </ImageBackground>
      </View>
      <View style={styles.bemVindo}>
        <Text style={styles.textoBase}>Bem-Vindo ao</Text>
        <Text style={styles.textBold}>Hermes</Text>
        <View style={styles.login}>
          <Text style={styles.textSemiBold}>Login</Text>
          <LinearGradient colors={['#E1544F','#F08155']} style={styles.sublinhado} />
          {/* {error && <ErrorMessage>Houve um problema com o login, verifique suas credenciais!</ErrorMessage>} */}
          <Input
            value={email}
            onChangeText={this.handleEmailChange}
            ref={this.login}
            autoCapitalize="none"
            style={{borderBottomColor:this.state.borderBottomColorLogin,borderBottomWidth:2, top:80, left:50}}
            onBlur={ () => this.onBlur('login') }
            onFocus={ () => this.onFocus('login') }
            autoCorrect={false} placeholder="Digite seu email..."/>
          <Input
            value={senha}
            onChangeText={this.handlePasswordChange}
            secureTextEntry
            autoCapitalize="none"
            style={{borderBottomColor:this.state.borderBottomColorPass,borderBottomWidth:2, top:80, left:50}}
            onBlur={ () => this.onBlur('pass') }
            onFocus={ () => this.onFocus('pass') }
            autoCorrect={false}
            placeholder="Digite aqui sua senha..."/>
          {error !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}
          <LinearGradient colors={['#E1544F','#F08155']} style={styles.buttonDegrade} >
            <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
              <Text style={styles.textEntrar} >Entrar</Text>
              <Image
                 source={
                    require('~/Images/Grupo-1466.png')
                  }
                 style={styles.logobutton}
                />
            </TouchableOpacity>
          </LinearGradient>
          <ButtonText style={styles.buttontxt}>Não lembro minha senha</ButtonText>
          <ButtonText style={styles.buttontxt}>Criar uma nova conta</ButtonText>
          <Footer>
            <LinearGradient colors={['#E1544F','#F08155']} style={styles.rodape} />
          </Footer>
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
textoBase:{
  fontFamily:"Poppins Regular",
  fontSize:25,
  color:'#A1A3B0',
  top:30,
  left:38
},

textSemiBold:{
  fontFamily:"Poppins SemiBold",
  fontSize:18,
  top:50,
  left:30
},

sublinhado:{
  top:50,
  left:30,
  width:22,
  height:7,
  borderRadius: 4,
},

textBold:{
  fontFamily:"Poppins Bold",
  fontSize:25,
  top:25,
  left:38
},

textEntrar:{
  fontFamily:"Poppins SemiBold",
  fontSize:12,
  color:'#FFF',
},

principal:{
  flex:1,
  backgroundColor:'#443B49',
},

imagem:{
  flex:1,
  width:120,
  height:100
},

imageBackground:{
  width:411,
  height:300
},

logo:{
  top:60,
  left:320
},

logobutton:{
  left:25
},

bemVindo:{
  flex:4,
  width:370,
  backgroundColor:'#E3EEF9',
},

login:{
  height:497,
  width:390,
  left:22,
  top:37,
  backgroundColor:"#FFFFFF",
  fontFamily:'Poppins Regular',
  justifyContent:'flex-start',
  alignItems:'flex-start',
},

rodape:{
  width:390,
  height:10,
},

buttonDegrade:{
  top:150,
  left:220,
  borderRadius: 30,
  width:140,
  height:48,
  shadowColor:'#E5451560',
  shadowOffset:{width:3,height:6},
},

button:{
  borderRadius: 30,
  width:140,
  height:48,
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row'
},

inputtxt:{
  borderBottomColor:'#E3EEF9',
  borderBottomWidth:2,
  top:80,
  left:50
},

buttontxt:{
  top:225,
  left:30
},

});

const mapStateToProps = state => ({
  error: state.login.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Login);
