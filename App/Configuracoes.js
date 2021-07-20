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
  Switch,
} from 'react-native';
import { getTrackingStatus, requestTrackingPermission } from 'react-native-tracking-transparency';
import Estilos from './Estilos';
import OneSignal from 'react-native-onesignal';
import { openSettings, check, request, PERMISSIONS} from 'react-native-permissions';
import { DrawerActions, NavigationActions, StackActions, NavigationEvents} from 'react-navigation';
import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
  Edit_c_nome,
  Edit_c_email,
  Edit_c_telefone,
  Edit_verifica_login,
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



Configuracoes.navigationOptions = ({ navigation  }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
   <Header tipo={'CONFIGURACOES'} navigation={navigation}></Header>
  }
}











function Configuracoes(props) {




useEffect(() => {

  let myInterval = setInterval(() => {
    
      


      set_res(VerificaStatusPush());
      set_reslocalizacao(VerificaStatusLocalizacao());





    if(Platform.OS === 'ios'){
    
    }else{
      let status = "";
      OneSignal.getPermissionSubscriptionState((subscriptionState) => {
          status = JSON.parse(subscriptionState.subscriptionEnabled, null, 2);
      //alert(status);
      set_res(status);
        
      }); 
    }




  }, 2000);   


},[]);
  




const [res, set_res] = useState(VerificaStatusPush());
const [reslocalizacao, set_reslocalizacao] = useState(VerificaStatusLocalizacao());




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



function MudaStatusPush(res){


  if(res == true)
  {
    //Perform any task here which you want to execute on Switch ON event.
    //Alert.alert("Switch is On.");



    openSettings().catch(() => console.warn('cannot open settings'));
    OneSignal.setSubscription(true);
    set_res(true);
  }
  else{
    //Perform any task here which you want to execute on Switch OFF event.
    //Alert.alert("Switch is Off.");

    openSettings().catch(() => console.warn('cannot open settings'));
    OneSignal.setSubscription(false);
    set_res(false);
  }
}

function VerificaStatusPush(){


  if(Platform.OS === 'ios'){
    OneSignal.promptForPushNotificationsWithUserResponse(myCallback);
  }else{
    let status = "";
    OneSignal.getPermissionSubscriptionState((subscriptionState) => {
        status = JSON.parse(subscriptionState.subscriptionEnabled, null, 2);
    //alert(status);
    set_res(status);
      
    }); 
  }
}



async function myCallback(permission){


  //alert(permission.toString())
    //alert('dd');
    //alert(permission.toString());
    //swiper.scrollBy(1);
   // alert(permission.toString());
  
    if(permission == true){
      set_res(true);
  
    }else{
      setTimeout(() => {
        set_res(false);
      }, 200);
      
      
    }
  }
  



  function MudaStatusLocalizacao(valor){

  



  if(Platform.OS === 'ios'){
    request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(result => {
       // setLoad(false);
        console.log(result);

        if(valor === true){
        if(result.toString() == 'granted'){
          props.Edit_redireciona_login('');
          set_reslocalizacao(true);
        }
        }else{

          openSettings().catch(() => console.warn('cannot open settings'));
        }



        if(result.toString() == 'unvailable'){

          openSettings().catch(() => console.warn('cannot open settings'));
            
          
        }
        
        if(result.toString() == 'denied'){

              openSettings().catch(() => console.warn('cannot open settings'));   
        }
        
        if(result.toString() == 'blocked'){

              openSettings().catch(() => console.warn('cannot open settings'));
        }

    })
  }else{
    //setLoad(false);
        request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
         // setLoad(false);
         console.log(result);

         if(valor === true){
         if(result.toString() == 'granted'){
           set_reslocalizacao(true);
         }
         }else{

           openSettings().catch(() => console.warn('cannot open settings'));
         }
         if(result.toString() == 'unvailable'){
           openSettings().catch(() => console.warn('cannot open settings'));
         }
         
         if(result.toString() == 'denied'){
               openSettings().catch(() => console.warn('cannot open settings'));   
         }
         
         if(result.toString() == 'blocked'){
               openSettings().catch(() => console.warn('cannot open settings'));
         }

      })
    }

    
}



