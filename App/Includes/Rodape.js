import React , { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Share from 'react-native-share';
import ImageResize from 'react-native-scalable-image';
import Swiper2 from 'react-native-swiper';
import Estilos from '../Estilos';
import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
} from '../Actions/LoginActions';
import {
  Grayscale,
  Sepia,
  Tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  contrast,
  saturate
} from 'react-native-color-matrix-image-filters';
//GLOBAIS
import Erro from './Erro';
import Load from './Load';
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
from './Funcoes';


import ItensBanner from '../ItensBanner';

Rodape.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
   null
  }
}

function Rodape(props) {


  function TextoBilheteriaBold(props){
    return <Text style={[Estilos.TextoBilheteriaBold]}>{props.children}</Text>
    }

    

  function AbreProgramacao(item){
    setGray(false);
    setTimeout(() => {
      props.navigation.navigate('ProgramacaoInterna',{
        item:item
      })
    }, 200);
  }

    //GLOBAIS
    const { navigate } = props.navigation;
    const [falha, setFalha] = useState(false);
    const [load, setLoad] = useState(false);
    //GLOBAIS

    const [pagina, setPagina] = useState(false);
    const [data, setData] = useState([]);
    const [datastatus, setDatastatus] = useState(false);
    const [gray, setGray] = useState(true);

    useEffect(() => {
           //console.log(props.adicional);
    },[]);

    return (
    <>     
          <View style={{width:"100%",  backgroundColor:'#000000',alignItems:'center', justifyContent:'center', paddingTop:Dimensions.get('window').width/15}}>
            <View style={{ flexDirection:"row", alignItems:'center', justifyContent:'center', width:"80%", paddingTop:Dimensions.get('window').width/40,  }}>
              <TouchableOpacity style={[Estilos.itemRedeRodape]} onPress={()=>AbreURL('https://www.facebook.com/audioparties')}><ImageResize source={require('../../assets/roda1.png')} width={Dimensions.get('window').width/7} /></TouchableOpacity>
              <TouchableOpacity style={[Estilos.itemRedeRodape]} onPress={()=>AbreURL('https://twitter.com/Aaudio_')}><ImageResize source={require('../../assets/roda2.png')} width={Dimensions.get('window').width/7} /></TouchableOpacity>
              <TouchableOpacity style={[Estilos.itemRedeRodape]} onPress={()=>AbreURL('https://instagram.com/audio')}><ImageResize source={require('../../assets/roda3.png')} width={Dimensions.get('window').width/7} /></TouchableOpacity>
              <TouchableOpacity style={[Estilos.itemRedeRodape]} onPress={()=>AbreURL('https://open.spotify.com/user/audioclub')}><ImageResize source={require('../../assets/roda4.png')} width={Dimensions.get('window').width/7} /></TouchableOpacity>
              {/*<TouchableOpacity style={[Estilos.itemRedeRodape]} onPress={()=>AbreURL('http://www.uol.com.br')}><ImageResize source={require('../assets/roda5.png')} width={Dimensions.get('window').width/7} /></TouchableOpacity>*/}
            </View>

            <View style={[Estilos.BarraBranca]}>
            </View>

            <View style={[Estilos.TextoBilheteriaFora]}>
              <Text style={[Estilos.TextoBilheteria]}>
              Horário da bilheteria <TextoBilheteriaBold>Seg à Sáb - 13h às 20h</TextoBilheteriaBold>{'\n'}
              telefone <TextoBilheteriaBold>11 3862-8279</TextoBilheteriaBold>
              </Text>
            </View>

            <View style={[Estilos.BarraBranca]}>
            </View>

            <View style={[Estilos.TextoEnderecoFora]}>
                <View style={{flex:1, alignItems:'center' }}>
                <ImageResize source={require('../../assets/logo_inicio.png')} width={Dimensions.get('window').width/3} />
                </View>
                <View style={{flex:1, alignItems:'center', marginTop:Dimensions.get('window').height/50}}>
                  <Text style={[Estilos.TextoCNPJ,{color:'#FFFFFF'}]}>
                  AUDIO PROMOÇÕES E EVENTOS LTDA.{'\n'}
                  CNPJ/MF n° 19.553.418/0001-54{'\n'}
                  Av. Francisco Matarazzo, 694{'\n'}
                  São Paulo/SP | CEP 050001-000{'\n'}
                  </Text></View>
            </View>
          </View>
     
    </>);
    //break;

};


const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
    
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,

  })(Rodape);
 export default LoginConnect;