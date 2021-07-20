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
  AsyncStorage,
} from 'react-native';
import { DrawerActions, NavigationActions, StackActions, NavigationEvents} from 'react-navigation';
import Estilos from './Estilos';
import {NavigationApps,actions,googleMapsTravelModes, mapsTravelModes} from "react-native-navigation-apps";
import { connect } from 'react-redux';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import { 
  Edit_id_tb_user,
  Edit_c_nome,
  Edit_c_email,
  Edit_c_telefone,
  Edit_verifica_login,

} from './Actions/LoginActions';
import ImageResize from 'react-native-scalable-image';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { TextInputMask } from 'react-native-masked-text';
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


Logout.navigationOptions = ({ navigation }) => {
    const { state, setParams, navigate } = navigation;
    const params = state.params || {};
    return {
      header: null
    }
}



function Logout(props) {

    useEffect(() => {

        //if(!props.id_tb_user == 0){

          props.Edit_verifica_login('LoginInicio');


            props.Edit_id_tb_user('0');
            props.Edit_c_nome('');
            props.Edit_c_email('');
            props.Edit_c_telefone('');

   
   
            AsyncStorage.setItem("id_tb_user", '0');
            AsyncStorage.setItem("c_nome", '');
            AsyncStorage.setItem("c_email", '');
            AsyncStorage.setItem("c_telefone", '0');


        setTimeout(() => {
          
          props.Edit_verifica_login('LoginInicio');
          props.navigation.navigate('LoginVerifica');
          props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'LoginVerifica' })],
          }));

        }, 1000);
        //}

    },[props.id_tb_user]);

   

    return (
        <View style={{flex:1}}>
 
        <Load visivel={true} cor={'#1b1b1b'} tamanho={'small'} /*  */ navigation={props.navigation} />
        </View>
    )
};


const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
    c_nome:state.auth.c_nome,
    c_email:state.auth.c_email,
    c_telefone:state.auth.c_telefone,
    verifica_login:state.auth.verifica_login,
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,
  Edit_c_nome,
  Edit_c_email,
  Edit_c_telefone,
  Edit_verifica_login,


  })(Logout);
 export default LoginConnect;