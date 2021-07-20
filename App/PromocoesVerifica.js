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
  Platform
} from 'react-native';
import { getTrackingStatus, requestTrackingPermission } from 'react-native-tracking-transparency';
import {request, PERMISSIONS, checkNotifications} from 'react-native-permissions';
import OneSignal from 'react-native-onesignal';
import Estilos from './Estilos';
import { DrawerActions, NavigationActions, StackActions, NavigationEvents} from 'react-navigation';
import { connect } from 'react-redux';

import { 
  Edit_id_tb_user,
  Edit_verifica_promo,
  Edit_redireciona_login,
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

import PromocoesInativoLocalizacao from './PromocoesInativoLocalizacao';
import PromocoesInativoPush from './PromocoesInativoPush';
import Promocoes from './Promocoes';

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




PromocoesVerifica.navigationOptions = ({ navigation }) => {
    const { state, setParams, navigate } = navigation;
    const params = state.params || {};
    return {
      header: <Header tipo={'PROMOÇÕES'} navigation={navigation}></Header>
    }
}



function PromocoesVerifica(props) {


  //GLOBAIS
  const { navigate } = props.navigation;

  
  
  const [falha, setFalha] = useState(false);
  const [load, setLoad] = useState(true);
  const [conta, set_conta] = useState(0);
  //GLOBAIS

  useEffect(() => {
    OneSignal.init("18135e37-745a-4f35-b4e1-b923a8d09482");
    
  },[]);



  useEffect(() => {
    OneSignal.init("18135e37-745a-4f35-b4e1-b923a8d09482");
    VerificaLocal();
  },[props.verifica_promo]);





  function VerificaPush(){
    if(Platform.OS === 'ios'){
      OneSignal.promptForPushNotificationsWithUserResponse(myCallback);
    }else{

      checkNotifications().then(({status, settings}) => {
          //alert(status.toString());
          if(status == 'granted'){
            setLoad(false);
            props.Edit_verifica_promo('Promocoes'); 
          }else{
            setLoad(false);
            props.Edit_verifica_promo('PromocoesInativoPush'); 
          }
      });
  
    }
  }

  async function myCallback(permission){

    //alert(permission.toString());
    //alert(permission.toString());
    //swiper.scrollBy(1);
   // alert(permission.toString());

   

    if(permission == true){
            setLoad(false);
            props.Edit_verifica_promo('Promocoes'); 
       
    }else{
      

      setLoad(false);
      props.Edit_verifica_promo('PromocoesInativoPush'); 
      

    }
    

   // alert(permission.toString());

  }




  async function VerificaLocal(){
    const trackingStatus = await requestTrackingPermission();
    setTimeout(() => {
    
      

      if(Platform.OS === 'ios'){
        if (trackingStatus === 'authorized' || trackingStatus === 'unavailable') {
      request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(result => {
          setLoad(false);
          console.log(result);

          if(result.toString() == 'granted'){
            console.log('grantedLocalIOS');


            VerificaPush();
          // props.Edit_status_promo('granted');
  
         
        //   setTimeout(() => {
         //    setLoad(true);
         //   props.Edit_verifica_promo('PromocoesVerifica');   
           
          // alert('passou');
         //  }, 100);
    
          }

          if(result.toString() == 'unvailable'){
            console.log('unvailable');
           // props.Edit_redireciona_login('Promocoes');
           VerificaLocalPos();
          }
          
          if(result.toString() == 'denied'){
            console.log('denied');
            //props.Edit_redireciona_login('Promocoes');
            VerificaLocalPos();
          }
          
          if(result.toString() == 'blocked'){
            console.log('blocked');
           // props.Edit_redireciona_login('Promocoes');
           VerificaLocalPos();
          }
          

      })
    }
    }else{
      
      setLoad(false);
          request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
            
            setLoad(false);
            console.log(result);
  
            if(result.toString() == 'granted'){
              console.log('grantedLocalIOS');
            // props.Edit_status_promo('granted');
    
            VerificaPush();
  
             /*
             setTimeout(() => {
               setLoad(true);
              props.Edit_verifica_promo('PromocoesVerifica');   
             
            // alert('passou');
             }, 100);
             */
            }
  
            if(result.toString() == 'unvailable'){
              console.log('unvailable');
             // props.Edit_redireciona_login('Promocoes');
              props.Edit_verifica_promo('PromocoesInativoLocalizacao');   
              setLoad(false);       
            }
            
            if(result.toString() == 'denied'){
              console.log('denied');
              //props.Edit_redireciona_login('Promocoes');
              props.Edit_verifica_promo('PromocoesInativoLocalizacao');  
              setLoad(false);
            }
            
            if(result.toString() == 'blocked'){
              console.log('blocked');
             // props.Edit_redireciona_login('Promocoes');
              props.Edit_verifica_promo('PromocoesInativoLocalizacao');  
              setLoad(false);
            }
            
  

        })
    }
    }, 100);

  }





  function VerificaLocalPos(){
    setTimeout(() => {
    
      if(Platform.OS === 'ios'){
      request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
          setLoad(false);
          console.log(result);

          if(result.toString() == 'granted'){
            console.log('grantedLocalIOS');


            VerificaPush();
          // props.Edit_status_promo('granted');
  
         
        //   setTimeout(() => {
         //    setLoad(true);
         //   props.Edit_verifica_promo('PromocoesVerifica');   
           
          // alert('passou');
         //  }, 100);
    
          }

          if(result.toString() == 'unvailable'){
            console.log('unvailable');
           // props.Edit_redireciona_login('Promocoes');
            props.Edit_verifica_promo('PromocoesInativoLocalizacao');   
            setLoad(false);       
          }
          
          if(result.toString() == 'denied'){
            console.log('denied');
            //props.Edit_redireciona_login('Promocoes');
            props.Edit_verifica_promo('PromocoesInativoLocalizacao');  
            setLoad(false);
          }
          
          if(result.toString() == 'blocked'){
            console.log('blocked');
           // props.Edit_redireciona_login('Promocoes');
            props.Edit_verifica_promo('PromocoesInativoLocalizacao');  
            setLoad(false);
          }
          

      })
    }else{
      
      setLoad(false);
          request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
            
            setLoad(false);
            console.log(result);
  
            if(result.toString() == 'granted'){
              console.log('grantedLocalIOS');
            // props.Edit_status_promo('granted');
    
            VerificaPush();
  
             /*
             setTimeout(() => {
               setLoad(true);
              props.Edit_verifica_promo('PromocoesVerifica');   
             
            // alert('passou');
             }, 100);
             */
            }
  
            if(result.toString() == 'unvailable'){
              console.log('unvailable');
             // props.Edit_redireciona_login('Promocoes');
              props.Edit_verifica_promo('PromocoesInativoLocalizacao');   
              setLoad(false);       
            }
            
            if(result.toString() == 'denied'){
              console.log('denied');
              //props.Edit_redireciona_login('Promocoes');
              props.Edit_verifica_promo('PromocoesInativoLocalizacao');  
              setLoad(false);
            }
            
            if(result.toString() == 'blocked'){
              console.log('blocked');
             // props.Edit_redireciona_login('Promocoes');
              props.Edit_verifica_promo('PromocoesInativoLocalizacao');  
              setLoad(false);
            }
            
  

        })
    }
    }, 100);

  }




  


  return (
  <>
 <NavigationEvents
          onWillFocus={payload => {
            //alert('dd');
            OneSignal.init("18135e37-745a-4f35-b4e1-b923a8d09482");
            VerificaLocal();

          }}
        />
       
  {
    props.verifica_promo == 'PromocoesInativoLocalizacao'?
    <PromocoesInativoLocalizacao props={props} navigation={props.navigation}/>
    :
    null
  }

  {
    props.verifica_promo == 'PromocoesInativoPush'?
    <PromocoesInativoPush props={props} navigation={props.navigation}/>
    :
    null
  }

  {
    props.verifica_promo == 'Promocoes'?
    <Promocoes props={props} navigation={props.navigation}/>
    :
    null
  }

  <Load visivel={load} cor={'#1b1b1b'} tamanho={'small'} /*  */ navigation={props.navigation} />
  </>
  )
};


const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
    verifica_promo:state.auth.verifica_promo,
    redireciona_login:state.auth.redireciona_login,
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,
  Edit_verifica_promo,
  Edit_redireciona_login,

  })(PromocoesVerifica);
 export default LoginConnect;