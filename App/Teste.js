
import React , { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Modal,
  Alert,
  TextInput,
  InteractionManager,
  AppState,
  StatusBar,
  Dimensions,
} from 'react-native';
import Estilos from './Estilos';
import OneSignal from 'react-native-onesignal';
import { DrawerActions, NavigationActions, StackActions, NavigationEvents} from 'react-navigation';
//GLOBAIS
import Configs from './Includes/Configs';
import Flat from './Includes/Flat';
import Erro from './Includes/Erro';
import LoadHome from './Includes/LoadHome';
import Header from './Includes/Header';
//GLOBAIS

//REDUX
import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
  Edit_url,
  //LIVE
  Edit_id_tb_status,
  Edit_c_video,
  Edit_id_tb_tipo,
  Edit_c_texto,
  Edit_passou,
  //LIVE

  Edit_verifica_login,
  Edit_redireciona_login,


} from './Actions/LoginActions';
//REDUX

//FUNCOES
import { 
  //GLOBAIS
  ListaDados,
  PostaDados,
  Testelala,
  Navega,
  AbreURL,
  LerTXT,
  //GLOBAIS
}
//FUNCOES
from './Includes/Funcoes';






Teste.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header:null,
    tabBarVisible:false,
  }
}

function Teste(props) {
  const username = useRef(null);

  
  //GLOBAIS
  const { navigate } = props.navigation;

  
  const [falha, setFalha] = useState(false);
  const [load, setLoad] = useState(false);
  //GLOBAIS

  //LOCAIS
  const [tb_categoria, setCategoria] = useState([]);
  //LOCAIS

  //DIDMOUNT
  useEffect(() => {


  },[]);



  return (
    <>
      <SafeAreaView style={[Estilos.PretoBg, {flex:1}]}>
      <StatusBar backgroundColor="#1d1d1d" barStyle="light-content" />
      <NavigationEvents
          onWillFocus={payload => {
          
    
          }}
        />
       
        <View style={{flex:1, }}>

          <Header tipo={'HOME'} navigation={props.navigation} ></Header>

  


        </View>

        {/* GLOBAIS */}

        <LoadHome visivel={load} cor={'#1b1b1b'} tamanho={'small'} /*  */ navigation={props.navigation}  />

        {/* GLOBAIS */}
          
      </SafeAreaView>


    </>
  );
};


//REDUX
const mapStateToProps = (state) => {
  return {

    /* BLOBAIS */
    url:state.auth.url,
    /* BLOBAIS */
    id_tb_user:state.auth.id_tb_user,
    //LIVE
    id_tb_status:state.auth.id_tb_status,
    c_video:state.auth.c_video,
    id_tb_tipo:state.auth.id_tb_tipo,
    c_texto:state.auth.c_texto,
    passou:state.auth.passou,
    verifica_login:state.auth.verifica_login,
    redireciona_login:state.auth.redireciona_login,
    //LIVE
  };
};
const LoginConnect = connect(mapStateToProps, { 

  /* BLOBAIS */
  Edit_url,
  /* BLOBAIS */
  Edit_id_tb_user,

  //LIVE
  Edit_id_tb_status,
  Edit_c_video,
  Edit_id_tb_tipo,
  Edit_c_texto,
  Edit_passou,
  //LIVE

  Edit_verifica_login,
  Edit_redireciona_login,
  


  })(Teste);
  //REDUX
  
 export default LoginConnect;
