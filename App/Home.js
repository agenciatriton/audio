
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
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Estilos from './Estilos';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
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

  Edit_busca,

  Edit_id_tb_status_banner,
  Edit_c_texto1_banner,
  Edit_c_texto2_banner,
  Edit_c_texto3_banner,


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
    header:null,
    tabBarVisible:false,
  }
}

function Home(props) {
  const username = useRef(null);

  
  //GLOBAIS
  const { navigate } = props.navigation;

  
  const [falha, setFalha] = useState(false);
  const [load, setLoad] = useState(false);


  //GLOBAIS


  const [statusAviso, set_statusAviso] = useState(false);

  
  //LOCAIS
  const [tb_categoria, setCategoria] = useState([]);
  //LOCAIS

  //DIDMOUNT
  useEffect(() => {


    if(props.id_tb_status_banner== 1){
      set_statusAviso(true);
    
    }



    console.log(Dimensions.get('window').height/8+'tttt')
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
    //OneSignal.promptLocation();
    //OneSignal.registerForPushNotifications();

  
      //NOTIFICAÇÕES


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

        props.navigation.navigate('Live');

      }
    }

    

    



    
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  function onIds(device) {
    console.log('Device info: ', device);
  }

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    //VerificaLive();
    var self = this;
    setInterval(() => {

      if(props.passou == 'nao'){
     // VerificaLive();
      }


      setSeconds(seconds => seconds + 1);
      //console.log(self.seconds);
      //console.log(username.current.props.value);
      
   //  Alert.alert("xxx" + seconds.toString());
    }, 60000); 
  //  return () => clearInterval(interval);


  }, []);








function VerificaLive(){
    
    
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
               //  props.navigation.navigate('Home');
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
          //alert(err.toString())
  
        });
      }

      //alert(tb_live.toString());

    }
  )
  .catch(err => {
    //alert(err.toString())

  });
