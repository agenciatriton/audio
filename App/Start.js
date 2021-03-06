import React , { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  Image,
  Dimensions,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { DrawerActions, NavigationActions, StackActions, NavigationEvents} from 'react-navigation';
import OneSignal from 'react-native-onesignal';
import Swiper from 'react-native-swiper';
import Estilos from './Estilos';
import Video from 'react-native-video';
import {request, PERMISSIONS} from 'react-native-permissions';
import ImageResize from 'react-native-scalable-image';
import {AsyncStorage} from 'react-native';
//GLOBAIS
import Configs from './Includes/Configs';
import Erro from './Includes/Erro';
import Load from './Includes/Load';
//GLOBAIS

import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
  Edit_c_nome,
  Edit_c_email,
  Edit_c_telefone,
  Edit_verifica_login,

} from './Actions/LoginActions';

import Vinheta4 from '../assets/vinheta4.mp4';
import Vinheta10 from '../assets/vinheta10.mp4';

App.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: null
  }
}




const resetActionEventos = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Home' })],
});



function App(props) {




  const [primeira, set_primeira] = useState(false);
  const [mostrainicio, set_mostrainicio] = useState(false);

  
  useEffect(() => {

    OneSignal.init("18135e37-745a-4f35-b4e1-b923a8d09482");



    StatusBar.setHidden(true);
    AsyncStorage.setItem("localizacao", '0');


    AsyncStorage.getItem("id_tb_user").then((value)=>{
       
      
      if(value==null || value==0 || value==''){
          props.Edit_id_tb_user(0);
          props.Edit_verifica_login('LoginInicio');
        }else{
           
          props.Edit_id_tb_user(value);              
          AsyncStorage.getItem("c_nome").then((value)=>{
            props.Edit_c_nome(value);
            //alert(value);
          });
          AsyncStorage.getItem("c_email").then((value)=>{
            props.Edit_c_email(value);
            //alert(value);
          });
          AsyncStorage.getItem("c_telefone").then((value)=>{
            props.Edit_c_telefone(value);
            //alert(value);
          });
          props.Edit_verifica_login('CadastroEdit');

        }

    
    });




    
    AsyncStorage.getItem("primeira").then((value)=>{
      if (value == "nao"){
        setTimeout(() => {
          //props.navigation.navigate('Live');
         // props.navigation.navigate('Home');
       }, 1000);
        //NAO E A PRIMEIRA
        set_primeira('nao');
      }else{
        //?? A PRIMEIRA
        AsyncStorage.setItem("primeira", "nao");
        setTimeout(() => {
          //props.navigation.navigate('Inicio');

       }, 1000);
       set_primeira('sim');
      }
    });
    //alert('passei');
    
  },[]);



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


  function myCallback(permission){
    //alert(permission.toString());
    
    swiper.scrollBy(1);

  }
  

  return (
      //null
      
    <>

<View style={{flex:1, backgroundColor:'#1d1d1d'}}>
        <StatusBar backgroundColor="#1d1d1d" barStyle="light-content" />
      
        {/*<ImageResize source={require('../assets/logo_inicio.png')} width={Dimensions.get('window').width/1.4} />*/}
        {mostrainicio === true?

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
                          <Text style={[Estilos.TopicoInicio, Estilos.NotificacaoMargemTopo, {}]}>Notifica????es</Text>
                          <Text style={[Estilos.TextoInicio, Estilos.NotificacaoMargemTopo,{paddingLeft:Dimensions.get('window').width/20, paddingRight:Dimensions.get('window').width/20, }]}>
                          Mantenha sempre as notifica????es ativas do nosso aplicativo para n??o perder as novidades sobre shows e eventos da ??udio. 
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
                          <Text style={[Estilos.TopicoInicio, Estilos.NotificacaoMargemTopo, {}]}>Localiza????o</Text>
                          <Text style={[Estilos.TextoInicio, Estilos.NotificacaoMargemTopo,{paddingLeft:Dimensions.get('window').width/20, paddingRight:Dimensions.get('window').width/20, }]}>
                          No nosso aplicativo, temos promo????es para usu??rios que est??o dentro da nossa casa ou locais espec??ficos. Para participar, permita sempre a localiza????o ativa.
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
                          Fa??a seu cadastro, participe{'\n'} de nossas promo????es e receba nossas novidades!{'\n'} 
                          </Text>

                          <TouchableOpacity style={[Estilos.ForaBotaoNotificacao, Estilos.NotificacaoMargemTopo]}
                          onPress={()=>{
                          props.Edit_verifica_login('Cadastro');
                          props.navigation.navigate('stackNavPerfil');

                          props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: 'Cadastro' })],
                          }));
                     
                          //Navega('Cadastro');
                          }}>
                              <Text style={Estilos.TextoBotaoNotificao}>FAZER MEU CADASTRO AGORA</Text>
                          </TouchableOpacity>

                      
                          <TouchableOpacity style={[Estilos.ForaBotaoNotificacao, Estilos.NotificacaoMargemTopo]}
                          onPress={()=>{

                            props.Edit_verifica_login('Login');
                            props.navigation.navigate('stackNavPerfil');
  
                            props.navigation.dispatch(StackActions.reset({
                              index: 0,
                              actions: [NavigationActions.navigate({ routeName: 'Login' })],
                            }));



                     
                            //Navega('Login');
                          }}>
                              <Text style={Estilos.TextoBotaoNotificao}>J?? POSSUO CADASTRO</Text>
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
                      
                          <TouchableOpacity onPress={()=>props.navigation.navigate('Home')} style={[Estilos.TextoBotaoNotificaoPularFora]}>
                              <Text style={Estilos.TextoBotaoNotificaoPular}>Cadastrar mais tarde</Text>
                          </TouchableOpacity>
                      </ImageBackground>
                  </View>
              </Swiper>:
        null
        }




        { primeira == 'sim'?

        mostrainicio === false?
        <Video source={Vinheta10}
        // Can be a URL or a local file.
        ref={(ref) => {
        this.player = ref
        }}         
        fullscreen={true}
        resizeMode="cover"                             // Store reference
        onBuffer={this.onBuffer}                // Callback when remote video is buffering
        onEnd={()=>set_mostrainicio(true)}                      // Callback when playback finishes
        //onError={()=>this.Navegax("banner")}         // Callback when video cannot be loaded
        style={[{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        }]} />
        :
        null
        :
        <Video source={Vinheta4}
        // Can be a URL or a local file.
        ref={(ref) => {
        this.player = ref
        }}            
        fullscreen={true}
        resizeMode="cover"                             // Store reference
        onBuffer={this.onBuffer}                // Callback when remote video is buffering
        onEnd={()=>{
          props.navigation.navigate('Home');
          props.navigation.dispatch(resetActionEventos);
        }}                      // Callback when playback finishes
        //onError={()=>this.Navegax("banner")}         // Callback when video cannot be loaded
        style={[{
        width: '100%',
        height: '100%',
        }]} />
      }

      </View>

    </>
    
  );
  
};



const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
    c_nome:state.auth.c_nome,
    c_email:state.auth.c_email,
    c_telefone:state.auth.c_telefone,
    id_tb_tipo:state.auth.id_tb_tipo,
    verifica_login:state.auth.verifica_login,
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,
  Edit_c_nome,
  Edit_c_email,
  Edit_c_telefone,
  Edit_verifica_login,

  })(App);
 export default LoginConnect;
