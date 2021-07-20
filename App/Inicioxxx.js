import React , { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  AppState,
  InteractionManager,
  StatusBar,
} from 'react-native';
import { DrawerActions, NavigationActions, StackActions, NavigationEvents} from 'react-navigation';
import {AsyncStorage} from 'react-native';
import OneSignal from 'react-native-onesignal';
import {request, PERMISSIONS} from 'react-native-permissions';
import Estilos from './Estilos';
import ImageResize from 'react-native-scalable-image';
import Swiper from 'react-native-swiper';
//GLOBAIS
import Configs from './Includes/Configs';
import Erro from './Includes/Erro';
import Load from './Includes/Load';
//GLOBAIS

import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
  Edit_verifica_login,
  Edit_redireciona_login,
} from './Actions/LoginActions';

//FUNCOES
import { 
  //GLOBAIS
  Push,
  //GLOBAIS
}
//FUNCOES
from './Includes/Funcoes';

  
function Inicio(props) {





  

  function Navega(pagina){

    props.Edit_redireciona_login('Home');
    props.Edit_verifica_login(pagina);
    //props.navigation.navigate('Cadastro');
    props.navigation.navigate('Home');

    
    props.navigation.navigate('stackNavPerfil');
    //props.navigation.navigate('LoginVerifica');

        props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: pagina })],
        }))




   }





  function Navega2(){
        //props.navigation.navigate('Home');
       // props.navigation.navigate('Home');

     //   props.navigation.navigate('Home');
/*
        props.navigation.navigate('Home');
       props.navigation.dispatch(StackActions.reset({
         index: 0,
         actions: [NavigationActions.navigate({ routeName: 'Home' })],
       }))
*/
        props.navigation.navigate('stackNav');
   }




  //ONE SIGNAL
    useEffect(() => {
   //   StatusBar.setHidden(false);
    }, []);
  //ONESIGNAL


  //ONE SIGNAL
    useEffect(() => {
      OneSignal.init("18135e37-745a-4f35-b4e1-b923a8d09482");
    }, []);
  //ONESIGNAL



  function VerificaLocalizacao(){

    AsyncStorage.setItem("localizacao", '1');

    if(Platform.OS === 'ios'){
      request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(result => {
         // setLoad(false);
          console.log(result);


          if(result.toString() == 'granted'){
           setTimeout(() => {
            swiper.scrollBy(1)
           }, 100);
          }

          if(result.toString() == 'unvailable'){
            setTimeout(() => {
              swiper.scrollBy(1)
            }, 100);              
          }
          
          if(result.toString() == 'denied'){
            setTimeout(() => {
              swiper.scrollBy(1)
            }, 100);
          }
          
          if(result.toString() == 'blocked'){;
            setTimeout(() => {
              swiper.scrollBy(1)
            }, 100);
          }

      })
    }else{
      //setLoad(false);
          request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
            console.log(
              result.toString()
          );

          if(result.toString() == 'granted'){
           setTimeout(() => {
            swiper.scrollBy(1)
           }, 100);
          }

          if(result.toString() == 'unvailable'){
            setTimeout(() => {
              swiper.scrollBy(1)
            }, 100);              
          }
          
          if(result.toString() == 'denied'){
            setTimeout(() => {
              swiper.scrollBy(1)
            }, 100);
          }
          
          if(result.toString() == 'blocked'){
            setTimeout(() => {
              swiper.scrollBy(1)
            }, 100);
          }

        })
      }
  }

  useEffect(() => {
   //VERIFICAR SE É A PRIMEIRA VEZ OU NAO
    

  },[]);


  function myCallback(permission){
    //alert(permission.toString());
    
    swiper.scrollBy(1);

  }
  

  return (
      //null
      
    <>
   {/* <StatusBar backgroundColor="#1d1d1d" barStyle="light-content" />  */}
     <NavigationEvents
          onWillFocus={payload => {
           // alert(props.redireciona_login);


           
            
            if(props.redireciona_login == 'Promocoes'){
             // alert('promoInicio');
              props.Edit_redireciona_login('');
              props.navigation.navigate('PromocoesVerifica');     
              setTimeout(() => {
                props.navigation.dispatch(StackActions.reset({
                  index: 0,
                  actions: [NavigationActions.navigate({ routeName: 'PromocoesVerifica' })],
                }))
              }, 100);
              
           
       
            }
            
            
            if(props.redireciona_login == 'CadastroEdit'){
              //props.Edit_redireciona_login('Promocoes');

              props.Edit_redireciona_login('');
              props.navigation.navigate('CadastroEdit');     
              setTimeout(() => {
                props.navigation.dispatch(StackActions.reset({
                  index: 0,
                  actions: [NavigationActions.navigate({ routeName: 'CadastroEdit' })],
                }))
              }, 100);
              

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


    
          }}
        />
<Swiper 
      showsButtons={false}
      ref={swiper => {this.swiper=swiper}}


      dot={<View 
      style={{backgroundColor: '#4a4a4a', 
      width: 12, 
      height: 12, 
      //borderRadius: 10, 
      marginLeft: 10, 
      marginRight: 10}}
       />}
      activeDot={<View style={{backgroundColor: '#FFFFFF', 
      width: 12 , 
      height: 12, 
      //borderRadius: 10, 
      marginLeft: 10, 
      marginRight: 10}} 
      />}

      paginationStyle={{
        bottom: 50
      }}
      loop={false}>

        {Platform.OS === 'ios'?
        <View style={[, {backgroundColor:'#1d1d1d', flex:1, }]}>
            <ImageBackground source={require('../assets/notificacao_bg.jpg')} style={{width: '100%', height: '100%', flex:1, alignItems:'center', justifyContent:'center',backgroundColor:'#2e2e2e'}}>
                <ImageResize source={require('../assets/logo_inicio.png')} width={Dimensions.get('window').width/2} />
                <ImageResize source={require('../assets/notificacao_icone.png')} width={Dimensions.get('window').width/3.7} style={{marginTop:Dimensions.get('window').width/5}} />
                <Text style={[Estilos.TopicoInicio, Estilos.NotificacaoMargemTopo, {}]}>Notificações</Text>
                <Text style={[Estilos.TextoInicio, Estilos.NotificacaoMargemTopo,{paddingLeft:Dimensions.get('window').width/20, paddingRight:Dimensions.get('window').width/20, }]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum orci vel risus sodales tempor. In sollicitudin massa vitae nisl elementum imperdiet ac vitae dui. 
                </Text>
                <TouchableOpacity style={[Estilos.ForaBotaoNotificacao, Estilos.NotificacaoMargemTopo]}
                onPress={()=>OneSignal.promptForPushNotificationsWithUserResponse(myCallback)}
                >
                    <Text style={Estilos.TextoBotaoNotificao}>PERMITIR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>swiper.scrollBy(1)} style={[Estilos.TextoBotaoNotificaoPularFora]}>
                    <Text style={Estilos.TextoBotaoNotificaoPular}>Pular</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
        :
        null
        }
        


        <View style={[, {backgroundColor:'#000000', flex:1, }]}>
            <ImageBackground source={require('../assets/notificacao_bg.jpg')} style={{width: '100%', height: '100%', flex:1, alignItems:'center', justifyContent:'center',backgroundColor:'#2e2e2e'}}>
                <ImageResize source={require('../assets/logo_inicio.png')} width={Dimensions.get('window').width/2} />
                <ImageResize source={require('../assets/localizao_icone.png')} width={Dimensions.get('window').width/3.7} style={{marginTop:Dimensions.get('window').width/5}} />
                <Text style={[Estilos.TopicoInicio, Estilos.NotificacaoMargemTopo, {}]}>Localização</Text>
                <Text style={[Estilos.TextoInicio, Estilos.NotificacaoMargemTopo,{paddingLeft:Dimensions.get('window').width/20, paddingRight:Dimensions.get('window').width/20, }]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum orci vel risus sodales tempor. In sollicitudin massa vitae nisl elementum imperdiet ac vitae dui. 
                </Text>
                <TouchableOpacity style={[Estilos.ForaBotaoNotificacao, Estilos.NotificacaoMargemTopo]}
                 onPress={()=>VerificaLocalizacao()}
                >
                    <Text style={Estilos.TextoBotaoNotificao}>PERMITIR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>swiper.scrollBy(1)} style={[Estilos.TextoBotaoNotificaoPularFora]}>
                    <Text style={Estilos.TextoBotaoNotificaoPular}>Pular</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>



        <View style={[, {backgroundColor:'#000000', flex:1, }]}>
            <ImageBackground source={require('../assets/notificacao_bg.jpg')} style={{width: '100%', height: '100%', flex:1, alignItems:'center', justifyContent:'center',backgroundColor:'#2e2e2e'}}>
                <ImageResize source={require('../assets/logo_inicio.png')} width={Dimensions.get('window').width/2} />
                {/*<ImageResize source={require('../assets/bemvindo_icone.png')} width={Dimensions.get('window').width/3.7} style={{marginTop:0}} />*/}
                <Text style={[Estilos.TopicoInicio, Estilos.NotificacaoMargemTopo, {}]}>SEJA BEM VINDO</Text>
                <Text style={[Estilos.TextoInicio, Estilos.NotificacaoMargemTopo,{paddingLeft:Dimensions.get('window').width/20, paddingRight:Dimensions.get('window').width/20, }]}>
                Faça seu cadastro, participe{'\n'} de nossas promoções e receba nossas novidades!{'\n'} 
                </Text>

                <TouchableOpacity style={[Estilos.ForaBotaoNotificacao, Estilos.NotificacaoMargemTopo]}
                onPress={()=>{
                 Navega('Cadastro');
                }}>
                    <Text style={Estilos.TextoBotaoNotificao}>FAZER MEU CADASTRO AGORA</Text>
                </TouchableOpacity>

             
                <TouchableOpacity style={[Estilos.ForaBotaoNotificacao, Estilos.NotificacaoMargemTopo]}
                onPress={()=>{
   
                  Navega('Login');
                }}>
                    <Text style={Estilos.TextoBotaoNotificao}>JÁ POSSUO CADASTRO</Text>
                </TouchableOpacity>


{/*
                <View style={{marginTop:Dimensions.get('window').height/50}}>
                <Text style={Estilos.TextoBotaoNotificaoPular}>OU</Text>
                </View>

                

                <View style={[Estilos.QuadroCadastroFora,{marginTop:Dimensions.get('window').height/50}]}>

                  <TouchableOpacity style={[Estilos.QuadroCadastroEsq]}>
                    <View style={[,{marginRight:5}]}><ImageResize source={require('../assets/g_login.png')} width={Dimensions.get('window').width/13} /></View>
                    <View><Text style={[Estilos.QuadroCadastroEsqTexto]}>Entrar com Google</Text></View>
                  </TouchableOpacity>

                  <View style={{width:1, height:30, backgroundColor:'#FFFFFF'}}></View>
                  <TouchableOpacity style={[Estilos.QuadroCadastroDir]}>
                    <View style={[,{marginRight:5}]}><ImageResize source={require('../assets/f_login.png')} width={Dimensions.get('window').width/13} /></View>
                    <View><Text style={[Estilos.QuadroCadastroEsqTexto]}>Entrar com Facebook</Text></View>
                  </TouchableOpacity>
                  
                </View>
*/}
             
                <TouchableOpacity onPress={()=>props.navigation.navigate('stackNav')} style={[Estilos.TextoBotaoNotificaoPularFora]}>
                    <Text style={Estilos.TextoBotaoNotificaoPular}>Cadastrar mais tarde</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    </Swiper>


    </>
    
  );
  
};



const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
    verifica_login:state.auth.verifica_login,
    redireciona_login:state.auth.redireciona_login,
    
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,
  Edit_verifica_login,
  Edit_redireciona_login,

  })(Inicio);
 export default LoginConnect;
