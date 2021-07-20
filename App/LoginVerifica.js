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

import LoginInicio from './LoginInicio';
import Cadastro from './Cadastro';
import CadastroEdit from './CadastroEdit';
import Login from './Login';

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


LoginVerifica.navigationOptions = ({ navigation }) => {
    const { state, setParams, navigate } = navigation;
    const params = state.params || {};
    return {
      header: <Header tipo={'LOGIN'} navigation={navigation}></Header>
    }
}



function LoginVerifica(props) {
  let p_mostra;


  useEffect(() => {
    /*
    if(props.verifica_login == 'LoginInicio'){
      p_mostra = <LoginInicio props={props} navigation={props.navigation}/>;
    }else if(props.verifica_login == 'CadastroEdit'){
      p_mostra = <CadastroEdit props={props} navigation={props.navigation}/>;
    }else if(props.verifica_login == 'Login'){
      p_mostra = <Login props={props} navigation={props.navigation}/>;
    }
    */
  },[]);



  useEffect(() => {
/*
    let p_retorno = props.verifica_login;
    props.navigation.dispatch(StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: props.verifica_login })],
    }));
*/

      

  },[]);
  


  return (
  <>

  {
    props.verifica_login == 'Cadastro'?
    <Cadastro props={props} navigation={props.navigation} retorno={props.navigation.getParam('retorno', 'no-retorno')}/>
    :
    null
  }

  {
    props.verifica_login == 'LoginInicio'?
    <LoginInicio props={props} navigation={props.navigation} retorno={props.navigation.getParam('retorno', 'no-retorno')}/>
    :
    null
  }

  {
    props.verifica_login == 'CadastroEdit'?
    <CadastroEdit props={props} navigation={props.navigation} retorno={props.navigation.getParam('retorno', 'no-retorno')}/>
    :
    null
  }

  {
    props.verifica_login == 'Login'?
    <Login props={props} navigation={props.navigation} retorno={props.navigation.getParam('retorno', 'no-retorno')}/>
    :
    null
  }
  {
    props.verifica_login == 'Configuracoes'?
    <CadastroEdit props={props} navigation={props.navigation} retorno={props.navigation.getParam('retorno', 'no-retorno')}/>
    :
    null
  }
  {/*<Text>{props.verifica_login}</Text>*/}
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

  })(LoginVerifica);
 export default LoginConnect;