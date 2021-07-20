import React , { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  Text,
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  ScrollView, 
  TouchableOpacity,
  Linking,
  StatusBar,
  TextInput,
  Keyboard,
} from 'react-native';
var SpinnerNew = require('react-native-spinkit');
import { TextInputMask } from 'react-native-masked-text';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from 'react-navigation-drawer';
import { NavigationActions, StackActions, NavigationEvents, withNavigationFocus} from 'react-navigation';
import { WebView } from 'react-native-webview';
import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';
import Estilos from './Estilos';
import {NavigationApps,actions,googleMapsTravelModes, mapsTravelModes} from "react-native-navigation-apps";
import { connect } from 'react-redux';
import Share from 'react-native-share';
import { 
  Edit_id_tb_user,
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


ProgramacaoInterna.navigationOptions = ({ navigation }) => {
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



function ProgramacaoInterna(props) {


  const [p_y, setc_p_y] = useState(0);
  const [c_mostra, setc_mostra] = useState(false);
  const [c_mostra_sucesso, setc_mostra_sucesso] = useState(false);
  const [c_mostra_load, setc_mostra_load] = useState(false);


  const [c_nome, setc_nome] = useState('');
  const [v_nome, setv_nome] = useState(false);
  const [m_nome, setm_nome] = useState();

  const [c_telefone, setc_telefone] = useState('');
  const [v_telefone, setv_telefone] = useState(false);
  const [m_telefone, setm_telefone] = useState();

  const [c_email, setc_email] = useState('');
  const [v_email, setv_email] = useState(false);
  const [m_email, setm_email] = useState();

  const [c_mensagem, setc_mensagem] = useState('');
  const [v_mensagem, setv_mensagem] = useState(false);
  const [m_mensagem, setm_mensagem] = useState();

  const flatList = useRef();

  const nomeInput = useRef();
  const emailInput = useRef();
  const telefoneInput = useRef();
  const mensagemInput = useRef();




  const [isPlaying, set_isPlaying] = useState(true);




  function Submit(mailto, evento){
    valida = false;

     //NOME
      if(c_nome == null || c_nome == ''){
          setv_nome(true);
          setm_nome('Campo nome é obrigatório!');
          valida = true;
      }else{
          setv_nome(false);
          setm_nome('');
      }
    
      //EMAIL
      if(c_email == null || c_email == ''){
          setv_email(true);
          setm_email('Campo e-mail é obrigatório!');
          valida = true;
      }else{

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!reg.test(c_email)){
          setv_email(true);
          setm_email('Campo e-mail não é válido!');
          valida = true;
        }else{
            setv_email(false);
            setm_email('');
        }
      }
    
      //CELULAR
      if(c_telefone == null || c_telefone == ''){
        setv_telefone(true);
        setm_telefone('Campo telefone é obrigatório!');
        valida = true;
      }else{
          if(c_telefone.length<11){
              setv_telefone(true);
              setm_telefone('Campo telefone está incompleto!');
              valida = true;
          }else{
              setv_telefone(false);
              setm_telefone('');
          }
      }

      //NOME
      if(c_mensagem == null || c_mensagem == ''){
        setv_mensagem(true);
        setm_mensagem('Campo mensagem é obrigatório!');
        valida = true;
      }else{
          setv_mensagem(false);
          setm_mensagem('');
      }


    if(!valida === true){


      setc_mostra(false);
      setc_mostra_load(true);
      //alert('foi');

      let data = JSON.stringify({            
        mailto: mailto,                   
        c_evento: evento,                   
        c_nome: c_nome,                   
        c_email: c_email,                                     
        c_telefone: c_telefone,                                     
        c_mensagem: c_mensagem,                                     
      })

      PostaDados(
        'camarote.php', //url
        data,
      )
      .then(tb_user => {
        //console.log(tb_user);

        if(tb_user[0].retorno === true){

          setc_mostra_load(false);
          setc_mostra_sucesso(true);


          setc_nome('');
          setc_telefone('');
          setc_email('');
          setc_mensagem('');

       
/*
         // alert('e-mail cadastrado com sucesso');
         inputRefLogin.current.showMessage({
          description: "",
          message: "Mensagem efetuado com sucesso!",
          type: "success",
          backgroundColor: "#555555", // background color
          color: "#FFFFFF", // text color
          floating:true,
          duration:2000,
        });
 */
          setTimeout(() => {
            
          }, 2500);
        
        }

      })
      .catch(err => {
        alert('erro');
        setc_mostra_sucesso(false);
        setc_mostra_load(false);
      });
    }

  }




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



  const videoref = useRef();

  function TextoBilheteriaBold(props){
    return <Text style={[Estilos.TextoBilheteriaBold]}>{props.children}</Text>
    }


  function TextoNegrito(props){
    return <Text style={[Estilos.TextoNegritoEvento]}>{props.children}</Text>
    }

  const [search, setsearch] = useState('Rua sousa brasil, 83');
  const [tb_banner, settb_banner] = useState([props.navigation.getParam('item')]);

    return (
        <>
        <SafeAreaView style={[{flex:1, backgroundColor:'#000000',}]}>
            <ScrollView style={[{flex:1}]} 
           // ref={_scrollView => {this._scrollView=_scrollView}}
           // ref={view => _scrollView = view} 
              //ref={scrollView}
              //ref="scrollView"
              ref={ref => this.flatList = ref}
            >
              <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
              <ImageBackground
        source={require('../assets/foto_padrao.jpg')}
        style={{
          alignItems:'stretch',
          justifyContent: 'center',
          resizeMode: 'contain',
          justifyContent:'center',
          alignItems:'center',
          zIndex:1000
        }}>
              <View style={{height:Dimensions.get('window').width/100*80, backgroundColor:'#FFFFFF',}}>
              <ImageResize source={{uri:'https://audiosp.com.br/upload/banner/'+tb_banner[0].id_tb_banner+'c.'+tb_banner[0].c_extensao1}} width={Dimensions.get('window').width} /> 

              

              {tb_banner[0].c_adiado != ''?
         <View style={[Estilos.NovaData]}><Text style={[Estilos.NovaDataTextoDentro]}>{tb_banner[0].c_adiado}</Text></View>
            :
            null
            }
            


              </View>
              </ImageBackground>
              <View style={[Estilos.ForaTituloInterna]}>
                <View>
                  <Text style={[Estilos.TituloInterna]}>{tb_banner[0].c_titulo}</Text>
                </View>
                <View style={{paddingTop:Dimensions.get('window').height/150}}>
                  <ImageBackground
                    source={require('../assets/barra_tit_eventos.jpg')}
                    style={{
                      width:'70%', height:Dimensions.get('window').width/60,
                      resizeMode: 'contain',
                  }}></ImageBackground>
                  <View style={[Estilos.DataHomeFora,{marginTop:Dimensions.get('window').width/30}]}>
                    <View style={[Estilos.DiaFora]}><Text style={[Estilos.DiaTexto1]}>{tb_banner[0].dia}</Text></View>
                    <View style={[Estilos.MesFora]}><Text style={[Estilos.MesTexto1]}>{tb_banner[0].mes}</Text></View>
                    <View style={[Estilos.SemanaFora]}><Text style={[Estilos.SemanaTexto1]}>{tb_banner[0].diasemana}</Text></View>
                  </View>
                </View>
              </View>
              
              <View style={{justifyContent:'center', alignItems:"center",marginTop:Dimensions.get('window').width/20, flexDirection:'row'}}>
              <TouchableOpacity style={{flexDirection:'row', justifyContent:"flex-start", alignItems:'flex-start', width:"90%"}}
       onPress={

        ()=>  Compartilhar(
          tb_banner[0].c_titulo,
          'AUDIO SP, '+tb_banner[0].c_titulo+', acesse '+tb_banner[0].url+ ' e saiba mais!',
        )
        .then(tb_categoria => {
          //setCategoria(tb_categoria);
          }
        )
      
      

      }
      >
        <View style={{flexDirection:'row', justifyContent:"flex-start", alignItems:'center', width:"100%", flex:1}}>
          <View style={{justifyContent:"flex-start", alignItems:'flex-start'}}><Text style={[Estilos.TextoCompartilhar]}>Compartilhar</Text></View>
          <View style={{justifyContent:"flex-start", alignItems:'center'}}><MaterialIcon name="share" size={18} color="#8d8d8d" /></View>
        </View>
      </TouchableOpacity>
              </View>


              
              
              <View style={{justifyContent:'center', alignItems:"center",marginTop:Dimensions.get('window').width/20}}>
                  <TouchableOpacity style={[Estilos.BotaoCamarote]} onPress={()=>Linking.openURL(tb_banner[0].c_link)}>
                      <View style={[Estilos.BotaoEsq]}>
                      <ImageResize source={require('../assets/icon_coroa.png')} width={Dimensions.get('window').width/12} /> 
                      </View>
                      <View style={[Estilos.BotaoDir]}><Text style={[Estilos.TextoCamarote]}>INGRESSOS</Text></View>
                  </TouchableOpacity>
              </View>

              
              {/*
              <View style={{justifyContent:'center', alignItems:"center",marginTop:Dimensions.get('window').width/20}}>
                  <TouchableOpacity style={[Estilos.BotaoCamarote]} onPress={()=>Linking.openURL('mailto:robson@audiosp.com.br')}>
                      <View style={[Estilos.BotaoEsq]}>
                      <ImageResize source={require('../assets/icon_ticket.png')} width={Dimensions.get('window').width/12} /> 
                      </View>
                      <View style={[Estilos.BotaoDir]}><Text style={[Estilos.TextoCamarote]}>CAMAROTE</Text></View>
                  </TouchableOpacity>
              </View>
              */}
              
              
              {tb_banner[0].id_tb_camarote == 0?
              <View style={{justifyContent:'center', alignItems:"center",marginTop:Dimensions.get('window').width/20}}
               onLayout={event => {
                const layout = event.nativeEvent.layout;
                setc_p_y(layout.y);
                
              }}
              >
                  <TouchableOpacity style={[Estilos.BotaoCamarote]} onPress={
                    ()=>{
                      setc_mostra(true);
                      setc_mostra_sucesso(false);
                      //scrollView.scrollTo({y:617});
                     // this.flatList.scrollToEnd({animated: true});
                     setTimeout(() => {
                      this.flatList.scrollTo({y:p_y});
                     }, 200);
                      
                    }
                    
                  }>
                      <View style={[Estilos.BotaoEsq]}>
                      <ImageResize source={require('../assets/icon_ticket.png')} width={Dimensions.get('window').width/12} /> 
                      </View>
                      <View style={[Estilos.BotaoDir]}><Text style={[Estilos.TextoCamarote]}>CAMAROTE</Text></View>
                  </TouchableOpacity>
              </View>
              :
              null
              }



          {c_mostra?

              <View style={{alignItems:'center', justifyContent:'center', marginTop:Dimensions.get('window').height/25,width:'100%', backgroundColor:'#f9f9f9'}}>

                    <View style={[Estilos.MesFora,{paddingTop:Dimensions.get('window').height/50}]}><Text style={[Estilos.MesTexto1]}>RESERVA DE CAMAROTE</Text></View>
                    <View style={[Estilos.CampoFormFora,{paddingTop:Dimensions.get('window').height/50}]}>
                            <Text style={[Estilos.LabelCampo,{}]}>Nome</Text>
                            
                            <TextInput
                                    keyboardType='email-address'
                                    style={Estilos.campoForm}
                                    placeholderTextColor = "#000"
                                    autoCapitalize = "none"
                                    value={c_nome} 
                                    onChangeText={text =>setc_nome(text)}
                                    onSubmitEditing={event => emailInput.current.focus()}
                                    ref={nomeInput}
                                    returnKeyType={ "next" }
                                    blurOnSubmit={ false }
                                    />
                                    { 
                                    v_nome && 
                                    <Text style={[Estilos.LabelCampoValida,{}]}>
                                        {
                                    m_nome
                            }</Text> }
                    </View>
                    
                    <View style={[Estilos.CampoFormFora,{}]}>
                            <Text style={[Estilos.LabelCampo,{}]}>E-mail</Text>
                            
                            <TextInput
                                    keyboardType='email-address'
                                    style={Estilos.campoForm}
                                    placeholderTextColor = "#000"
                                    autoCapitalize = "none"
                                    value={c_email} 
                                    onChangeText={text =>setc_email(text)}
               
                                    onSubmitEditing={event => this.telefoneInput.getElement().focus()}
                                    ref={emailInput}
                                    returnKeyType={ "next" }
                                    blurOnSubmit={ false }
                                    />
                                    { 
                                    v_email && 
                                    <Text style={[Estilos.LabelCampoValida,{}]}>
                                        {
                                    m_email
                            }</Text> }
                    </View>

                    <View style={[Estilos.CampoFormFora,{}]}>
                            <Text style={[Estilos.LabelCampo,{}]}>Telefone</Text>
                            <TextInputMask
                    type={'custom'}
                    maxLength={14}
                    style={Estilos.campoForm}
                    placeholderTextColor = "#000"
                    keyboardType='numeric'
                    options={{
                      /**
                       * mask: (String | required | default '')
                       * the mask pattern
                       * 9 - accept digit.
                       * A - accept alpha.
                       * S - accept alphanumeric.
                       * * - accept all, EXCEPT white space.
                      */
                      mask: '99-999999999'
                    }}
                    value={c_telefone}
                    onChangeText={text =>setc_telefone(text)}
                    onSubmitEditing={event => mensagemInput.current.focus()}
                    ref={ref => this.telefoneInput = ref}
                    returnKeyType={ "done" }
                    //blurOnSubmit={ false }
                    />



                                    { 
                                    v_telefone && 
                                    <Text style={[Estilos.LabelCampoValida,{}]}>
                                        {
                                    m_telefone
                            }</Text> }
                    </View>

                    <View style={[Estilos.CampoFormFora,{}]}>
                            <Text style={[Estilos.LabelCampo,{}]}>Mensagem</Text>
                            
                            <TextInput
                                    keyboardType='email-address'
                                    style={Estilos.campoForm}
                                    placeholderTextColor = "#000"
                                    autoCapitalize = "none"
                                    value={c_mensagem} 
                                    onChangeText={text =>setc_mensagem(text)}
                                    //onSubmitEditing={event => senhaInput.current.focus()}
                                    ref={mensagemInput}
                                    returnKeyType={ "done" }
                                    blurOnSubmit={ false }
                                    onSubmitEditing={Keyboard.dismiss}
                                    />
                                    { 
                                    v_mensagem && 
                                    <Text style={[Estilos.LabelCampoValida,{}]}>
                                        {
                                    m_mensagem
                            }</Text> }
                    </View>

                    
                    <View style={{paddingBottom:Dimensions.get('window').height/50, width:"100%", justifyContent:'center', alignItems:'center'}}>
                      <TouchableOpacity style={[Estilos.ForaBotaoNotificacaoBranco,{marginTop:Dimensions.get('window').height/40}]}
                      onPress={()=>Submit(tb_banner[0].c_reserva_camarote, tb_banner[0].c_titulo)} keyboardShouldPersistTaps={'handled'}>
                          <Text style={Estilos.TextoBotaoNotificao}>ENVIAR</Text>
                      </TouchableOpacity>
                    </View>

              </View>

              :
                            null
              }

            {c_mostra_load?
              <View style={{alignItems:'center', justifyContent:'center', marginTop:Dimensions.get('window').height/25,width:'100%',height:Dimensions.get('window').height/10,}}
              >
               <SpinnerNew style={[Estilos.spinner]} isVisible={true} size={Dimensions.get('window').width/10} type={"Wave"} color={props.cor}/>
              </View>
              :
              null
            }

            {c_mostra_sucesso?
              <View style={{alignItems:'center', justifyContent:'center', marginTop:Dimensions.get('window').height/25,width:'100%',height:Dimensions.get('window').height/10,}}
              >
                <Text style={[Estilos.LabelCampo,{}]}>Mensagem enviada com sucesso!</Text>
              </View>
              :
              null
            }


              <View style={{justifyContent:'center', alignItems:"center",marginTop:Dimensions.get('window').width/10, width:'100%'}}>
                  <View style={{width:'90%'}}>
                  <Text style={[Estilos.TextoEvento]}><TextoNegrito>DATA</TextoNegrito> {tb_banner[0].c_titulo}</Text>


                  {
                    !tb_banner[0].c_hora_abertura_inicio_show == ''
                    ?
                  <Text style={[Estilos.TextoEvento]}><TextoNegrito>HORA</TextoNegrito> {tb_banner[0].c_hora_abertura_inicio_show}</Text>
                    :
                    null
                  }

                  {
                    !tb_banner[0].c_classificacao == ''
                    ?
                    <Text style={[Estilos.TextoEvento]}><TextoNegrito>CLASSIFICAÇÃO</TextoNegrito> {tb_banner[0].c_classificacao}</Text>
                    :
                    null
                  }



                 
                  <Text style={[Estilos.TextoEvento]}><TextoNegrito>LOCAL</TextoNegrito> AV. FRANCISCO MATARAZZO, 694 - SÃO PAULO / SP</Text>
                  <Text style={[Estilos.TextoEvento]}><TextoNegrito>BILHETERIA</TextoNegrito> SEG A SÁB - 13H ÀS 20H</Text>
                  <Text style={[Estilos.TextoEvento]}><TextoNegrito>FORMAS DE PAGAMENTO</TextoNegrito> DINHEIRO, CARTÕES DE CRÉDITO E DÉBITO.</Text>
                  { tb_banner[0].c_texto != ''?
                  <Text style={[Estilos.TextoEvento1]}><TextoNegrito>SOBRE A ATRAÇÃO</TextoNegrito> {tb_banner[0].c_texto}</Text>
                  :
                  null
                  }



                  {

            tb_banner[0].c_id_youtube != ''?
                props.isFocused ?

                  Platform.OS === 'ios'?
                  <YouTube
                  //ref={this._youTubeRef}
                  // You must have an API Key for the player to load in Android
                  apiKey="YOUR_API_KEY"
                  // Un-comment one of videoId / videoIds / playlist.
                  // You can also edit these props while Hot-Loading in development mode to see how
                  // it affects the loaded native module
                  videoId={tb_banner[0].c_id_youtube}
                  // videoIds={['uMK0prafzw0', 'qzYgSecGQww', 'XXlZfc1TrD0', 'czcjU1w-c6k']}
                  // playlistId="PLF797E961509B4EB5"
                  play={isPlaying}
                  //loop={this.state.isLooping}
                  fullscreen={false}
                  controls={1}
                  style={[
                    { width: Dimensions.get('window').width/100*90, height: (Dimensions.get('window').width/100*90) * 9 / 16, backgroundColor:"#000000",},
                    styles.player,
                  ]}
                  
                  />
                  :
                  <WebView source={{ uri: `https://audiosp.com.br/app/android/youtube_aovivo.html?tipo=1&id_video=${tb_banner[0].c_id_youtube}` }} 
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
                  style={{width: Dimensions.get('window').width/100*90, height: (Dimensions.get('window').width/100*90) * 9 / 16,backgroundColor:"#000000",}}
                  onLoadEnd={()=>{
                 
                        setTimeout(() => { 
                          try {
                            videoref.current.injectJavaScript('stopVideo();');
                          } catch (error) {
                            
                          }
                          
                         }, 300);
                        setTimeout(() => { 
                          try {
                            videoref.current.injectJavaScript('unMutePlyr();');
                          } catch (error) {
                            
                          }
                          
                         }, 1000);
                     
                        
                     
                 
                  }}
                  />
                :
                null
                :
                null
                  }
                  </View>
              </View>

              <View style={{justifyContent:'center', alignItems:"center",width:'100%', backgroundColor:'#f9f9f9'}}>
                  <View style={{width:'90%', marginTop:Dimensions.get('window').width/15,marginBottom:Dimensions.get('window').width/15 }}>
                  <Text style={[Estilos.TextoEvento1]}><TextoNegrito>ITENS PROIBIDOS</TextoNegrito> Câmera fotográfica profissional ou semi profissional (câmeras grandes com zoom externo ou que trocam de lente), filmadoras de vídeo, gravadores de audio, canetas laser, qualquer tipo de tripé, pau de selfie, camisas de time, correntes e cinturões, garrafas plásticas, bebidas alcóolicas, substâncias tóxicas, fogos de artifício, inflamáveis em geral, objetos que possam causar ferimentos, armas de fogo, armas brancas, copos de vidro e vidros em geral, frutas inteiras, latas de alumínio, guarda-chuva, jornais, revistas, bandeiras e faixas, capacetes de motos e similares.</Text>
                  <Text style={[Estilos.TextoEvento1]}><TextoNegrito>ENTRADA</TextoNegrito> De acordo com a Lei Federal 12.933 e o Decreto 8.537 tem direito a meia entrada estudantes portadores da carteira de identificação estudantil (CIE) expedidas nos termos da lei, pessoas com deficiência, inclusive seu acompanhante quando necessário, sendo que terá direito a este beneficio no evento desde que comprove estar nesta condição, jovens de 15 a 29 anos cadastrados no CadÚnico e cuja renda familiar mensal seja de até 2 salários mínimos, a cota reservada de ingressos será de 40% do total de ingressos disponíveis para a venda em cada setor, além de professores da rede estadual e municipal portadores da carteira funcional emitida pela Secretaria da Educação, Idosos com idade igual ou superior a 60 anos.</Text>
                  </View>
              </View>


          <Rodape navigation={props.navigation} ></Rodape>
      


            
          </View>

            </ScrollView>
        </SafeAreaView>
        
        </>
    );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });
 


const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
    
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,

  })(ProgramacaoInterna);
 export default withNavigationFocus(LoginConnect);