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

import { NavigationEvents } from "react-navigation";
import { openSettings, check, request, PERMISSIONS } from 'react-native-permissions';


import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
  Edit_status_promo,
  Edit_verifica_login,
  Edit_redireciona_login,
} from './Actions/LoginActions';


//GLOBAIS
import Configs from './Includes/Configs';
import Flat from './Includes/Flat';
import Erro from './Includes/Erro';
import Load from './Includes/Load';
import Header from './Includes/Header';

//GLOBAIS


PromocoesInativo.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
    <Header tipo={'PROMOÇÕES'} navigation={navigation}></Header>
  }
}





function PromocoesInativo(props) {


  function Settings(){

    props.Edit_redireciona_login('Promocoes');
    openSettings().catch(() => console.warn('cannot open settings'))
  }



function MudaStatusLocalizacao(){

  //props.Edit_verifica_login('Promocoes');
  
  //AsyncStorage.setItem("localizacao", '1');


  if(Platform.OS === 'ios'){
    request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
        console.log(result);


        if(result.toString() == 'granted'){
          props.navigation.navigate('Promocoes');
        }

        if(result.toString() == 'unvailable'){
          
          AsyncStorage.getItem("localizacao").then((value)=>{
              openSettings().catch(() => console.warn('cannot open settings'));
          });
        }
        
        if(result.toString() == 'denied'){
          AsyncStorage.getItem("localizacao").then((value)=>{
            //if(value == '1'){
              openSettings().catch(() => console.warn('cannot open settings'));
              //props.navigation.dispatch(resetActionHome);
            //}
          });
        }
        
        if(result.toString() == 'blocked'){
          AsyncStorage.getItem("localizacao").then((value)=>{
            //if(value == '1'){
              openSettings().catch(() => console.warn('cannot open settings'));
              //props.navigation.dispatch(resetActionHome);
            //}
          });
        }

    })
  }else{
    //setLoad(false);
        request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
          console.log(
            result.toString()
        );

        if(result.toString() == 'granted'){
          props.navigation.navigate('Promocoes');
        }

        if(result.toString() == 'unvailable'){
          
          AsyncStorage.getItem("localizacao").then((value)=>{
              openSettings().catch(() => console.warn('cannot open settings'));
          });
        }
        
        if(result.toString() == 'denied'){
          AsyncStorage.getItem("localizacao").then((value)=>{
            //if(value == '1'){
              openSettings().catch(() => console.warn('cannot open settings'));
              //props.navigation.dispatch(resetActionHome);
            //}
          });
        }
        
        if(result.toString() == 'blocked'){
          AsyncStorage.getItem("localizacao").then((value)=>{
            //if(value == '1'){
              openSettings().catch(() => console.warn('cannot open settings'));
              //props.navigation.dispatch(resetActionHome);
            //}
          });
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



        {
            tipo == 'local'?
       
        <View style={{alignItems:'center', justifyContent:'center', flex:1, width:"100%"}}>
            <Text style={[Estilos.TextoNaoPossivel]}>Não foi possível participar</Text>


            <Text style={[Estilos.TextoNaoPossivelInt]}>Você precisa permitir o uso da localização do seu dispositivo para participar de nossas promoções</Text>
            {
            props.status_promo == 'blocked'?

              Platform.OS === 'ios'?

              <View>
                <Text style={[Estilos.TextoNaoPossivelPassos]}>Siga os seguintes passos:{'\n'}</Text>
                <Text style={[Estilos.TextoNaoPossivelPassosBold]}>Acesse o item configurações > Audio > Permissões > Habilite o item "Localização"</Text>
              </View>
              :
              <View>
                <Text style={[Estilos.TextoNaoPossivelPassos]}>Siga os seguintes passos:{'\n'}</Text>
                <Text style={[Estilos.TextoNaoPossivelPassosBold]}>Acesse o item configurações > Aplicativos > AUDIO > Permissões > Habilite o item "Local"</Text>
              </View>

            :
            null
            }

            {
            props.status_promo == 'denied' || props.status_promo == 'blocked'?

            
            <View style={{width:"100%", alignItems:'center', justifyContent:'center'}}>
              <Text style={[Estilos.TextoNaoPossivelPassos]}>Clique no botão abaixo para permitir:{'\n'}</Text>
              <TouchableOpacity style={[Estilos.ForaBotaoNotificacaoBranco,{marginTop:Dimensions.get('window').height/40}]}
                  onPress={()=>MudaStatusLocalizacao()}>
                      <Text style={Estilos.TextoBotaoNotificao}>PERMITIR</Text>
              </TouchableOpacity>
            </View>
            :
            null
            }

       
            {
            props.status_promo == 'unvailable'?
            <View style={{width:"100%", alignItems:'center', justifyContent:'center'}}>
              <Text style={[Estilos.TextoNaoPossivelPassos]}>Seu dispositivo não permite utilização da localização{'\n'}</Text>
            </View>
            :
            null
            }
        </View>
        :
        <View style={{alignItems:'center', justifyContent:'center', flex:1, width:"100%"}}>
        <Text style={[Estilos.TextoNaoPossivel]}>Não foi possível participar</Text>


        <Text style={[Estilos.TextoNaoPossivelInt]}>Você precisa permitir o uso das notificações do seu dispositivo para participar de nossas promoções</Text>
        {
        props.status_promo == 'blocked'?

          Platform.OS === 'ios'?

          <View>
            <Text style={[Estilos.TextoNaoPossivelPassos]}>Siga os seguintes passos:{'\n'}</Text>
            <Text style={[Estilos.TextoNaoPossivelPassosBold]}>Clique em permitir e habilite o item "Notificações"</Text>
          </View>
          :
          <View>
            <Text style={[Estilos.TextoNaoPossivelPassos]}>Siga os seguintes passos:{'\n'}</Text>
            <Text style={[Estilos.TextoNaoPossivelPassosBold]}>Acesse o item configurações > Aplicativos > AUDIO > Permissões > Habilite o item "Local"</Text>
          </View>

        :
        null
        }

    
        
        <View style={{width:"100%", alignItems:'center', justifyContent:'center'}}>
          <Text style={[Estilos.TextoNaoPossivelPassos]}>Clique no botão abaixo para permitir:{'\n'}</Text>
          <TouchableOpacity style={[Estilos.ForaBotaoNotificacaoBranco,{marginTop:Dimensions.get('window').height/40}]}
              onPress={()=>{
              props.Edit_redireciona_login('Promocoes');
              openSettings().catch(() => console.warn('cannot open settings'))
              }}>
                  <Text style={Estilos.TextoBotaoNotificao}>PERMITIR</Text>
          </TouchableOpacity>
        </View>
       

   
    </View>
        }




        
     

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
    
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,
  Edit_status_promo,
  Edit_verifica_login,
  Edit_redireciona_login,

  })(PromocoesInativo);
 export default LoginConnect;