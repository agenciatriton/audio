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
  Edit_verifica_login,
  Edit_redireciona_login,
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
    Compartilhar,
    Navega,
    AbreURL,
    //GLOBAIS
  
    //LOCAIS
  
    //LOCAIS
  }
  //FUNCOES
  from './Includes/Funcoes';

ItensPromocoes.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
   null
  }
}

function ItensPromocoes(props) {


    function AbrePromocao(id, titulo,texto, c_extensao1, c_regra){
     // alert(id);
     setGray(false);
     setTimeout(() => {
      if(props.id_tb_user==null || props.id_tb_user==0 || props.id_tb_user==''){
        props.Edit_redireciona_login('Promocoes');
        props.Edit_verifica_login('LoginInicio');
        props.navigation.navigate('LoginVerifica',{
          mensagem:'Cadastre-se ou faça login para participar de nossas promoções.',
          retorno:'Promocoes',
        })
      }else{
        props.Edit_verifica_login('CadastroEdit');
        props.navigation.navigate('PromocoesInterna',{
          id_tb_promo:id,
          c_titulo:titulo,
          c_texto:texto,
          c_regra:c_regra,
          c_extensao1:c_extensao1,
        })
  
      }
      
      setGray(true);
     }, 100);
     
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


    return (
    <>
       { props.item.status == 'fim'?
       <SafeAreaView style={[{flex:1, alignItems:'center', justifyContent:'center'}]}>
       <View style={{flex:1, alignItems:'center', justifyContent:'center', flex:1, width:"100%", paddingTop:Dimensions.get('window').height/3.5}}>
           
       <ImageResize source={require('../assets/logo_load_preto.png')} width={Dimensions.get('window').width/2} style={{}} />
           <Text style={[Estilos.TextoNaoPossivelInt]}>Não existem promoções disponíveis no momento!</Text>
        </View>
        </SafeAreaView>
    :
     
    <View style={[{flex:1,width:'100%',marginBottom:Dimensions.get('window').width/25,marginTop:Dimensions.get('window').width/25,}]}>

 
    
        
        <TouchableOpacity style={{flex:1, marginLeft:Dimensions.get('window').width/25,marginRight:Dimensions.get('window').width/25, height:300 }}
        onPress={
            ()=>AbrePromocao(
                props.item.id_tb_promo,
                props.item.c_titulo,
                props.item.c_texto,
                props.item.c_extensao1,
                props.item.c_regra,
                )
        } >

        {
        gray === true
        ?
        

        <ImageBackground
        source={require('../assets/foto_padrao.jpg')}
        style={{
          height:300
          
        }}>
        <Grayscale>
        <ImageBackground source={{uri:'https://audiosp.com.br/upload/promo/'+props.item.id_tb_promo+'a.'+props.item.c_extensao1}} style={{width: '100%', height: 300, flex:1, }}>
        </ImageBackground>
        </Grayscale>
        
        </ImageBackground>



        :
        <ImageBackground source={{uri:'https://audiosp.com.br/upload/promo/'+props.item.id_tb_promo+'a.'+props.item.c_extensao1}} style={{width: '100%', height: 300, flex:1, }}>
        </ImageBackground>
    
        }
        </TouchableOpacity>
        
        
        <TouchableOpacity style={{flex:1, backgroundColor:'#111111', marginLeft:Dimensions.get('window').width/25,marginRight:Dimensions.get('window').width/25, }}
        onPress={
            ()=>AbrePromocao(
                props.item.id_tb_promo,
                props.item.c_titulo,
                props.item.c_texto,
                props.item.c_extensao1,
                props.item.c_regra,
                )
        } >
            <ImageResize source={require('../assets/barra_itens_agenda.png')} width={Dimensions.get('window').width/2} style={{marginTop:Dimensions.get('window').width/25, marginBottom:Dimensions.get('window').width/25, marginLeft:Dimensions.get('window').width/25}} />
            <View style={{paddingLeft:Dimensions.get('window').width/25,paddingRight:Dimensions.get('window').width/25,paddingBottom:Dimensions.get('window').width/25, }}>
                <Text style={[Estilos.TituloForaPromo]}>{props.item.c_titulo}</Text>
            </View>
        </TouchableOpacity>

      
        <TouchableOpacity style={{alignItems:"center", justifyContent:'center', borderColor:'#b9b9b9', borderWidth:1, flex:1,marginLeft:Dimensions.get('window').width/25,marginRight:Dimensions.get('window').width/25,}}
        onPress={
            ()=>AbrePromocao(
              props.item.id_tb_promo,
              props.item.c_titulo,
              props.item.c_texto,
              props.item.c_extensao1,
              props.item.c_regra,
                )
        }
        >
            <Text style={[Estilos.TituloParticipar,{padding:Dimensions.get('window').width/20}]}>PARTICIPAR</Text>
        </TouchableOpacity>
    </View>
    
      }
    </>



);
    //break;

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

  })(ItensPromocoes);
  export default React.memo(LoginConnect);