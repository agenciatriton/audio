import React , { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
  AppState,
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { NavigationActions, StackActions, NavigationEvents, withNavigationFocus} from 'react-navigation';
import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';
import Estilos from './Estilos';
import { WebView } from 'react-native-webview';
import ImageResize from 'react-native-scalable-image';
import {NavigationApps,actions,googleMapsTravelModes, mapsTravelModes} from "react-native-navigation-apps";
import FlashMessage from "react-native-flash-message";
var SpinnerNew = require('react-native-spinkit');
import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,

    //LIVE
    Edit_id_tb_status,
    Edit_c_video,
    Edit_id_tb_tipo,
    Edit_c_texto,
    Edit_passou,
    //LIVE
} from './Actions/LoginActions';


//GLOBAIS
import Configs from './Includes/Configs';
import Flat from './Includes/Flat';
import Erro from './Includes/Erro';
import Load from './Includes/Load';
import Header from './Includes/Header';
//GLOBAIS


//FUNCOES
import { 
    //GLOBAIS
    ListaDados,
    PostaDados,
    Testelala,
    Navega,
    AbreURL,
    Timer,
    //GLOBAIS
  }

  //FUNCOES
  from './Includes/Funcoes';

  Live.navigationOptions = ({ navigation }) => {
    const { state, setParams, navigate } = navigation;
    const params = state.params || {};
    return {
     
      headerTitle: 
      <View style={{justifyContent:'center', alignItems:'center', width:'100%', flex:1}}>
        <ImageResize source={require('../assets/logo_inicio.png')} width={Dimensions.get('window').width/6} style={{justifyContent:'center', alignItems:'center',}}/>
      </View>
      ,
      headerRight:
        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:'100%', flex:1}} onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}>
          <ImageResize source={require('../assets/menu_topo.png')} width={Dimensions.get('window').width/15} style={{marginRight:Dimensions.get('window').height/50}} />
      </TouchableOpacity>
      ,
   
      headerTitleStyle: {color:'#FFFFFF'},
      headerStyle: {backgroundColor:'#1b1b1b',borderBottomWidth: 0,  height:Dimensions.get('window').height/14,justifyContent:'center', alignItems:'center',},
      headerTintColor: '#FFFFFF',
    }
  }


