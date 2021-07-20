import React , { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Estilos from './Estilos';
import ImageResize from 'react-native-scalable-image';
import {NavigationApps,actions,googleMapsTravelModes, mapsTravelModes} from "react-native-navigation-apps";
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

  PromocoesGanhador.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
    <Header tipo={'PROMOÇÕES'} navigation={navigation}></Header>
  }
}

function PromocoesGanhador(props) {

    const { navigate } = props.navigation;
    const [para, set_para] = useState('nao');

//DIDMOUNT

  useEffect(() => {
    
  },[]);


    return (
        <>
  
        
        <View style={[, {backgroundColor:'#000000', flex:1, }]}>
         <ImageBackground source={require('../assets/notificacao_bg.jpg')} style={{width: '100%', height: '100%', flex:1, alignItems:'center', justifyContent:'center',backgroundColor:'#2e2e2e'}}>
             
         <ScrollView style={[{flex:1}]}>
           <View style={{width: '100%', flex:1, alignItems:'center', justifyContent:'center', paddingTop:30}}>
             <ImageResize source={require('../assets/logo_inicio.png')} width={Dimensions.get('window').width/2} />
              
             {/*<ImageResize source={require('../assets/bemvindo_icone.png')} width={Dimensions.get('window').width/3.7} style={{marginTop:0}} />*/}
            <View style={{paddingLeft:30, paddingRight:30}}>
              <Text style={[Estilos.TopicoInicio, Estilos.NotificacaoMargemTopo, {}]}>PARABENS VOCÊ GANHOU!</Text>
            </View>


             <Text style={[Estilos.TextoTituloPromo,{paddingLeft:Dimensions.get('window').width/20, paddingRight:Dimensions.get('window').width/20, paddingTop:Dimensions.get('window').width/20 }]}>
                {props.navigation.getParam('c_titulo', 'NO-ID')}{'\n'} 
             </Text>


             <Text style={[Estilos.TextoTituloPromoLight,{paddingLeft:Dimensions.get('window').width/20, paddingRight:Dimensions.get('window').width/20, }]}>
                {props.navigation.getParam('c_ganhador', 'NO-ID')}{'\n'} 
             </Text>
          

             <TouchableOpacity style={[Estilos.ForaBotaoNotificacao, Estilos.NotificacaoMargemTopo,{marginBottom:Dimensions.get('window').width/20}]}
             onPress={()=>{
          
              props.navigation.navigate('Home');
             
             }}>
                 <Text style={Estilos.TextoBotaoNotificao}>CONTINUAR</Text>
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
             </View>
              </ScrollView>
            
         </ImageBackground>
         </View>
         
         


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

  })(PromocoesGanhador);
 export default LoginConnect;