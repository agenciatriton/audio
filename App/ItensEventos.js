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
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ImageResize from 'react-native-scalable-image';
import Estilos from './Estilos';
import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
} from './Actions/LoginActions';
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
import Erro from './Includes/Erro';
import Load from './Includes/Load';
//GLOBAIS

ItensEventos.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
   null
  }
}

function ItensEventos(props) {


    function AbreGaleria(id, titulo){
     // alert(id);
     setGray(false);
     setTimeout(() => {
      props.navigation.navigate('EventosInterna',{
        id_tb_galeria:id,
        titulo:titulo
      })
      setGray(true);
     }, 50);
     
     
    }


    const [gray, setGray] = useState(true);

    //GLOBAIS
    const { navigate } = props.navigation;
    const [falha, setFalha] = useState(false);
    const [load, setLoad] = useState(false);
    //GLOBAIS

    const [pagina, setPagina] = useState(false);
    const [data, setData] = useState([]);
    const [datastatus, setDatastatus] = useState(false);
    
    useEffect(() => {
           
    },[]);


    //https://audiosp.com.br/upload/galeria/499/audio-Resenha-Boa-29-11-19-foto-Leandro-Godoi-1.JPG
    return (
    <>
    <TouchableOpacity onPress={()=>AbreGaleria(props.item.id_tb_galeria, props.item.c_titulo)} style={{width:'100%', flex:1,  padding:Dimensions.get('window').width/50,}} >
{/* 
     <ImageBackground
          source={{uri:'https://audiosp.com.br/upload/galeria/'+props.item.id_tb_galeria+'/'+props.item.c_foto}}
          style={{
            alignItems:'stretch',
            justifyContent: 'center',
            resizeMode: 'contain',
            justifyContent:'center',
            alignItems:'center',
            zIndex:1000
          }}>
            <View style={{width:'100%', height:Dimensions.get('window').width/3.3}}></View>
      </ImageBackground>
*/}

          {
          gray === true
          ?
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
          <View style={{width:'100%', height:Dimensions.get('window').width/3.3}}>
          <Grayscale>
            <Image source={{uri:'https://audiosp.com.br/upload/galeria/'+props.item.id_tb_galeria+'/'+props.item.c_foto}}  style={{width:'100%', height:Dimensions.get('window').width/3.3}}></Image>
        </Grayscale>
        </View>
        </ImageBackground>
        
          :

          <Image source={{uri:'https://audiosp.com.br/upload/galeria/'+props.item.id_tb_galeria+'/'+props.item.c_foto}}  style={{width:'100%', height:Dimensions.get('window').width/3.3}}></Image>


        
          }


      <View style={{flexDirection:'row', }}>
        <View style={{width:'60%', alignItems:'center', justifyContent:'center',}}>
              <ImageBackground
              source={require('../assets/barra_tit_eventos.jpg')}
              style={{
                width:'100%', height:Dimensions.get('window').width/60,
                resizeMode: 'contain',
              
            }}>
              <View style={{width:'100%', height:Dimensions.get('window').width/60,  }}></View>
            </ImageBackground>
        </View>
        <View style={{width:'40%', alignItems:'flex-end', justifyContent:'center', height:Dimensions.get('window').height/25}}>
                <Text style={Estilos.DataEvento}>{props.item.c_data}</Text>
        </View>
      </View>

      <View><Text style={[Estilos.TituloEvento]}>{props.item.c_titulo}</Text></View>

    </TouchableOpacity>
  
    {/* 
      <View style={{width:'100%', flex:1,  padding:Dimensions.get('window').width/50,}} >
        <ImageResize source={{uri:'https://audiosp.com.br/upload/galeria/'+props.item.id_tb_galeria+'/'+props.item.c_foto}} width={Dimensions.get('window').width/2.2} />
        <View>
        </View>
      </View>
    */}
    </>



);
    //break;

};

const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
    
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,

  })(ItensEventos);
  export default React.memo(LoginConnect);