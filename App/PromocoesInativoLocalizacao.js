import React , { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  Platform,
  Button,
  TouchableOpacity,
  Dimensions,
  Alert,
  AsyncStorage,
} from 'react-native';
import Estilos from './Estilos';

import { DrawerActions, NavigationActions, StackActions, NavigationEvents } from "react-navigation";
import { openSettings, check, request, PERMISSIONS } from 'react-native-permissions';


import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
  Edit_status_promo,
  Edit_verifica_login,
  Edit_redireciona_login,
  Edit_verifica_promo,
} from './Actions/LoginActions';


//GLOBAIS
import Configs from './Includes/Configs';
import Flat from './Includes/Flat';
import Erro from './Includes/Erro';
import Load from './Includes/Load';
import Header from './Includes/Header';

//GLOBAIS


PromocoesInativoLocalizacao.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
    <Header tipo={'PROMOÇÕES'} navigation={navigation}></Header>
  }
}





function PromocoesInativoLocalizacao(props) {
 
 
useEffect(() => {

    let myInterval = setInterval(() => {
      
      if(Platform.OS === 'ios'){
        request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(result => {
          setLoad(false);
          console.log(result);

          if(result.toString() == 'granted'){
            clearInterval(myInterval);
              
            props.Edit_verifica_promo('Promocoes');
            props.navigation.navigate('PromocoesVerifica');     
            setTimeout(() => {
              props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'PromocoesVerifica' })],
              }))
            }, 100);
     
            
    
          }

          

      })
      }else{
        //setLoad(false);
        check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
              console.log(
                result.toString()
            );
    
            if(result.toString() == 'granted'){
  
              clearInterval(myInterval);
              
              props.Edit_verifica_promo('Promocoes');
              props.navigation.navigate('PromocoesVerifica');     
              setTimeout(() => {
                props.navigation.dispatch(StackActions.reset({
                  index: 0,
                  actions: [NavigationActions.navigate({ routeName: 'PromocoesVerifica' })],
                }))
              }, 100);
       
              
           
            }
    
            if(result.toString() == 'unvailable'){
           
            }
            
            if(result.toString() == 'denied'){
            
            }
            
            if(result.toString() == 'blocked'){
             
            }
    
          })
        }
  

    }, 2000);   


  

  
},[]);




  function Settings(){

    props.Edit_redireciona_login('Promocoes');
    openSettings().catch(() => console.warn('cannot open settings'))
  }

  

  function VerificaStatusLocalizacao(){

   
 
    
 
}



function MudaStatusLocalizacao(){

  //props.Edit_verifica_login('Promocoes');
  
  //AsyncStorage.setItem("localizacao", '1');



  props.navigation.navigate('PromocoesVerifica');     
  /*
  setTimeout(() => {
    props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'PromocoesVerifica' })],
    }))
  }, 100);
  */
  



  if(Platform.OS === 'ios'){
    request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
        console.log(result);


        if(result.toString() == 'granted'){
         // props.navigation.navigate('');
        }

        if(result.toString() == 'unvailable'){
          props.Edit_redireciona_login('Promocoes');
          openSettings().catch(() => console.warn('cannot open settings'));
          props.navigation.navigate('PromocoesVerifica');  

        }
        
        if(result.toString() == 'denied'){
          props.Edit_redireciona_login('Promocoes');
          openSettings().catch(() => console.warn('cannot open settings'));
          props.navigation.navigate('PromocoesVerifica');  

        }
        
        if(result.toString() == 'blocked'){
          props.Edit_redireciona_login('Promocoes');
          openSettings().catch(() => console.warn('cannot open settings'));
          props.navigation.navigate('PromocoesVerifica');  

        }

    })
  }else{
    //setLoad(false);
        request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
          console.log(result.toString());

          if(result.toString() == 'granted'){
            // props.navigation.navigate('');
           }
   
           if(result.toString() == 'unvailable'){
             props.Edit_redireciona_login('Promocoes');
             openSettings().catch(() => console.warn('cannot open settings'));
             props.navigation.navigate('PromocoesVerifica');  
   
           }
           
           if(result.toString() == 'denied'){
             props.Edit_redireciona_login('Promocoes');
             openSettings().catch(() => console.warn('cannot open settings'));
             props.navigation.navigate('PromocoesVerifica');  
   
           }
           
           if(result.toString() == 'blocked'){
             props.Edit_redireciona_login('Promocoes');
             openSettings().catch(() => console.warn('cannot open settings'));
             props.navigation.navigate('PromocoesVerifica');  
   
           }
   
 

      })
    }

    
}

  const { navigation } = props;
  //GLOBAIS
  const { navigate } = props.navigation;

  
  
  const [falha, setFalha] = useState(false);
  const [load, setLoad] = useState(false);
  //GLOBAIS

  const [ativo, setAtivo] = useState(false);
  const [resultado, setresultado] = useState('');


      

  const [tipo, settipo] = useState([props.navigation.getParam('tipo')]);
  //const [mensagem, setmensagem] = useState([props.navigation.getParam('tipo')]);


    return (
      
    <>
        <SafeAreaView style={[{flex:1, alignItems:'center', justifyContent:'center'}]}>
          <NavigationEvents
             onWillFocus={payload => {
            
       
             }}
                  />




        <View style={{alignItems:'center', justifyContent:'center', flex:1, width:"100%"}}>
            <Text style={[Estilos.TextoNaoPossivel]}>Não foi possível participar</Text>


            <Text style={[Estilos.TextoNaoPossivelInt]}>Você precisa permitir o uso da localização do seu dispositivo para participar de nossas promoções</Text>
            
          
            
            <View style={{width:"100%", alignItems:'center', justifyContent:'center'}}>
              <Text style={[Estilos.TextoNaoPossivelPassos]}>Clique no botão abaixo para permitir:{'\n'}</Text>
              <TouchableOpacity style={[Estilos.ForaBotaoNotificacaoBranco,{marginTop:Dimensions.get('window').height/40}]}
                  onPress={()=>MudaStatusLocalizacao()}>
                      <Text style={Estilos.TextoBotaoNotificao}>PERMITIR</Text>
              </TouchableOpacity>
            </View>
          
        
         
        </View>
        




        
     

        {/* GLOBAIS */}

        <Load visivel={load} cor={'#1b1b1b'} tamanho={'small'} /*  */ navigation={props.navigation} />
        {/* GLOBAIS */}


       </SafeAreaView>
    </>
    );
};


const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
    status_promo:state.auth.status_promo,
    verifica_login:state.auth.verifica_login,
    redireciona_login:state.auth.redireciona_login,
    verifica_promo:state.auth.verifica_promo,
    
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,
  Edit_status_promo,
  Edit_verifica_login,
  Edit_redireciona_login,
  Edit_verifica_promo,

  })(PromocoesInativoLocalizacao);
 export default LoginConnect;