function Live(props) {




    //GLOBAIS
    const { navigate } = props.navigation;
    const [falha, setFalha] = useState(false);
    const [load, setLoad] = useState(true);

    //GLOBAIS
    const [load2, setLoad2] = useState(false);
    const videoref = useRef();
    const TextoInput = useRef();
    const inputRefCadastro = useRef();

    const [para, set_para] = useState('nao');
    const [p_titulo, set_p_titulo] = useState('');
    const [c_nome, set_c_nome] = useState('');
    const [p_texto, set_p_texto] = useState('');
    const [p_textox, set_p_textox] = useState('');
    const [p_textoObrigatorio, set_p_textoObrigatorio] = useState('Digite aqui');



    const [mostraVideo, set_mostraVideo] = useState(false);
    const [LinkVideo, set_LinkVideo] = useState('');
    const [id_tb_tipo, set_id_tb_tipo] = useState('');
    const [z_video, set_z_video] = useState('');
    const [Width_Layout, set_Width_Layout] = useState(false);
    const [Height_Layout, set_Height_Layout] = useState(false);

    //PLAYER
    const [isPlaying, set_isPlaying] = useState(true);
    const [appState, set_appState] = useState(AppState.currentState);
    //PLAYER



  const rootView = useRef(null);



function Submit(){

  if(p_texto == ''){
    set_p_textoObrigatorio('Mensagem é obrigatório, digite aqui!');
  }else{

  setLoad2(true);
  let data = JSON.stringify({
    c_texto: p_texto,                   
    id_tb_user: props.id_tb_user,                  
  })
  

  PostaDados(
    'live_comentario_submit.php', //url
    data,
  )
  .then(tb_user => {  
    set_p_texto('');
    //setLoad2(false);
    if(tb_user[0].retorno === true){


        // alert('e-mail cadastrado com sucesso');
         inputRefCadastro.current.showMessage({
          description: "",
          message: "Mensagem enviada com sucesso!",
          type: "success",
          backgroundColor: "#555555", // background color
          color: "#FFFFFF", // text color
          floating:true,
          duration:2000,
        });
        
        setTimeout(() => {
          setLoad2(false);
        }, 2500);
    
    }




  })
  .catch(err => {
    console.log(err);
    setLoad2(false);
   // setFalha(true);
  });
  }
}

//DIDMOUNT





useEffect( () => () => set_para('sim'), [] );


  useEffect(() => {



    ListaDados(
      'live.php', //url
    )

    .then(tb_live => {
      
        //alert(tb_live[0].id_tb_live+'xxx');
        let p_status = tb_live[0].id_tb_status;
        let p_video = tb_live[0].c_video;
        let p_id_tb_tipo = tb_live[0].id_tb_tipo;
        let p_titulo = tb_live[0].c_titulo;
        let p_texto = tb_live[0].c_texto;

        set_p_titulo(p_titulo);
        set_id_tb_tipo(p_id_tb_tipo);
        set_z_video(p_video);

        let id_video = p_video;

        if(p_id_tb_tipo == 0){
            // VIMEO    
            if(Platform.OS === 'ios'){
            //  LinkVideo = `https://daniel6.websiteseguro.com/app/ios/vimeo_aovivo.html?tipo=1&id_video=${id_video}`
              set_LinkVideo(`https://audiosp.com.br/app/ios/novo/vimeo.html?tipo=1&id_video=${id_video}`);
            }else{
              set_LinkVideo(`https://audiosp.com.br/app/android/vimeo_aovivo.html?tipo=1&id_video=${id_video}`);
            }
        } else if(p_id_tb_tipo == 1) {
            if(Platform.OS === 'ios'){
              set_LinkVideo(`https://audiosp.com.br/app/ios/youtube_aovivo.html?tipo=1&id_video=${id_video}`);
            }else{

              set_LinkVideo(`https://audiosp.com.br/app/android/youtube_aovivo.html?tipo=1&id_video=${id_video}`);
            }

        } else if(p_id_tb_tipo == 2) {
            if(Platform.OS === 'ios'){
              set_LinkVideo(`https://audiosp.com.br/app/ios/novo/wowza.html?tipo=1&id_video=${id_video}`);
            }else{
              set_LinkVideo(`https://audiosp.com.br/app/ios/novo/wowza.html?tipo=1&id_video=${id_video}`);
            }
        }
        setLoad(false);
        set_mostraVideo(true);

        

      }
    )
    .catch(err => {
      //alert(err.toString())

    });


  },[]);


  useEffect(() => {

    getOrientation();
    
    Dimensions.addEventListener( 'change', () =>
    {
      getOrientation();
    });

  },[]);



  const getOrientation = () =>
  {


      if(Platform.OS === 'ios'){

      }else{
        if( Dimensions.get('window').width < Dimensions.get('window').height )
        {
         // this.setState({ orientation: 'portrait' });
        // alert('portrait');
         StatusBar.setHidden(false);
        }
        else
        {
          //this.setState({ orientation: 'landscape' });
          //alert('landscape');
          StatusBar.setHidden(true);
        }
      }
  }






    return (
        <>



        

                        
        {
        load === true
        ?
        <View style={{flex:1}}> 

      

        <Load visivel={true} cor={'#1b1b1b'} tamanho={'small'} /*  */ navigation={props.navigation}  />
        </View>
                    :

<KeyboardAvoidingView
style={{flexGrow:1}}
      behavior={Platform.OS === "ios" ? "position" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}>
      <ScrollView style={{flexGrow:1}}>
        <View style={{flexGrow:1, height:Dimensions.get('window').height - Dimensions.get('window').width/6 - Dimensions.get('window').width/5}}>
        <ImageBackground
        source={require('../assets/foto_padrao.jpg')}
        style={{
          height: Dimensions.get('window').width * 9 / 16
          
        }}>
          <View style={{
    
            height: Dimensions.get('window').width * 9 / 16
          }} keyboardShouldPersistTaps={'handled'}
          ref={rootView}
          
          >

          {
          

          props.isFocused ?
          
          mostraVideo === true?



          
          
          
            Platform.OS === 'ios'?
                  //ESSE É YOUTUBE
                  id_tb_tipo == 1?
                  <YouTube
                  //ref={this._youTubeRef}
                  // You must have an API Key for the player to load in Android
                  apiKey="YOUR_API_KEY"
                  // Un-comment one of videoId / videoIds / playlist.
                  // You can also edit these props while Hot-Loading in development mode to see how
                  // it affects the loaded native module
                  videoId={z_video}
                  // videoIds={['uMK0prafzw0', 'qzYgSecGQww', 'XXlZfc1TrD0', 'czcjU1w-c6k']}
                  // playlistId="PLF797E961509B4EB5"
                  play={isPlaying}
                  //loop={this.state.isLooping}
                  fullscreen={false}
                  controls={1}
                  style={[
                    { width: Dimensions.get('window').width, height: Dimensions.get('window').width * 9 / 16, backgroundColor:"#000000",},
                    styles.player,
                    
                  ]}
                 
                />
                  :
                  <WebView source={{ uri: LinkVideo }} 
                  //ref={ref => (this.webview_aovivo = ref)}
                  ref={videoref}
                  //ref={ref => (videoref = ref)}
                  scalesPageToFit={true}
                  allowsInlineMediaPlayback={true}
                  allowUniversalAccessFromFileURLs={false}
                  startInLoadingState={false}
                  mediaPlaybackRequiresUserAction={false}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}   
                  allowsInlineMediaPlayback={true}
                  allowsFullscreenVideo={true}
                  style={{width: Dimensions.get('window').width, height: Dimensions.get('window').width * 9 / 16,backgroundColor:"#000000",}}
                  onLoadEnd={()=>{
                    setTimeout(() => { videoref.current.injectJavaScript('playVideo();'); }, 300);
                    setTimeout(() => { videoref.current.injectJavaScript('unMutePlyr();'); }, 1000);
                  }}
                  />
              :
              <WebView source={{ uri: LinkVideo }} 
              //ref={ref => (this.webview_aovivo = ref)}
              ref={videoref}
              //ref={ref => (videoref = ref)}
              scalesPageToFit={true}
              allowsInlineMediaPlayback={true}
              allowUniversalAccessFromFileURLs={false}
              startInLoadingState={false}
              mediaPlaybackRequiresUserAction={false}
              javaScriptEnabled={true}
              domStorageEnabled={true}   
              allowsInlineMediaPlayback={true}
              allowsFullscreenVideo={true}
              style={{width: Dimensions.get('window').width, height: Dimensions.get('window').width * 9 / 16,backgroundColor:"#000000",}}
              onLoadEnd={()=>{
                setTimeout(() => { videoref.current.injectJavaScript('playVideo();'); }, 300);
                setTimeout(() => { videoref.current.injectJavaScript('unMutePlyr();'); }, 1000);
              }}
              />

              
       
          :
          null
        
        :
        null}
          </View>
          </ImageBackground>

          <View
         
          style={{backgroundColor:"#FFFFFF" ,alignItems:'center', justifyContent:'center', flexDirection:'row', paddingLeft:Dimensions.get('window').width/30, paddingRight:Dimensions.get('window').width/30, width:'100%',
        paddingTop:Dimensions.get('window').height/50, }}>
              <View style={{backgroundColor:'#FFFFFF', width:Dimensions.get('window').width/4.5}}><ImageResize source={require('../assets/botao_live.png')} width={Dimensions.get('window').width/4.5} style={{marginBottom:6}} /></View>
          <View style={{flex:1, paddingLeft:Dimensions.get('window').width/30}}><Text style={[Estilos.TituloLive]}>{p_titulo}</Text></View>
          </View>


          {
        load2 === true
        ?
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}} keyboardShouldPersistTaps={'handled'}>
      
                      <SpinnerNew style={[Estilos.spinner]} isVisible={true} size={Dimensions.get('window').width/10} type={"Wave"} color={'#1b1b1b'}/>
                      <Text style={[Estilos.TextoCarregando,{color:props.cor}]}>AGUARDE ...</Text>
                     
                    </View>
                    :
          <View style={[Estilos.CampoFora,{backgroundColor:'#f5f5f5', paddingTop:5, paddingBottom:5}]} keyboardShouldPersistTaps={'handled'}>
                  <View style={[Estilos.MargemTitulo]}><Text style={[Estilos.tituloMensagem]}>SUA MENSAGEM</Text></View>


                  <View style={[Estilos.CampoForaDentro]}>
                              <TextInput
                              multiline={true}
                              keyboardType='email-address'
                              //style={Estilos.campoForm}
                              placeholderTextColor = "#dddddd"
                              placeholder={p_textoObrigatorio}
                              autoCapitalize = "none"
                              value={p_texto} 
                              onChangeText={text =>set_p_texto(text)}
                              onSubmitEditing={event =>Submit()}
                              ref={TextoInput}
                              returnKeyType={ "send" }
                              blurOnSubmit={ true }
                              style={[Estilos.tituloMensagem2,{height:Dimensions.get('window').width/5, justifyContent:'flex-start', alignItems:'flex-start', paddingLeft:10, paddingRight:10, paddingTop:10, paddingBottom:10}]}
                              />
                  </View>
            

            {/* 
                  <View style={{width:"100%", justifyContent:'center', alignItems:'center'}} keyboardShouldPersistTaps={'handled'}>
                  <TouchableOpacity style={[Estilos.ForaBotaoNotificacaoBranco,{marginTop:Dimensions.get('window').height/40, backgroundColor:"transparent"}]}
                      onPress={()=>Submit()} keyboardShouldPersistTaps={'handled'}>
                          <Text style={Estilos.TextoBotaoNotificao}>ENVIAR MENSAGEM</Text>
                  </TouchableOpacity>
                  </View>
            */}
          </View>
        }

 </View>
      </ScrollView>
    </KeyboardAvoidingView>

            
        }
       
    

        </>
    );
};
const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  inner: {
      padding: 24,
      flex: 1,
      justifyContent: "flex-end",
  },
  header: {
      fontSize: 36,
      marginBottom: 48,
  },
  input: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      marginBottom: 36,
  },
  btnContainer: {
      backgroundColor: "white",
      marginTop: 12,
  },
});
 

const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
     //LIVE
     id_tb_status:state.auth.id_tb_status,
     c_video:state.auth.c_video,
     id_tb_tipo:state.auth.id_tb_tipo,
     c_texto:state.auth.c_texto,
     passou:state.auth.passou,
     //LIVE
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,

    //LIVE
    Edit_id_tb_status,
    Edit_c_video,
    Edit_id_tb_tipo,
    Edit_c_texto,
    Edit_passou,
    //LIVE

  })(Live);
 export default withNavigationFocus(LoginConnect);