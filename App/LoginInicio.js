import React , { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  ScrollView, 
  TouchableOpacity,
  Linking,
  TextInput,
  Keyboard,
  Button,
} from 'react-native';

import Estilos from './Estilos';
import { DrawerActions, NavigationActions, StackActions, NavigationEvents} from 'react-navigation';
import { connect } from 'react-redux';

import { 
  Edit_id_tb_user,
  Edit_verifica_login,
} from './Actions/LoginActions';
import ImageResize from 'react-native-scalable-image';

//GLOBAIS
import Configs from './Includes/Configs';
import Flat from './Includes/Flat';
import Erro from './Includes/Erro';
import Load from './Includes/Load';
import Header from './Includes/Header';
import Rodape from './Includes/Rodape';

//GLOBAIS


import { 
  //GLOBAIS
  ListaDados,
  PostaDados,
  Compartilhar,
  Navega,
  AbreURL,
  //GLOBAIS

  //LOCAIS

  //LOCAIS
}
//FUNCOES
from './Includes/Funcoes';


LoginInicio.navigationOptions = ({ navigation }) => {
    const { state, setParams, navigate } = navigation;
    const params = state.params || {};
    return {
      header: null
    }
}



function LoginInicio(props) {


   function Navega(pagina){
    props.navigation.navigate(pagina,{
      retorno:props.retorno
    });
    /*
    props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: pagina })],
    }))
    */
   }


    return (
    <>
         <View style={[, {backgroundColor:'#000000', flex:1, }]}>
         <ImageBackground source={require('../assets/notificacao_bg.jpg')} style={{width: '100%', height: '100%', flex:1, alignItems:'center', justifyContent:'center',backgroundColor:'#2e2e2e'}}>
             <ImageResize source={require('../assets/logo_inicio.png')} width={Dimensions.get('window').width/2} />
              
             {/*<ImageResize source={require('../assets/bemvindo_icone.png')} width={Dimensions.get('window').width/3.7} style={{marginTop:0}} />*/}
            
    <Text style={[Estilos.TopicoInicio, Estilos.NotificacaoMargemTopo, {}]}>SEJA BEM VINDO</Text>

            { props.navigation.getParam('mensagem', 'NO-ID')?
             <Text style={[Estilos.TextoInicio, Estilos.NotificacaoMargemTopo,{paddingLeft:Dimensions.get('window').width/20, paddingRight:Dimensions.get('window').width/20, }]}>
             Faça seu cadastro, participe{'\n'} de nossas promoções e receba nossas novidades!{'\n'} 
             </Text>
             :
             <Text style={[Estilos.TextoInicio, Estilos.NotificacaoMargemTopo,{paddingLeft:Dimensions.get('window').width/20, paddingRight:Dimensions.get('window').width/20, }]}>
             Faça seu cadastro, participe{'\n'} de nossas promoções e receba nossas novidades!{'\n'} 
             </Text>
            }

            

             <TouchableOpacity style={[Estilos.ForaBotaoNotificacao, Estilos.NotificacaoMargemTopo]}
             onPress={()=>{
             props.Edit_verifica_login('Cadastro');
             Navega('Cadastro');
             
             }}>
                 <Text style={Estilos.TextoBotaoNotificao}>FAZER MEU CADASTRO AGORA</Text>
             </TouchableOpacity>

          
             <TouchableOpacity style={[Estilos.ForaBotaoNotificacao, Estilos.NotificacaoMargemTopo]} onPress={()=>{
             props.Edit_verifica_login('Login');
             Navega('Login');
             }}
             >
                 <Text style={Estilos.TextoBotaoNotificao}>JÁ POSSUO CADASTRO</Text>
             </TouchableOpacity>
             {/*

             <View style={{marginTop:Dimensions.get('window').height/50}}>
             <Text style={Estilos.TextoBotaoNotificaoPular}>OU</Text>
             </View>

             

             <View style={[Estilos.QuadroCadastroFora,{marginTop:Dimensions.get('window').height/50}]}>

               <TouchableOpacity style={[Estilos.QuadroCadastroEsq]}>
                 <View style={[,{marginRight:5}]}><ImageResize source={require('../assets/g_login.png')} width={Dimensions.get('window').width/13} /></View>
                 <View><Text style={[Estilos.QuadroCadastroEsqTexto]}>Entrar com Google</Text></View>
               </TouchableOpacity>

               <View style={{width:1, height:30, backgroundColor:'#FFFFFF'}}></View>
               <TouchableOpacity style={[Estilos.QuadroCadastroDir]}>
                 <View style={[,{marginRight:5}]}><ImageResize source={require('../assets/f_login.png')} width={Dimensions.get('window').width/13} /></View>
                 <View><Text style={[Estilos.QuadroCadastroEsqTexto]}>Entrar com Facebook</Text></View>
               </TouchableOpacity>
               
             </View>
             */}
          
            
         </ImageBackground>
         </View>
         
      
    </>
    )
};


const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
    verifica_login:state.auth.verifica_login,
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,
  Edit_verifica_login,

  })(LoginInicio);
 export default LoginConnect;