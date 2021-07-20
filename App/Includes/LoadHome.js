import React , { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import Estilos from './EstilosGlobal';
import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
} from '../Actions/LoginActions';
var SpinnerNew = require('react-native-spinkit');
import ImageResize from 'react-native-scalable-image';

Load.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
   null
  }
}

function Load(props) {

    const { navigate } = props.navigation;

    return (
        <>
        {
                    ( props.visivel === true )
                   ?
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                      
                      <ImageResize source={require('../../assets/logo_load_branco.png')} width={Dimensions.get('window').height/8} style={{marginBottom:Dimensions.get('window').height/50}} />
                      <SpinnerNew style={[Estilos.spinner]} isVisible={true} size={Dimensions.get('window').width/10} type={"Wave"} color={props.cor}/>
                      <Text style={[Estilos.TextoCarregando,{color:props.cor}]}>Aguarde ...</Text>
                    </View>
                    :
                    null
        }

        </>
    );
};

const styles = StyleSheet.create({
    ModalFora:{
      flex:1, 
      flexDirection:'column', 
      alignItems:'center' , 
      justifyContent: 'center'
    },
    BgModal:{
        width:'70%', height:'30%', 
        justifyContent: 'center',
        alignItems:'center',
        //backgroundColor:'#ffffff',
    },
    BotaoModal:{
        
    },
    BotaoTextoModal:{
        color:'#FFFFFF'
    },
    BotaoFora:{
       width:'70%',
        height:40,
        justifyContent: 'center',
        alignItems:'center',
    },
    TextoModalAtencao:{
        color:'#000000',
    },
    TextoModal:{
        color:'#000000'
    },    
});


const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
    
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,

  })(Load);
 export default LoginConnect;