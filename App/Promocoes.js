import React , { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  Platform,
  Button,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { getTrackingStatus, requestTrackingPermission } from 'react-native-tracking-transparency';
import ImageResize from 'react-native-scalable-image';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import FlashMessage from "react-native-flash-message";
import { NavigationEvents } from "react-navigation";
import {request, PERMISSIONS} from 'react-native-permissions';
import {NavigationApps,actions,googleMapsTravelModes, mapsTravelModes} from "react-native-navigation-apps";
import Estilos from './Includes/EstilosGlobal';
import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
  Edit_verifica_login,
  Edit_redireciona_login,
  Edit_promo_local,
} from './Actions/LoginActions';


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

//GLOBAIS
import Configs from './Includes/Configs';
import Flat from './Includes/Flat';
import Erro from './Includes/Erro';
import Load from './Includes/Load';
import Header from './Includes/Header';
import Geolocation from 'react-native-geolocation-service';
//GLOBAIS


Promocoes.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
    <Header tipo={'PROMOÇÕES'} navigation={navigation}></Header>
  }
}


function Promocoes(props) {


  //GLOBAIS
  const { navigate } = props.navigation;

  
  
  const [falha, setFalha] = useState(false);
  const [load, setLoad] = useState(false);
  //GLOBAIS

  const [ativo, setAtivo] = useState(false);
  const [resultado, setresultado] = useState('');
  const [mensagem, setmensagem] = useState('');

  //LOCALIZACAO
  const [latitude, set_latitude] = useState('');
  const [longitude, set_longitude] = useState('');
  const [location, set_location] = useState('');
  const [modal, set_modal] = useState(false);
  //LOCALIZACAO

  //LOCALIZACAO
  const [p_id_tb_promo, set_p_id_tb_promo] = useState('');
  const [p_titulo, set_p_titulo] = useState('');
  const [p_texto, set_p_texto] = useState('');
  const [p_regra, set_p_regra] = useState('');
  const [p_extensao1, set_p_extensao1] = useState('');
  //LOCALIZACAO
  

  function AbrePromocao(id, titulo,texto, c_extensao1, c_regra){
   

      set_p_id_tb_promo(id);
      set_p_titulo(titulo);
      set_p_texto(texto);
      set_p_regra(c_regra);
      set_p_extensao1(c_extensao1);


      set_modal(true);
   }
   -23.6074241,-46.6415261

  VerificaDistancia = () => {

    function getDistanceFromLatLonInKm(position1, position2) {
      "use strict";
      var deg2rad = function (deg) { return deg * (Math.PI / 180); },
          R = 6371,
          dLat = deg2rad(position2.lat - position1.lat),
          dLng = deg2rad(position2.lng - position1.lng),
          a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
              + Math.cos(deg2rad(position1.lat))
              * Math.cos(deg2rad(position1.lat))
              * Math.sin(dLng / 2) * Math.sin(dLng / 2),
          c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return ((R * c *1000).toFixed());
    }
    // -23.6073503,-46.6417305
    -23.0411824,-49.1661462
    var distancia = (getDistanceFromLatLonInKm(
      {lat: -23.6073515, lng: -46.6437824}, // LOCAL FIXO / LAB3
    //  {lat: -23.563945, lng: -46.522258}, // LOCAL FIXO / SOUSA BRASIL 
   // {lat: -23.565048, lng: -46.520723}, // LOCAL FIXO / JULIO CESAR PORTO
   // {lat: -23.558901, lng: -46.504567}, // LOCAL FIXO / DOMENICO BERNABEI
      {lat: `${latitude}`, lng: `${longitude}`}
    ));

    if(distancia <= 200){
      //TextoParticipacao = "PARTICIPAÇÃO PERMITIDA";
     // alert('PARTICIPAÇÃO PERMITIDA');

      ListaDados(
        'promocoes_local.php', //url
      )
  
      .then(tb_promo => {


        setLoad(false);
          console.log('kkkkk');
    //    alert(props.passou);
          //alert(tb_live[0].id_tb_live+'xxx');
          let p_status = tb_promo[0].id_tb_tipo;
          if(p_status == 1){
            //alert('tem');
/*
            set_p_id_tb_promo(tb_promo[0].id_tb_promo);
            set_p_titulo(tb_promo[0].c_titulo);
            set_p_texto(tb_promo[0].c_texto);
            set_p_regra(tb_promo[0].c_regra);
            set_p_extensao1(tb_promo[0].c_extensao1);
*/
            //alert(props.promo_local.toString())
            if(props.promo_local === false){
              
             
              AbrePromocao(
                tb_promo[0].id_tb_promo,
                tb_promo[0].c_titulo,
                tb_promo[0].c_texto,
                tb_promo[0].c_extensao1,
                tb_promo[0].c_regra,




              )
             // props.Edit_promo_local(true);
            }
              
      
          }else{
            alert('nao tem');
          }

  
  
        }
      )
      .catch(err => {
        //alert(err.toString())
  
      });



    } else {
     // TextoParticipacao = "PARTICIPAÇÃO NEGADA";
     // alert('PARTICIPAÇÃO NEGADA');
    }

   
}


  async function getLocation(){
      Geolocation.getCurrentPosition(
          (position) => {
              console.log(position);
              //props.Edit_promo_local(false);
              set_latitude(position.coords.latitude);
              set_longitude(position.coords.longitude);
              set_location(position);


              VerificaDistancia();
          },
          (error) => {
              // See error code charts below.
              console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
  }


  

  useEffect(() => {
   // if(props.promo_local === false){
      //getLocation();
     // props.Edit_promo_local(true);
   // }
   getLocation();
  },[]);


    

  
    return (
    <>
    <SafeAreaView style={[{flex:1}]}>




<View style={[],{backgroundColor:'#1b1b1b'}}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={() => {
                // Alert.alert('Modal has been closed.');
            }}>
            <View style={[styles.ModalFora]}>
                <View style={[styles.BgModal, Estilos.CinzaBgClaro]}>
                        <View style={[styles.ModalDentro]}>
                          <ImageResize source={require('../assets/icone_localicacao.png')} width={Dimensions.get('window').width/3} style={{marginBottom:Dimensions.get('window').height/40}}/>
                          <Text style={[styles.TextoAtencao]}>NOS ENCONTRAMOS!</Text>

                          <View style={[styles.foraProblema]}>
                         
                          </View>
                          <View>
                            <Text style={[styles.TextoVerifique]}>ESTA PROMOÇÃO É EXCLUSIVA PARA 
                              VOCÊ QUE ESTÁ NA AUDIO!</Text>
                          </View>


                          <TouchableOpacity style={[styles.BotaoFora]}  onPress={()=>{
                            set_modal(false);
                            setTimeout(() => {
                              set_modal(false);
                              if(props.id_tb_user==null || props.id_tb_user==0 || props.id_tb_user==''){
                                props.Edit_redireciona_login('Promocoes');
                                props.Edit_verifica_login('LoginInicio');
                                props.navigation.navigate('LoginVerifica',{
                                  mensagem:'Cadastre-se ou faça login para participar de nossas promoções.',
                                  retorno:'Promocoes',
                                })
                              }else{


                                props.Edit_verifica_login('CadastroEdit');
                                props.navigation.navigate('PromocoesInterna',{
                                  id_tb_promo:p_id_tb_promo,
                                  c_titulo:p_titulo,
                                  c_texto:p_texto,
                                  c_regra:p_regra,
                                  c_extensao1:p_extensao1,
                                })
                          
                              }
              
                          }, 100);
                          }}>
                            <Text style={[styles.TextoBotao]}>PARTICIPAR</Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={()=>{
                            set_modal(false);
                            props.Edit_promo_local(true);
                          }} style={[,{marginTop:Dimensions.get('window').height/20, height:Dimensions.get('window').height/15}]}>
                            <Text style={Estilos.TextoJaPossuo} keyboardShouldPersistTaps={'handled'}>Não tenho interesse</Text>
                         </TouchableOpacity>
                       
                        </View>          
                </View>
            </View>
        </Modal>
</View>
    <NavigationEvents
          onWillFocus={payload => {
           // alert(props.redireciona_login);
           
            getLocation();
          }}
        />


        

        {load == false ?
          <View style={{flex:1,}}>
          {/*
          <Button title="geo" onPress={()=>getLocation()}/>
          <Text>{latitude}</Text>
          */}
          <Flat 
            
            url={'promocoes.php'} 
            colunas={1} 
            include={'ItensPromocoes'} 
            cor_carregando={'#000000'} 
            cor_carregando_baixo={'#1b1b1b'} 
            navigation={props.navigation} 
            style={{zIndex:1, }} backgroundColor={'#FFFFFF'}
            parametros={''}
            erro_pagina={'Promocoes'}
          />
      </View>
          : 
          <Load visivel={load} cor={'#000000'} tamanho={'small'} /*  */ navigation={props.navigation} />
          }

        {/* GLOBAIS */}
  
      
        {/* GLOBAIS */}
          
      </SafeAreaView>
       
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
    paddingTop:Dimensions.get('window').height/20,
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
    marginTop:Dimensions.get('window').height/200,
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

    backgroundColor:'#000000',
    width:Dimensions.get('window').width/100*80,

  },

  TextoBotao:{
    color:'#FFF', 
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
    verifica_login:state.auth.verifica_login,
    redireciona_login:state.auth.redireciona_login,
    promo_local:state.auth.promo_local,
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,
  Edit_verifica_login,
  Edit_redireciona_login,
  Edit_promo_local,

  })(Promocoes);
 export default LoginConnect;