/*
  setTimeout(() => {
    VerificaLive();
  }, 10000);
*/
}


  return (
    <>
      <SafeAreaView style={[Estilos.PretoBg, {flex:1}]}>
      <StatusBar backgroundColor="#1d1d1d" barStyle="light-content" />
      <Modal
            animationType="slide"
            transparent={true}
            visible={statusAviso}
            onRequestClose={() => {
                // Alert.alert('Modal has been closed.');
            }}>
            <View style={[styles.ModalFora]}>
                <View style={[styles.BgModal, Estilos.CinzaBgClaro]}>
                     
                     
                        <View style={{backgroundColor:"#222222", width:"100%", }}>
                          <Text style={[styles.TextoAtencao, {color:"#FFFFFF", margin:5}]}>ATENÇÃO</Text>
                        </View>          

                   <View style={{backgroundColor:"#FFFFFF", width:"100%", padding:15, justifyContent:"center", alignItems:'center'}}>

          <Text style={[styles.TextoAtencao2, {color:"#000000"}]}>{props.c_texto1_banner}</Text>
                    <Text style={[styles.TextoAtencao3, {color:"#000000"}]}>{props.c_texto2_banner}</Text>
                    <Text style={[styles.TextoAtencao2, {color:"#000000"}]}>{props.c_texto3_banner}</Text>


                  <TouchableOpacity style={{backgroundColor:"#000000", width:Dimensions.get('window').width/2, height:Dimensions.get('window').width/10, justifyContent:'center', alignItems:"center",
                marginTop:10}}
                onPress={()=>{
                  props.Edit_id_tb_status_banner(0);
                  set_statusAviso(false);
                }}>
                     <Text style={[styles.TextoAtencao3, {color:"#FFFFFF"}]}>FECHAR</Text>
                  </TouchableOpacity>



                    
                  </View>          



                </View>
            </View>
        </Modal>
      <NavigationEvents
          onWillFocus={payload => {
           // alert(props.redireciona_login);

         /*
            
            if(props.redireciona_login == 'Promocoes'){
              //alert('Home');
              props.Edit_redireciona_login('');
              props.navigation.navigate('PromocoesVerifica');     
             // setTimeout(() => {
                props.navigation.dispatch(StackActions.reset({
                  index: 0,
                  actions: [NavigationActions.navigate({ routeName: 'PromocoesVerifica' })],
                }))
             // }, 100);
            }


                
    
            if(props.redireciona_login == 'CadastroEdit'){
              //props.Edit_redireciona_login('Promocoes');

              props.Edit_redireciona_login('');

              props.navigation.navigate('CadastroEdit');     
             // setTimeout(() => {
                props.navigation.dispatch(StackActions.reset({
                  index: 0,
                  actions: [NavigationActions.navigate({ routeName: 'CadastroEdit' })],
                }))
            //  }, 100);
            }
     

            if(props.redireciona_login == 'Live'){
              //props.Edit_redireciona_login('Promocoes');

              props.Edit_redireciona_login('');

              props.navigation.navigate('Live');     
             // setTimeout(() => {
                props.navigation.dispatch(StackActions.reset({
                  index: 0,
                  actions: [NavigationActions.navigate({ routeName: 'Live' })],
                }))
            //  }, 100);
            }

            */
    
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
  
       
          <TextInput ref={username} placeholder='Username' autoCapitalize='none' value={props.passou} style={{position:'absolute', top:-1000, color: '#FFFFFF'}}/>
          {/* MANTER */}

          {/* 
          <Text style={{color:'#FFFFFF'}}> </Text>
          <Text style={{color:'#FFFFFF'}}>{load.toString()} </Text>

          <Button title="INSERIR" 
          onPress={()=>{
            let data = JSON.stringify({
                    c_titulo: "aaaa",                   
            })
            setLoad(true);
            PostaDados(
              'modelo_post.php', //url
              data,
            )
            .then(tb_categoria2 => {
              console.log(tb_categoria2);
                setLoad(false);
                alert(tb_categoria2[0].id_tb_user);
              }
            )
            .catch(err => {
              setLoad(false);
              setFalha(true);
            });
          }}
          ></Button>  
          <Button title="Funcoes" onPress={()=>setLoad(!load)}></Button>  
          <Button title="Funcoes" onPress={()=>Testelala(load)}></Button>  

          <View>
         
          </View>

          {
            tb_categoria.map((tb_categoria)=>{
          return 
          <View key = {tb_categoria.id_tb_categoria}><Text>
          { tb_categoria.c_titulo }
          </Text></View>
            })
          }

          */}


        </View>

        {/* GLOBAIS */}

        <LoadHome visivel={load} cor={'#1b1b1b'} tamanho={'small'} /*  */ navigation={props.navigation}  />

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

  TextoAtencao2:{
    color:'#161616', 
    fontSize: RFValue(14),
    lineHeight: RFValue(16),
    fontFamily: 'Roboto-Light',
    textAlign:'center',
    paddingTop:Dimensions.get('window').height/200,
    textTransform:'uppercase',
  },

  TextoAtencao3:{
    color:'#FFFFFF', 
    fontSize: RFValue(14),
    lineHeight: RFValue(16),
    fontFamily: 'Roboto-Black',
    textAlign:'center',
    paddingTop:Dimensions.get('window').height/200,
    textTransform:'uppercase',
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

    busca:state.auth.busca,

    id_tb_status_banner:state.auth.id_tb_status_banner,
    c_texto1_banner:state.auth.c_texto1_banner,
    c_texto2_banner:state.auth.c_texto2_banner,
    c_texto3_banner:state.auth.c_texto3_banner,
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
  
  Edit_busca,

  Edit_id_tb_status_banner,
  Edit_c_texto1_banner,
  Edit_c_texto2_banner,
  Edit_c_texto3_banner,

  })(Home);
  //REDUX
  
 export default LoginConnect;
