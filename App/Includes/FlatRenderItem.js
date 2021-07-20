import React , { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from 'react-native';
import Estilos from '../Estilos';
import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
} from '../Actions/LoginActions';

//GLOBAIS
import Erro from './Erro';
import Load from './Load';
//GLOBAIS

FlatRenderItem.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
   null
  }
}



//FlatItens
import ItensHome from '../ItensHome';
import ItensEventos from '../ItensEventos';
import ItensEventosInterna from '../ItensEventosInterna';
import ItensPromocoes from '../ItensPromocoes';
import ItensBusca from '../ItensBusca';



function FlatRenderItem(props) {

    //GLOBAIS
    const { navigate } = props.navigation;

    useEffect(() => {
           
    },[]);


    switch(props.include) {

      case 'ItensHome':
        return (
      <>
            <ItensHome item={props.item} parametros={props.parametros} index={props.index}  key={props.index} navigation={props.navigation} adicional={props.adicional}/>
      </>);

      case 'ItensBusca':
        return (
      <>
            <ItensBusca item={props.item} parametros={props.parametros} index={props.index}  key={props.index} navigation={props.navigation} adicional={props.adicional}/>
      </>);

      case 'ItensPromocoes':
        return (
      <>
            <ItensPromocoes item={props.item} parametros={props.parametros} index={props.index}  key={props.index} navigation={props.navigation} adicional={props.adicional}/>
      </>);

      case 'ItensEventosInterna':
        return (
      <>
            <ItensEventosInterna item={props.item} parametros={props.parametros} index={props.index}  key={props.index} navigation={props.navigation}/>
      </>);

      case 'ItensEventos':
        return (
            <ItensEventos item={props.item} parametros={props.parametros} index={props.index} key={props.index} navigation={props.navigation}/>
      );




      }

      
      
};


const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
    
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,

  })(FlatRenderItem);
  export default React.memo(LoginConnect);