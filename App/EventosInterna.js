import React , { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Modal,
  Dimensions,
} from 'react-native';
import Estilos from './Estilos';

//GLOBAIS
import Configs from './Includes/Configs';
import Flat from './Includes/Flat';
import Erro from './Includes/Erro';
import Load from './Includes/Load';
//GLOBAIS

//REDUX
import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
  Edit_url,
} from './Actions/LoginActions';
//REDUX

//FUNCOES
import { 
  //GLOBAIS
  ListaDados,
  PostaDados,
  Testelala,
  //GLOBAIS

  //LOCAIS

  //LOCAIS
}
//FUNCOES
from './Includes/Funcoes';

EventosInterna.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    headerTitle: 
    <View>
      <Text style={[Estilos.TituloEventoInterno]}>{navigation.getParam('titulo', 'NO-ID')}</Text>
    </View>
    ,
    headerTitleStyle: {color:'#FFFFFF'},
    headerStyle: {backgroundColor:'#1b1b1b',borderBottomWidth: 0,  height:Dimensions.get('window').height/14,},
    headerTintColor: '#FFFFFF',
  }
}



function EventosInterna(props) {



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
    //alert(props.navigation.getParam('id_tb_galeria'));
  },[]);
  

  return (
    <>
      <SafeAreaView style={[Estilos.PretoBg, {flex:1}]}>
        
        <View style={{flex:1, backgroundColor:'#1b1b1b'}}>
        <Flat 
        url={'eventos_interna.php?id_tb_galeria='+props.navigation.getParam('id_tb_galeria', 'NO-ID')} parametros={'&id_tb_galeria='+props.navigation.getParam('id_tb_galeria')} 
        colunas={1} 
        include={'ItensEventosInterna'} 
        cor_carregando={'#FFFFFF'}  
        navigation={props.navigation}
        erro_pagina={'Eventos'}
         />
        </View>

        {/* GLOBAIS */}

        <Load visivel={load} cor={'#FFFFFF'} tamanho={'small'} /*  */ navigation={props.navigation} />
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
    
  };
};
const LoginConnect = connect(mapStateToProps, { 

  /* BLOBAIS */
  Edit_url,
  /* BLOBAIS */
  Edit_id_tb_user,


  })(EventosInterna);
  //REDUX
  
 export default LoginConnect;
