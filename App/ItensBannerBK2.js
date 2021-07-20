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
import Share from 'react-native-share';
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

import { 
  //GLOBAIS
  ListaDados,
  PostaDados,
  Testelala,
  Compartilhar,
  Navega,
  //GLOBAIS
}
//FUNCOES
from './Includes/Funcoes';

ItensBanner.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
   null
  }
}

function ItensBanner(props) {


    

    function AbreProgramacao(item){
        setGray(false);
        setTimeout(() => {
          // alert(item.id_tb_banner);
          //Navega("ProgramacaoInterna",props.navigation);
          props.navigation.navigate('ProgramacaoInterna',{
            item:item
          })
          setGray(true);
        }, 100);
    }


    function TextoDiaSemana(props){
    return <Text style={[Estilos.DiasemanaItensBanner]}>{props.children}</Text>
    }

    function AbreGaleria(id, titulo){
     // alert(id);
     props.navigation.navigate('EventosInterna',{
       id_tb_galeria:id,
       titulo:titulo
     })
    }

    //GLOBAIS
    const { navigate } = props.navigation;
    const [falha, setFalha] = useState(false);
    const [load, setLoad] = useState(false);
    //GLOBAIS

    const [pagina, setPagina] = useState(false);
    const [data, setData] = useState([]);
    const [datastatus, setDatastatus] = useState(false);
    const [largura, setLargura] = useState(1);
    const [gray, setGray] = useState(true);

    useEffect(() => {
           
    },[]);


    function onLayout(e){
        
       /*
        this.setState({
          width: e.nativeEvent.layout.width,
          height: e.nativeEvent.layout.height,
          x: e.nativeEvent.layout.x,
          y: e.nativeEvent.layout.y
        })
        */
        //alert(e.nativeEvent.layout.width.toString());
        setLargura(e.nativeEvent.layout.width);
       // alert(largura);
      }


    //https://audiosp.com.br/upload/galeria/499/audio-Resenha-Boa-29-11-19-foto-Leandro-Godoi-1.JPG
    return (
       
    <>
    <View key={props.item.id_tb_banner} style={{flex:1}}>



          <TouchableOpacity style={{zIndex:1}} onPress={()=>AbreProgramacao(props.item)} style={{width:Dimensions.get('window').width, height:290}}>
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
            zIndex:1000,
      
          }}>
          <View style={{width:Dimensions.get('window').width, height:Dimensions.get('window').width/1.25}}>
          <Grayscale>
          <ImageResize source={{uri:'https://audiosp.com.br/upload/banner/'+props.item.id_tb_banner+'c.'+props.item.c_extensao1}} width={Dimensions.get('window').width} />
          </Grayscale>
          </View>
          </ImageBackground>
          :

          <ImageResize source={{uri:'https://audiosp.com.br/upload/banner/'+props.item.id_tb_banner+'c.'+props.item.c_extensao1}} width={Dimensions.get('window').width} />

          }

          </TouchableOpacity>


          <View style={{backgroundColor:'#000000', justifyContent:'center', alignItems:'flex-start', height:130, paddingLeft:Dimensions.get('window').width/20, paddingRight:Dimensions.get('window').width/20}}>
              <View style={{ flexDirection:"row", justifyContent:"flex-start", alignItems:'flex-start', }}>
                <View style={{justifyContent:"flex-start", alignItems:'flex-start'}}>
                    <Text style={[Estilos.DiaItensBanner,{backgroundColor:'#555555'}]}>{props.item.dia}</Text>
                </View>
                <View style={{marginLeft:5}}>
                    <Text style={[Estilos.MesItensBanner,{backgroundColor:'#555555'}]}>{props.item.mes} <TextoDiaSemana>{props.item.diasemana}</TextoDiaSemana></Text>
                    <View style={{width:'100%',  height:5, alignItems:'center', }}  onLayout={onLayout}>
                    <ImageResize source={require('../assets/barra_itens_agenda.png')} width={largura} />
                    </View>
                </View>
              </View>
              <View style={{width:Dimensions.get('window').width/100*85, marginRight:10}}><Text style={[Estilos.TituloBanner2,{backgroundColor:'#555555'}]}>
                {props.item.c_titulo}</Text>
              </View>
              

          </View>
       
          
          
    </View>
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

  })(ItensBanner);
  export default React.memo(LoginConnect);