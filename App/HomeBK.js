
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


  Edit_passou_vinheta,


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

Home.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
   null
  }
}

function Home(props) {
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
    StatusBar.setHidden(false);
      //setInterval(() => {
        //VerificaLive();
      //}, 10000);
  },[]);

  useEffect(() => {
   
    OneSignal.init("18135e37-745a-4f35-b4e1-b923a8d09482");
    OneSignal.setLocationShared(true);
    OneSignal.inFocusDisplaying(2);
    OneSignal.enableVibrate(true);
      OneSignal.addEventListener('received', onReceived);
      OneSignal.addEventListener('opened', onOpened);
      OneSignal.addEventListener('ids', onIds);
  }, []);


  function onReceived(notification) {
    console.log("Notification received: ", notification);
  }




  function onOpened(openResult) {

    let tipo = openResult.notification.payload.additionalData.tipo;
      if(tipo == 'programacao'){

      let passa_valor = openResult.notification.payload.additionalData;
      props.navigation.navigate('Home');
      props.navigation.navigate('ProgramacaoInterna',{
        item:passa_valor
      })

    }else if(tipo == 'ganhador'){
      
      let id = openResult.notification.payload.additionalData.id_tb_promo;
      let titulo = openResult.notification.payload.additionalData.c_titulo;
      let texto = openResult.notification.payload.additionalData.c_texto;
      let ganhador = openResult.notification.payload.additionalData.c_ganhador;
      let c_extensao1 = openResult.notification.payload.additionalData.c_extensao1;

      props.navigation.navigate('PromocoesGanhador',{
        tipo:'ganhador',
        id_tb_promo:id,
        c_titulo:titulo,
        c_texto:texto,
        c_ganhador:ganhador,
        c_extensao1:c_extensao1,
      })

    }else if(tipo == 'promocao'){
      let id = openResult.notification.payload.additionalData.id_tb_promo;
      let titulo = openResult.notification.payload.additionalData.c_titulo;
      let texto = openResult.notification.payload.additionalData.c_texto;
      let c_extensao1 = openResult.notification.payload.additionalData.c_extensao1;

      if(props.id_tb_user==null || props.id_tb_user==0 || props.id_tb_user==''){
   
        props.Edit_redireciona_login('Promocoes');
        props.Edit_verifica_login('LoginInicio');
        props.navigation.navigate('LoginVerifica',{
        mensagem:'Cadastre-se ou faça login para participar de nossas promoções.',
        })
      
      }else{
     
        //props.navigation.navigate('Promocoes');
        props.navigation.navigate('PromocoesVerifica',{
          tipo:'push',
          id_tb_promo:id,
          c_titulo:titulo,
          c_texto:texto,
          c_extensao1:c_extensao1,
        })
      }

//alert('gg');
    }else if(tipo == 'aniversario'){
    }else if(tipo == 'live'){
      if(props.id_tb_user==null || props.id_tb_user==0 || props.id_tb_user==''){
        props.navigation.navigate('Home');
      }else{
        //props.navigation.navigate('Promocoes');
        props.navigation.navigate('Live');
      }
    }

  }

  function onIds(device) {
    console.log('Device info: ', device);
  }

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    VerificaLive();
    var self = this;
    setInterval(() => {

      if(props.passou == 'nao'){
      VerificaLive();
      }
      setSeconds(seconds => seconds + 1);

    }, 60000); 



  }, []);


function VerificaLive(teste){
    LerTXT(
      'https://audiosp.com.br/upload/live.txt'
    ).then(tb_live => {
      //console.log(tb_live);

      if(tb_live == 1){
        ListaDados(
          'live.php', //url
        )
        .then(tb_live => {
      //    alert(props.passou);
            //alert(tb_live[0].id_tb_live+'xxx');
            let p_status = tb_live[0].id_tb_status;
            let p_video = tb_live[0].c_video;
            let p_id_tb_tipo = tb_live[0].id_tb_tipo;
            let p_texto = tb_live[0].c_texto;
            if(p_status == 1){
              props.Edit_passou('sim');
              props.Edit_id_tb_status(1);
              props.Edit_c_video(p_video);
              props.Edit_id_tb_tipo(p_id_tb_tipo);
              props.Edit_c_texto(p_texto);
              if(username.current.props.value == 'nao'){               
                setTimeout(() => {
                 props.navigation.navigate('Home');
                }, 200);
              }
            }else{
              props.Edit_id_tb_status(0);
              props.Edit_c_video('');
              props.Edit_id_tb_tipo(0);
              props.Edit_c_texto('');
              //props.navigation.navigate('Home');

            }
  
          }
        )
        .catch(err => {
  
        });
      }

    }
  )
  .catch(err => {

  });

}


  return (
    <>
      { passou_vinheta === false?
    
      <SafeAreaView style={[Estilos.PretoBg, {flex:1}]}>
      <StatusBar backgroundColor="#1d1d1d" barStyle="light-content" />
      <NavigationEvents
          onWillFocus={payload => {
         
          }}
        />
       
        <View style={{flex:1, }}>

          <Header tipo={'HOME'} navigation={props.navigation} ></Header>
          
          <Flat 
            url={'programacao.php'} 
            colunas={1} 
            include={'ItensHome'} 
            cor_carregando={'#FFFFFF'} 
            cor_carregando_baixo={'#1b1b1b'} 
            navigation={props.navigation} 
            adicional={'banner.php'} 
            style={{zIndex:1}} backgroundColor={'#FFFFFF'}
            margem={true}
            parametros={''}
            erro_pagina={'Home'}
            removeClippedSubviews={false}

          />
  
          {/* 
          <Button title="TESTE" onPress={()=>props.navigation.navigate('PromocaoGanhador')}></Button>
          */}
          
          {/* MANTER */}
          <TextInput ref={username} placeholder='Username' autoCapitalize='none' value={props.passou} style={{position:'absolute', top:-1000, color: '#FFFFFF'}}/>
          {/* MANTER */}

        </View>

        {/* GLOBAIS */}

        <LoadHome visivel={load} cor={'#1b1b1b'} tamanho={'small'} /*  */ navigation={props.navigation}  />

        {/* GLOBAIS */}
          
      </SafeAreaView>
    :
        null
    }

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
    passou_vinheta:state.auth.passou_vinheta,
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
  
  //VINHETA

  Edit_passou_vinheta,
  


  })(Home);
  //REDUX
  
 export default LoginConnect;
