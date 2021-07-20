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
  Share,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import ImageResize from 'react-native-scalable-image';
import Swiper2 from 'react-native-swiper';
import Estilos from './Estilos';
import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
  Edit_verifica_login,
  Edit_redireciona_login,
  Edit_passou,
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
import Rodape from './Includes/Rodape';
//GLOBAIS

import { 
  //GLOBAIS
  ListaDados,
  PostaDados,
  Navega,
  AbreURL,
  Compartilhar,
  //GLOBAIS

  //LIVE
  Edit_id_tb_status,
  Edit_c_video,
  Edit_id_tb_tipo,
  Edit_c_texto,
  //LIVE

}
//FUNCOES
from './Includes/Funcoes';


import ItensBanner from './ItensBanner';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

ItensHome.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
   null
  }
}



function ItensHome(props) {




  


  function TextoBilheteriaBold(props){
    return <Text style={[Estilos.TextoBilheteriaBold]}>{props.children}</Text>
    }

  
    
    function AbreLive(){
      props.Edit_passou('sim');
       if(props.id_tb_user==null || props.id_tb_user==0 || props.id_tb_user==''){
         props.Edit_redireciona_login('Live');

         props.navigation.navigate('LoginVerifica',{
          mensagem:'Cadastre-se ou faça login para participar de nossas promoções.',
          retorno:'Live',
        })
       }else{
         //props.Edit_verifica_login('');
         props.navigation.navigate('Live');
   
       }

      
     }

  function AbreProgramacao(item){
    setGray(false);
    setTimeout(() => {
      props.navigation.navigate('ProgramacaoInterna',{
        item:item
      })
      setGray(true);
    }, 100);
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
      
    {
       props.item.tipo == 'banner'
       ?
      
    <View style={{backgroundColor: '#000000'}}>  
    <Swiper2 
    key={5}

    removeClippedSubviews={false}
    showsPagination={false}
    containerStyle={{height:Dimensions.get('window').width/0.95,}}
       showsButtons={true}
       ref={swiperx => {this.swiperx=swiperx}}
        autoplay={true}

      buttonWrapperStyle={{
        backgroundColor: 'transparent', 
        flexDirection: 'row', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        flex: 1, 
        paddingHorizontal: 0, 
        paddingVertical: Dimensions.get('window').width/3.25, 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        //paddingTop:Dimensions.get('window').width/0.95
        
      }}
  
 
       dot={<View 

        containerStyle={{backgroundColor: '#000000', 
       width: 6, 
       height: 6, 
       //borderRadius: 10, 
       marginLeft: 10, 
       marginRight: 10}}
        />}
       activeDot={<View style={{backgroundColor: '#FFFFFF', 
       width: 8 , 
       height: 8, 
       //borderRadius: 10, 
       marginLeft: 10, 
       marginRight: 10}} 
       />}    
       buttonColor={{
        fontSize: 50,
        color: '#FFFFFF'
      }}
 
       paginationStyle={{
         bottom: 20
       }}
       loop={true}>


      {
              props.adicional.map((item) => {
                
              
                  return (

                    <ItensBanner key={item.id} item={item} navigation={props.navigation} index={item.id_tb_banner} ></ItensBanner>
                   
                    );
              })
              }

         
      </Swiper2>
   
      </View>

      :
      null
    }






    {
       props.item.tipo == 'live'
       ?

       
        props.id_tb_status == 1
        ?
        <TouchableOpacity style={{flexDirection:'row', width:'100%'}} onPress={()=>AbreLive()}>
          <ImageBackground source={require('../assets/bg_banner_live_cinza.jpg')} style={{flexDirection:'row',width: '100%', height: '100%', flex:1, alignItems:'center', justifyContent:'center'}}>
           <View style={{width:"65%", justifyContent:"center",paddingLeft:Dimensions.get('window').width/25,paddingTop:Dimensions.get('window').width/20,paddingBottom:Dimensions.get('window').width/20, }}>
            <Text style={[Estilos.Agora,{color:"#1f1f1f", padding:2}]}>ASSISTA AGORA!</Text>
            <Text style={[Estilos.AgoraTexto,{color:"#1f1f1f", padding:2, paddingRight:Dimensions.get('window').width/20}]}>
                {props.c_texto}
              </Text>
          </View>
           <View style={{width:"35%", justifyContent:"center", alignItems:'center'}}>
             <ImageResize source={require('../assets/botao_live.png')} width={Dimensions.get('window').width/4.5} />
           </View>
           </ImageBackground>
        </TouchableOpacity>
        :
        null


      :
      null
    }

    {
       props.item.tipo == 'barra'
       ?
      <View style={[Estilos.TitProgramacaoFora,{paddingBottom:Dimensions.get('window').width/20,paddingTop:Dimensions.get('window').width/20, backgroundColor:"#FFFFFF" }]} >
          <View style={[Estilos.ProgramacaoEsq]}>
            <View style={[Estilos.ProgramacaoBarraEsq]}></View>
          </View>
          <View style={[Estilos.ProgramacaoMeio]}><Text style={[Estilos.ProgramacaoMeioTexto]}>PROGRAMAÇÃO</Text></View>
          <View style={[Estilos.ProgramacaoDir]}>
            <View style={[Estilos.ProgramacaoBarraDir]}></View>
          </View>
      </View>
      :
      null
    }

      
    {
       props.item.tipo == 'programacao'
       ?
       <View>
       <View style={[Estilos.ProgramacaoForaItem]} >
       <TouchableOpacity onPress={()=>AbreProgramacao(props.item)}>
            
          <View style={[Estilos.ProgramacaoItemFotoHome]}>  
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
        <View style={{width:Dimensions.get('window').width/100*90, height:Dimensions.get('window').width/3, flex:1}}>

          <Grayscale>
            <ImageResize source={{uri:'https://audiosp.com.br/upload/banner/_thumb'+props.item.id_tb_banner+'a.'+props.item.c_extensao1}} width={(Dimensions.get('window').width/100)*90} />
          </Grayscale>
          {props.item.c_adiado != ''?
            <View style={[Estilos.NovaData]}><Text style={[Estilos.NovaDataTexto]}>{props.item.c_adiado}</Text></View>
            :
            null
          }
        </View>

        </ImageBackground>
              
        
          :
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
          <View style={{width:Dimensions.get('window').width/100*90, height:Dimensions.get('window').width/3, flex:1}}>
            <ImageResize source={{uri:'https://audiosp.com.br/upload/banner/_thumb'+props.item.id_tb_banner+'a.'+props.item.c_extensao1}} width={(Dimensions.get('window').width/100)*90} />
            {props.item.c_adiado != ''?
            <View style={[Estilos.NovaData]}><Text style={[Estilos.NovaDataTexto]}>{props.item.c_adiado}</Text></View>
            :
            null
            }
            </View>

          </ImageBackground>
      

          }

  
          </View>
          <View style={[Estilos.ForaProgramacaoTituloFora]}>
            <Text style={[Estilos.ForaProgramacaoTitulo]}>{props.item.c_titulo}</Text>
          </View>

          <View style={{alignItems:'flex-start', flex:1, width:"90%", marginBottom:Dimensions.get('window').width/40,}}>
            <ImageBackground
                    source={require('../assets/barra_tit_eventos.jpg')}
                    style={{
                      height:Dimensions.get('window').width/100,
                      resizeMode: 'contain',
                      flex:1
                    
                  }}>
              <View style={{width:Dimensions.get('window').width/2, height:Dimensions.get('window').width/60,  }}></View>
            </ImageBackground>
          </View>


          <View style={[Estilos.DataHomeFora]}>
                <View style={[Estilos.DiaFora]}><Text style={[Estilos.DiaTexto]}>{props.item.dia}</Text></View>
                <View style={[Estilos.MesFora]}><Text style={[Estilos.MesTexto]}>{props.item.mes}</Text></View>
                <View style={[Estilos.SemanaFora]}><Text style={[Estilos.SemanaTexto]}>{props.item.diasemana}</Text></View>
          </View>
          </TouchableOpacity>
      </View>


      <View style={{paddingBottom:15,}}>
      <TouchableOpacity style={{flexDirection:'row', justifyContent:"flex-start", alignItems:'flex-start', width:"90%"}}
       onPress={

        ()=>  Compartilhar(
          props.item.c_titulo,
          'AUDIO SP, '+props.item.c_titulo+', acesse '+props.item.url+ ' e saiba mais!',
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
</View>
      :
      null
    }


    {
       props.item.tipo == 'rodape'
       ?
      <>
     <Rodape navigation={props.navigation} ></Rodape>
      </>
      :
      null
    }



    {/*
        <View style={{alignItems:'center', height:100}} key={props.item.id} >
            <Text style={{color:'#000000'}}>{props.item.c_titulo} - {props.item.id_tb_banner}</Text>
        </View>
         */}
    </>);
    //break;

};


const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,

    //LIVE
    id_tb_status:state.auth.id_tb_status,
    c_video:state.auth.c_video,
    id_tb_tipo:state.auth.id_tb_tipo,
    c_texto:state.auth.c_texto,
    verifica_login:state.auth.verifica_login,
    redireciona_login:state.auth.redireciona_login,
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
    
    //LIVE

    Edit_verifica_login,
    Edit_redireciona_login,
    Edit_passou,
  

  })(ItensHome);
 export default LoginConnect;