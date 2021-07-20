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
  TouchableOpacityBase,
} from 'react-native';
import Estilos from './Estilos';
import { WebView } from 'react-native-webview';
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



FacaSeuEvento.navigationOptions = ({ navigation }) => {
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







function FacaSeuEvento(props) {


  const videoref = useRef();



  function TextoDentro(props){
    return <Text style={[Estilos.TextoBilheteriaBold,{color:'#000000'}]}>{props.children}</Text>
    }



  function TextoDentro2(props){
    return <Text style={[Estilos.TextoBilheteriaBoldX,{color:'#000000'}]}>{props.children}</Text>
    }

  



    return (
    <>
         <SafeAreaView style={[{flex:1,justifyContent:'center',alignItems:'center'  }]}>
            <ScrollView style={{flex:1}}>


            <View>




                <View style={{flex:1}}>
                <View style={{justifyContent:'center',alignItems:'flex-start', paddingBottom:25}}>



                  <View style={{height: Dimensions.get('window').width * 9 / 16}}>

                  {Platform.OS === 'ios'?
                  <WebView source={{ uri: 'https://audiosp.com.br/app/ios/novo/vimeo_faca.html?tipo=1' }} 
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

                  <WebView source={{ uri: 'https://audiosp.com.br/app/android/vimeo_aovivo_faca.html?tipo=1' }} 
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
                }

                  </View>





                <View style={{flex:1, marginLeft:10, marginRight:10, marginTop:15}}>


                  <View style={{flexDirection:'row'}}>
                    <View style={{marginRight:10, justifyContent:'center'}}>
                      <Text style={[Estilos.ForaProgramacaoTitulo]}>STAGE</Text>
                    </View>
                    <View>
                    <ImageResize  source={require('../assets/ico_stage_cinza.png')} width={(Dimensions.get('window').width/100)*10} />
                    </View>
                    </View>
                  <View>
                  <View style={{ width:"90%", marginBottom:Dimensions.get('window').width/40,marginTop:Dimensions.get('window').width/40,}}>
                    <ImageBackground
                    source={require('../assets/barra_tit_eventos.jpg')}
                    style={{
                      height:Dimensions.get('window').width/50,
                      resizeMode: 'contain',
                      flex:1
                    }}>
                    <View style={{width:Dimensions.get('window').width/2, height:Dimensions.get('window').width/60,  }}></View>
                        </ImageBackground>
                    </View>
                    </View>
                    <View>
                      <Text style={[Estilos.TextoEvento1]}>A capacidade é de 3.200 pessoas em pé, entre pista, mezanino e camarotes. No formato auditório, 1.000 pessoas sentadas - e diversas possibilidades de layout, para atender a demanda pontual do evento.</Text>
                    </View>
                    
                    <View>
                      <Text style={[Estilos.TextoEvento1]}><TextoDentro>CAPACIDADE</TextoDentro>  3.200 </Text>
                    </View>
                    
                    <View>
                      <Text style={[Estilos.TextoEvento1]}><TextoDentro>FORMATO AUDITÓRIO </TextoDentro>  1000 </Text>
                    </View>
                
                    <View>
                      <Text style={[Estilos.TextoEvento1]}><TextoDentro>DIVERSAS POSSIBILIDADES LAYOUT</TextoDentro></Text>
                    </View>
                  </View>
                </View>
                <View style={{marginTop:0}}>
                        <ImageResize  source={require('../assets/stage_02.jpg')} width={(Dimensions.get('window').width)} />
                </View>








                <View style={{justifyContent:'center',alignItems:'flex-start', paddingTop:10, paddingBottom:25}}>
                  <View style={{flexDirection:'row'}}>
                    <View style={{marginRight:10}}>
                      <Text style={[Estilos.ForaProgramacaoTitulo]}>DECK</Text>
                    </View>
                    <View>
                    <ImageResize  source={require('../assets/ico_deck_cinza.png')} width={(Dimensions.get('window').width/100)*10} />
                    </View>
                    </View>
                    <View>
                    <View style={{ width:"90%", marginBottom:Dimensions.get('window').width/40,marginTop:Dimensions.get('window').width/40,}}>
                    <ImageBackground
                    source={require('../assets/barra_tit_eventos.jpg')}
                    style={{
                      height:Dimensions.get('window').width/50,
                      resizeMode: 'contain',
                      flex:1
                    }}>
                    <View style={{width:Dimensions.get('window').width/2, height:Dimensions.get('window').width/60,  }}></View>
                        </ImageBackground>
                    </View>
                    </View>
                    <View>
                      <Text style={[Estilos.TextoEvento1]}>
                      Uma das áreas abertas mais generosas e charmosas de São Paulo. Rodeada de uma linda seringueira, o espaço comporta até 500 pessoas.
                      </Text>
                    </View>
                    
                    <View>
                      <Text style={[Estilos.TextoEvento1]}><TextoDentro>CAPACIDADE</TextoDentro>  500 </Text>
                    </View>
                    

                    <View style={{marginTop:10}}>
                       <ImageResize  source={require('../assets/deck_04.jpg')} width={(Dimensions.get('window').width)} />
                    </View>
                </View>








                <View style={{justifyContent:'center',alignItems:'flex-start', paddingTop:10, paddingBottom:25}}>
                  <View style={{flexDirection:'row'}}>
                    <View style={{marginRight:10}}>
                      <Text style={[Estilos.ForaProgramacaoTitulo]}>CLUB</Text>
                    </View>
                    <View>
                    <ImageResize  source={require('../assets/ico_club_cinza.png')} width={(Dimensions.get('window').width/100)*10} />
                    </View>
                    </View>
                    <View>
                    <View style={{ width:"90%", marginBottom:Dimensions.get('window').width/40,marginTop:Dimensions.get('window').width/40,}}>
                    <ImageBackground
                    source={require('../assets/barra_tit_eventos.jpg')}
                    style={{
                      height:Dimensions.get('window').width/50,
                      resizeMode: 'contain',
                      flex:1
                    }}>
                    <View style={{width:Dimensions.get('window').width/2, height:Dimensions.get('window').width/60,  }}></View>
                        </ImageBackground>
                    </View>
                    </View>
                    <View>
                      <Text style={[Estilos.TextoEvento1]}>
                      Criado para atender os eventos mais exclusivos e festas intimistas, comporta até 1.000 pessoas e com diversas possibilidades de layout.
                      </Text>
                    </View>
                    
                    <View>
                      <Text style={[Estilos.TextoEvento1]}><TextoDentro>DIVERSAS POSSIBILIDADES LAYOUT</TextoDentro>  </Text>
                    </View>
                    

                    <View style={{marginTop:10}}>
                       <ImageResize  source={require('../assets/club_03.jpg')} width={(Dimensions.get('window').width)} />
                    </View>
                </View>






                <View style={{justifyContent:'center',alignItems:'flex-start', paddingTop:10, paddingBottom:25}}>
                  <View style={{flexDirection:'row'}}>
                    <View style={{marginRight:10}}>
                      <Text style={[Estilos.ForaProgramacaoTitulo]}>GARDEN FOOD PARK</Text>
                    </View>
                    <View>
                    <ImageResize  source={require('../assets/ico_club_cinza.png')} width={(Dimensions.get('window').width/100)*10} />
                    </View>
                    </View>
                    <View>
                    <View style={{ width:"90%", marginBottom:Dimensions.get('window').width/40,marginTop:Dimensions.get('window').width/40,}}>
                    <ImageBackground
                    source={require('../assets/barra_tit_eventos.jpg')}
                    style={{
                      height:Dimensions.get('window').width/50,
                      resizeMode: 'contain',
                      flex:1
                    }}>
                    <View style={{width:Dimensions.get('window').width/2, height:Dimensions.get('window').width/60,  }}></View>
                        </ImageBackground>
                    </View>
                    </View>
                    <View>
                      <Text style={[Estilos.TextoEvento1]}>
                      Ambiente externo, que pode ser utilizado como apoio, extenção do evento, área de convivência e alimentação.
                      </Text>
                    </View>
                    
                    <View>
                      <Text style={[Estilos.TextoEvento1]}><TextoDentro>CAPACIDADE</TextoDentro>  500</Text>
                    </View>
                    

                    <View style={{marginTop:10}}>
                       <ImageResize  source={require('../assets/garden_01.jpg')} width={(Dimensions.get('window').width)} />
                    </View>
                </View>











                <View style={{justifyContent:'center',alignItems:'flex-start', paddingTop:10, paddingBottom:25}}>
                  <View style={{flexDirection:'row'}}>
                    <View style={{marginRight:10}}>
                      <Text style={[Estilos.ForaProgramacaoTitulo]}>PAVILION</Text>
                    </View>
                    <View>
                    <ImageResize  source={require('../assets/ico_club_cinza.png')} width={(Dimensions.get('window').width/100)*10} />
                    </View>
                    </View>
                    <View>
                    <View style={{ width:"90%", marginBottom:Dimensions.get('window').width/40,marginTop:Dimensions.get('window').width/40,}}>
                    <ImageBackground
                    source={require('../assets/barra_tit_eventos.jpg')}
                    style={{
                      height:Dimensions.get('window').width/50,
                      resizeMode: 'contain',
                      flex:1
                    }}>
                    <View style={{width:Dimensions.get('window').width/2, height:Dimensions.get('window').width/60,  }}></View>
                        </ImageBackground>
                    </View>
                    </View>
                    <View>
                      <Text style={[Estilos.TextoEvento1]}>
                      Galpão multiuso com 3.500m² que pode ser anexado ao evento através de infinitas possibilidades.
                      </Text>
                    </View>
                    
                    <View>
                      <Text style={[Estilos.TextoEvento1]}><TextoDentro>ÁREA MULTIUSO</TextoDentro>  3.500 m²</Text>
                    </View>
                    

                    <View style={{marginTop:10}}>
                       <ImageResize  source={require('../assets/pavilion_03.jpg')} width={(Dimensions.get('window').width)} />
                    </View>
                </View>






                <View style={{justifyContent:'center',alignItems:'flex-start', paddingTop:0, paddingBottom:25}}>

                    <View style={{flexDirection:'row'}}>
                      <View style={{marginRight:10}}><ImageResize  source={require('../assets/ico_tel.png')} width={(Dimensions.get('window').height/20)} /></View>
                      <View>
                        <Text style={[Estilos.ForaProgramacaoTitulo]}>CONTATO</Text>
                        <TouchableOpacity
                        onPress={
                          ()=>AbreURL('tel:11965312614')
                        }
                      
                        style={[],{}}><Text style={[Estilos.TextoEvento1X]}><TextoDentro2>11 96531-2614</TextoDentro2></Text></TouchableOpacity>
                        
                        <TouchableOpacity
                          onPress={
                            ()=>AbreURL('tel:1138628279')
                          }
                        
                        style={[],{}}><Text style={[Estilos.TextoEvento1X]}><TextoDentro2>11 3862-8279</TextoDentro2></Text></TouchableOpacity>
                        
                        <TouchableOpacity 
                        onPress={
                          ()=>AbreURL('mailto:robson@audio.com.br')
                        }
                        
                        style={[],{}}><Text style={[Estilos.TextoEvento1X]}><TextoDentro2>robson@audiosp.com.br</TextoDentro2></Text></TouchableOpacity>
                   
                        
                          
                      
                      </View>
                      
                      
                    </View>
                    
                </View>




              </View>
              </View>


            </ScrollView>
                
     

   

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


  })(FacaSeuEvento);
 export default LoginConnect;