import React , { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Button,
  Modal,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';

import ImageResize from 'react-native-scalable-image';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import {NavigationActions, DrawerActions, StackActions} from 'react-navigation';
import Estilos from './EstilosGlobal';
import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
} from '../Actions/LoginActions';

Erro.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
   null
  }
}


const resetActionHome = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Promocoes' })],
});



function Erro(props) {


  const [falhax, setFalhax] = useState(props.visivel);

  useEffect(() => {
    setFalhax(props.visivel);
  },[props.visivel]);


  function Navega(pagina){
    setFalhax(false);
    setTimeout(() => {
     // props.navigation.dispatch(resetActionHome);
    //alert(pagina.toString());
     props.navigation.navigate(pagina)
    
     //setTimeout(() => {
      props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: pagina })],
      }))
     //}, 1000);
     

    

    }, 1000);
   // navigate(props.pagina);
  }

    const { navigate } = props.navigation;

    return (
        <>
        <View style={[],{backgroundColor:'#1b1b1b'}}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={falhax}
            onRequestClose={() => {
                // Alert.alert('Modal has been closed.');
            }}>
            <View style={[styles.ModalFora]}>
                <View style={[styles.BgModal, Estilos.CinzaBgClaro]}>
                        <View style={[styles.ModalDentro]}>
                          <ImageResize source={require('../../assets/alert.png')} width={Dimensions.get('window').width/7}/>
                          <Text style={[styles.TextoAtencao]}>ATENÇÃO</Text>

                          <View style={[styles.foraProblema]}>
                            <View style={[styles.esquerda]}>
                                <ImageResize source={require('../../assets/conexao.png')} width={Dimensions.get('window').width/10}/>
                            </View>
                            <View style={[styles.direita]}>
                              <Text style={[styles.TextoProblem]}>PROBLEMA NA CONEXÃO DE INTERNET.</Text>
                            </View>

                          </View>
                          <View>
                            <Text style={[styles.TextoVerifique]}>Por favor, verifique sua conexão de internet e clique em tentar novamente.</Text>
                          </View>
                          <TouchableOpacity style={[styles.BotaoFora]}  onPress={()=>Navega(props.erro_pagina)}>
                            <Text style={[styles.TextoBotao]}>TENTAR NOVAMENTE</Text>
                          </TouchableOpacity>
                       
                        </View>          
                </View>
            </View>
        </Modal>
        </View>
        </>
    );

};

const styles = StyleSheet.create({
    ModalFora:{
      flex:1, 
      flexDirection:'column', 
      alignItems:'center' , 
      justifyContent: 'center',
      backgroundColor:'rgba(0,0,0,0.50)',
    },
    BgModal:{
        width:'90%', 
        justifyContent: 'center',
        alignItems:'center',
        //backgroundColor:'#ffffff',
    },

    ModalDentro:{
      paddingTop:Dimensions.get('window').height/40,
      paddingBottom:Dimensions.get('window').height/40,
      justifyContent: 'center',
      alignItems:'center',
    },

    TextoAtencao:{
      color:'#161616', 
      fontSize: RFValue(25),
      lineHeight: RFValue(30),
      fontFamily: 'Roboto-Black',
      textAlign:'center',
      paddingTop:Dimensions.get('window').height/200
    },

    foraProblema:{  
      flexDirection:'row',
      width:(Dimensions.get('window').width/100)*80,
      backgroundColor:'#e7e7e7',
      justifyContent: 'center',
      alignItems:'center',
      marginTop:Dimensions.get('window').height/100,
    },

    esquerda:{
      padding:Dimensions.get('window').height/50,
      flex:1, 
    },

    direita:{
      padding:Dimensions.get('window').height/100,
      flex:7, 
    },
    
    TextoProblem:{
      color:'#161616', 
      fontSize: RFValue(15),
      lineHeight: RFValue(18),
      fontFamily: 'Roboto-Bold',
      textAlign:'left',
    },

    
    TextoVerifique:{
      color:'#161616', 
      fontSize: RFValue(15),
      lineHeight: RFValue(18),
      fontFamily: 'Roboto-Light',
      textAlign:'center',
      padding:Dimensions.get('window').height/40,
    },

    BotaoFora:{

      backgroundColor:'#ffc600',
    },

    TextoBotao:{
      color:'#161616', 
      fontSize: RFValue(15),
      lineHeight: RFValue(18),
      fontFamily: 'Roboto-Black',
      textAlign:'center',
      paddingTop:Dimensions.get('window').height/50,
      paddingBottom:Dimensions.get('window').height/50,
      paddingLeft:Dimensions.get('window').width/8,
      paddingRight:Dimensions.get('window').width/8,
    },


});


const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
    
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,

  })(Erro);
 export default LoginConnect;