async function VerificaStatusLocalizacao(){
  

    const trackingStatus = await requestTrackingPermission();

    if(Platform.OS === 'ios'){
      if (trackingStatus === 'authorized' || trackingStatus === 'unavailable') {
      request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(result => {
         // setLoad(false);
          console.log(result);
  
  
          if(result.toString() == 'granted'){
           set_reslocalizacao(true);
          }
  
          if(result.toString() == 'unvailable'){
            VerificaStatusLocalizacaoPos();
          } 
          
          if(result.toString() == 'denied'){
            VerificaStatusLocalizacaoPos();    
          }
          
          if(result.toString() == 'blocked'){
            VerificaStatusLocalizacaoPos();  
          }
  
      })
    }
    }else{
      //setLoad(false);
      request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
            console.log(
              result.toString()
          );
  
          if(result.toString() == 'granted'){
            set_reslocalizacao(true);
          }
  
          if(result.toString() == 'unvailable'){
            set_reslocalizacao(false);         
          }
          
          if(result.toString() == 'denied'){
            set_reslocalizacao(false);   
          }
          
          if(result.toString() == 'blocked'){
            set_reslocalizacao(false);   
          }
  
        })
      }
  
 
}

function VerificaStatusLocalizacaoPos(){
  

    if(Platform.OS === 'ios'){
      request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
         // setLoad(false);
          console.log(result);
  
  
          if(result.toString() == 'granted'){
           set_reslocalizacao(true);
          }
  
          if(result.toString() == 'unvailable'){
            set_reslocalizacao(false);     
          } 
          
          if(result.toString() == 'denied'){
            set_reslocalizacao(false);     
          }
          
          if(result.toString() == 'blocked'){
            set_reslocalizacao(false);     
          }
  
      })
    }
  
 
}

  



    return (
    <>
         <SafeAreaView style={[{flex:1}]}>

                     <View style={{alignItems:'center', paddingTop:Dimensions.get('window').height/40,}} keyboardShouldPersistTaps={'handled'}>
                   
 
                   <View style={{flexDirection:'row', width:'90%', paddingTop:10, paddingBottom:10}}>
                     <View style={{justifyContent:'center', alignItems:'flex-start', flex:1}}><Text style={[Estilos.LabelCampo,{textAlign:'left'}]}>Notificações</Text></View>
                     <View style={{justifyContent:'center', flex:1, alignItems:'flex-end'}}>
 
                       
                     <Switch
                     onValueChange={(value) => MudaStatusPush(value)}
                     style={{justifyContent:'flex-end', alignItems:'flex-end'}}
                     value={res}
                     onTintColor='#999999'
                   // tintColor='#1a53ae'
                     thumbTintColor='#000000'
                     />  
 
                     
                     </View>
                   </View>
                 
   
 
                   <View style={{flexDirection:'row', width:'90%', paddingTop:10, paddingBottom:10}}>
                     <View style={{justifyContent:'center', alignItems:'flex-start', flex:1}}><Text style={[Estilos.LabelCampo,{textAlign:'left'}]}>Localização</Text></View>
                     <View style={{justifyContent:'center', flex:1, alignItems:'flex-end'}}>
                     <Switch
                     onValueChange={(value) => MudaStatusLocalizacao(value)}
                     style={{justifyContent:'flex-end', alignItems:'flex-end'}}
                     value={reslocalizacao}
                     onTintColor='#999999'
                   // tintColor='#1a53ae'
                     thumbTintColor='#000000'
                     />  
                     </View>
                   </View>
 
 
               
               

   
                 </View>
                     
 
        
     

   

          </SafeAreaView>
    </>
    )
};



const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
    c_nome:state.auth.c_nome,
    c_email:state.auth.c_email,
    c_telefone:state.auth.c_telefone,
    verifica_login:state.auth.verifica_login,
    redireciona_login:state.auth.redireciona_login,

    
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,
  Edit_c_nome,
  Edit_c_email,
  Edit_c_telefone,
  Edit_verifica_login,
  Edit_redireciona_login,


  })(Configuracoes);
 export default LoginConnect;