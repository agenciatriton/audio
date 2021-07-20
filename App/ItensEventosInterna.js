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

//GLOBAIS
import Erro from './Includes/Erro';
import Load from './Includes/Load';
//GLOBAIS

ItensEventosInterna.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
   null
  }
}

function ItensEventosInterna(props) {


    
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



    {
       props.item.status == 'fim'
       ?
null

     :
     
     props.item.tamanho == 'largura'
     ?
    
  <TouchableOpacity  style={{width:'100%', flex:1,  }} >
     <ImageBackground
          source={{uri:'https://audiosp.com.br/upload/galeria/'+props.item.id_tb_galeria+'/'+props.item.c_aquivo}}
          style={{
            alignItems:'stretch',
            justifyContent: 'center',
            resizeMode: 'contain',
            justifyContent:'center',
            alignItems:'center',
            zIndex:1000,
            tintColor: 'gray'
          }}>
          
     
     
            <View style={{width:'100%', height:Dimensions.get('window').width/1.5,}}></View>


 
      </ImageBackground>



      <View style={{width:'100%', height:Dimensions.get('window').width/1.5, position:'absolute'}}>
      <ImageBackground
          source={require('../assets/foto_padrao.jpg')}
          style={{
            alignItems:'stretch',
            justifyContent: 'center',
            resizeMode: 'contain',
            justifyContent:'center',
            alignItems:'center',
            zIndex:1
          }}>
<View style={{width:'100%', height:Dimensions.get('window').width/1.5,}}></View>
       
        </ImageBackground>
        </View>



      </TouchableOpacity>
      :
        
      <TouchableOpacity  style={{width:'100%', flex:1,  }} >
   
      <ImageBackground
          source={{uri:'https://audiosp.com.br/upload/galeria/'+props.item.id_tb_galeria+'/'+props.item.c_aquivo}}
          style={{
            alignItems:'stretch',
            justifyContent: 'center',
            resizeMode: 'contain',
            justifyContent:'center',
            alignItems:'center',
            zIndex:1000
          }}>
          
            <View style={{width:'100%', height:Dimensions.get('window').width/0.7}}></View>

      </ImageBackground>

      <View style={{width:'100%', height:Dimensions.get('window').width/0.7, position:'absolute'}}>
      <ImageBackground
          source={require('../assets/foto_padrao_altura.jpg')}
          style={{
            alignItems:'stretch',
            justifyContent: 'center',
            resizeMode: 'contain',
            justifyContent:'center',
            alignItems:'center',
            zIndex:1
          }}>
<View style={{width:'100%', height:Dimensions.get('window').width/0.7,}}></View>
       
        </ImageBackground>
        </View>
      </TouchableOpacity>
        
     }
    {/* 

   
      <View style={{width:'100%', flex:1,  padding:Dimensions.get('window').width/50,}} >
        <ImageResize source={{uri:'https://audiosp.com.br/upload/galeria/'+props.item.id_tb_galeria+'/'+props.item.c_foto}} width={Dimensions.get('window').width/2.2} />
        <View>
        </View>
      </View>

       <ImageBackground
          source={{uri:'https://audiosp.com.br/upload/galeria/'+props.item.id_tb_galeria+'/'+props.item.c_aquivo}}
          style={{
            resizeMode: 'contain',
          }}>
            <View style={{width:Dimensions.get('window').width, height:Dimensions.get('window').width/1}}></View>
  </ImageBackground>


  

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

  })(ItensEventosInterna);
  export default React.memo(LoginConnect);