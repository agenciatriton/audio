import React , { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Modal,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Estilos from '../Estilos';
import { DrawerActions } from 'react-navigation-drawer';
import ImageResize from 'react-native-scalable-image';
//GLOBAIS
import Configs from './Configs';
//GLOBAIS

//REDUX
import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
  Edit_url,
  Edit_verifica_login,
} from '../Actions/LoginActions';
//REDUX

//FUNCOES
import { 
  //GLOBAIS
  ListaDados,
  PostaDados,
  Testelala,
  //GLOBAIS

  //LOCAIS

  //LOCAIS
}
//FUNCOES
from './Funcoes';

function Header(props) {

  const { navigate } = props.navigation;


  let conteudo;
  
  if(props.tipo == 'HOME'){
    conteudo =
    <SafeAreaView style={[{ backgroundColor:'transparent', zIndex:1000}]}>

 
<ImageBackground
                    source={require('../../assets/sombra_topo.png')}
                    style={{
                      height:Dimensions.get('window').width/6,
                      resizeMode: 'contain',
              
                    
                  }}>
    <View style={[Estilos.HeaderFora,{ backgroundColor:'transparent', zIndex:1000}]}>
     
      <View style={[Estilos.HeaderEsquerda,{ height:Dimensions.get('window').width/6,}]}>
        <ImageResize source={require('../../assets/logo_inicio.png')} width={Dimensions.get('window').width/5} style={{marginLeft:Dimensions.get('window').width/25}} />
      </View>

      <View style={[Estilos.HeaderMeio]}>
      <Text style={[Estilos.HeaderTitulo,{}]}> </Text>
      </View>

      <View style={{flexDirection:'row', alignItems:'flex-end', flex:1}}>
        <TouchableOpacity style={[Estilos.HeaderDireita]} onPress={()=>{props.navigation.navigate('Busca');}}>
          <ImageResize source={require('../../assets/menu_lupa.png')} width={Dimensions.get('window').width/15} style={{marginRight:Dimensions.get('window').height/50}} />
        </TouchableOpacity>
              
        <TouchableOpacity style={[Estilos.HeaderDireita]} onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}>
          <ImageResize source={require('../../assets/menu_topo.png')} width={Dimensions.get('window').width/15} style={{marginRight:Dimensions.get('window').height/50}} />
        </TouchableOpacity>
      </View>
    

    </View>
    </ImageBackground>

    </SafeAreaView>
  }
  else if(props.tipo == 'PROGRAMAÇÃO'){
    conteudo =
    <SafeAreaView style={[Estilos.PretoBg, { backgroundColor:'#1b1b1b', zIndex:1000}]}>
    <View style={[Estilos.HeaderFora,{ backgroundColor:'#1b1b1b', zIndex:1000}]}>
      <View style={[Estilos.HeaderEsquerda,{ height:Dimensions.get('window').width/6,}]}>
        <ImageResize source={require('../../assets/logo_inicio.png')} width={Dimensions.get('window').width/5} style={{marginLeft:Dimensions.get('window').width/25}} />
      </View>
      <View style={[Estilos.HeaderMeio]}>
      <Text style={[Estilos.HeaderTitulo,{}]}>PROGRAMAÇÃO</Text>
      </View>
      <TouchableOpacity style={[Estilos.HeaderDireita]} onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}>
        <ImageResize source={require('../../assets/menu_topo.png')} width={Dimensions.get('window').width/15} style={{marginRight:Dimensions.get('window').height/50}} />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  }
  else if(props.tipo == 'EVENTOS'){
    conteudo =
    <SafeAreaView style={[Estilos.PretoBg, { backgroundColor:'#1b1b1b', zIndex:1000}]}>
    <View style={[Estilos.HeaderFora,{ backgroundColor:'#1b1b1b', zIndex:1000}]}>
      <View style={[Estilos.HeaderEsquerda,{ height:Dimensions.get('window').width/6,}]}>
        <ImageResize source={require('../../assets/logo_inicio.png')} width={Dimensions.get('window').width/5} style={{marginLeft:Dimensions.get('window').width/25}} />
      </View>
      <View style={[Estilos.HeaderMeio]}>
      <Text style={[Estilos.HeaderTitulo,{}]}>SHOWS / EVENTOS</Text>
      </View>
      <TouchableOpacity style={[Estilos.HeaderDireita]} onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}>
        <ImageResize source={require('../../assets/menu_topo.png')} width={Dimensions.get('window').width/15} style={{marginRight:Dimensions.get('window').height/50}} />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  }
 


  else if(props.tipo == 'CADASTRO'){
    conteudo =
    <SafeAreaView style={[Estilos.PretoBg, { backgroundColor:'#1b1b1b', zIndex:1000}]}>
    <View style={[Estilos.HeaderFora,{ backgroundColor:'#1b1b1b', zIndex:1000}]}>
      <View style={[Estilos.HeaderEsquerda,{ height:Dimensions.get('window').width/6,}]}>
        <ImageResize source={require('../../assets/logo_inicio.png')} width={Dimensions.get('window').width/5} style={{marginLeft:Dimensions.get('window').width/25}} />
      </View>
      <View style={[Estilos.HeaderMeio]}>
      <Text style={[Estilos.HeaderTitulo,{}]}>CADASTRO</Text>
      </View>
      <TouchableOpacity style={[Estilos.HeaderDireita]} onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}>
        <ImageResize source={require('../../assets/menu_topo.png')} width={Dimensions.get('window').width/15} style={{marginRight:Dimensions.get('window').height/50}} />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  }


  
  else if(props.tipo == 'CADASTRO EDIT'){
    conteudo =
    <SafeAreaView style={[Estilos.PretoBg, { backgroundColor:'#1b1b1b', zIndex:1000}]}>
    <View style={[Estilos.HeaderFora,{ backgroundColor:'#1b1b1b', zIndex:1000}]}>
      <View style={[Estilos.HeaderEsquerda,{ height:Dimensions.get('window').width/6,}]}>
        <ImageResize source={require('../../assets/logo_inicio.png')} width={Dimensions.get('window').width/5} style={{marginLeft:Dimensions.get('window').width/25}} />
      </View>
      <View style={[Estilos.HeaderMeio]}>
      <Text style={[Estilos.HeaderTitulo,{}]}>MEU PERFIL</Text>
      </View>
      <TouchableOpacity style={[Estilos.HeaderDireita]} onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}>
        <ImageResize source={require('../../assets/menu_topo.png')} width={Dimensions.get('window').width/15} style={{marginRight:Dimensions.get('window').height/50}} />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  }



  else if(props.tipo == 'LOGIN'){
    let titulo;
    if(props.verifica_login == 'LoginInicio'){
      null
    }else{
      if(props.verifica_login == 'Login'){
        titulo = 'LOGIN';
      }else if(props.verifica_login == 'Cadastro'){
        titulo = 'CADASTRO';
      }else if(props.verifica_login == 'CadastroEdit'){
        titulo = 'MEUS DADOS';
      }



    conteudo =
    <SafeAreaView style={[Estilos.PretoBg, { backgroundColor:'#1b1b1b', zIndex:1000}]}>
    <View style={[Estilos.HeaderFora,{ backgroundColor:'#1b1b1b', zIndex:1000}]}>
      <View style={[Estilos.HeaderEsquerda,{ height:Dimensions.get('window').width/6,}]}>
        <ImageResize source={require('../../assets/logo_inicio.png')} width={Dimensions.get('window').width/5} style={{marginLeft:Dimensions.get('window').width/25}} />
      </View>
      <View style={[Estilos.HeaderMeio]}>
    <Text style={[Estilos.HeaderTitulo,{}]}>{titulo}</Text>
      </View>
      <TouchableOpacity style={[Estilos.HeaderDireita]} onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}>
        <ImageResize source={require('../../assets/menu_topo.png')} width={Dimensions.get('window').width/15} style={{marginRight:Dimensions.get('window').height/50}} />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
    }

  }
  
  else if(props.tipo == 'LOCALIZACAO'){
    conteudo =
    <SafeAreaView style={[Estilos.PretoBg, { backgroundColor:'#1b1b1b', zIndex:1000}]}>
    <View style={[Estilos.HeaderFora,{ backgroundColor:'#1b1b1b', zIndex:1000}]}>
      <View style={[Estilos.HeaderEsquerda,{ height:Dimensions.get('window').width/6,}]}>
        <ImageResize source={require('../../assets/logo_inicio.png')} width={Dimensions.get('window').width/5} style={{marginLeft:Dimensions.get('window').width/25}} />
      </View>
      <View style={[Estilos.HeaderMeio]}>
      <Text style={[Estilos.HeaderTitulo,{}]}>LOCALIZAÇÃO</Text>
      </View>
      <TouchableOpacity style={[Estilos.HeaderDireita]} onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}>
        <ImageResize source={require('../../assets/menu_topo.png')} width={Dimensions.get('window').width/15} style={{marginRight:Dimensions.get('window').height/50}} />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  }
  
  
  else if(props.tipo == 'LIVE'){
    conteudo =
    <SafeAreaView style={[Estilos.PretoBg, { backgroundColor:'#1b1b1b', zIndex:1000}]}>
    <View style={[Estilos.HeaderFora,{ backgroundColor:'#1b1b1b', zIndex:1000}]}>
      <View style={[Estilos.HeaderEsquerda,{ height:Dimensions.get('window').width/6,}]}>
        <ImageResize source={require('../../assets/logo_inicio.png')} width={Dimensions.get('window').width/5} style={{marginLeft:Dimensions.get('window').width/25}} />
      </View>
      <View style={[Estilos.HeaderMeio]}>
      <ImageResize source={require('../../assets/logo_inicio.png')} width={Dimensions.get('window').width/5} style={{marginLeft:Dimensions.get('window').width/25}} />
      </View>
      <TouchableOpacity style={[Estilos.HeaderDireita]} onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}>
        <ImageResize source={require('../../assets/menu_topo.png')} width={Dimensions.get('window').width/15} style={{marginRight:Dimensions.get('window').height/50}} />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  }
  
  
  else if(props.tipo == 'CONFIGURACOES'){
    conteudo =
    <SafeAreaView style={[Estilos.PretoBg, { backgroundColor:'#1b1b1b', zIndex:1000}]}>
    <View style={[Estilos.HeaderFora,{ backgroundColor:'#1b1b1b', zIndex:1000}]}>
      <View style={[Estilos.HeaderEsquerda,{ height:Dimensions.get('window').width/6,}]}>
        <ImageResize source={require('../../assets/logo_inicio.png')} width={Dimensions.get('window').width/5} style={{marginLeft:Dimensions.get('window').width/25}} />
      </View>
      <View style={[Estilos.HeaderMeio]}>
      <Text style={[Estilos.HeaderTitulo,{}]}>CONFIGURAÇÕES</Text>
      </View>
      <TouchableOpacity style={[Estilos.HeaderDireita]} onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}>
        <ImageResize source={require('../../assets/menu_topo.png')} width={Dimensions.get('window').width/15} style={{marginRight:Dimensions.get('window').height/50}} />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  }
  

  else if(props.tipo == 'PROMOÇÕES'){
    conteudo =
    <SafeAreaView style={[Estilos.PretoBg, { backgroundColor:'#1b1b1b', zIndex:1000}]}>
    <View style={[Estilos.HeaderFora,{ backgroundColor:'#1b1b1b', zIndex:1000}]}>
      <View style={[Estilos.HeaderEsquerda,{ height:Dimensions.get('window').width/6,}]}>
        <ImageResize source={require('../../assets/logo_inicio.png')} width={Dimensions.get('window').width/5} style={{marginLeft:Dimensions.get('window').width/25}} />
      </View>
      <View style={[Estilos.HeaderMeio]}>
      <Text style={[Estilos.HeaderTitulo,{}]}>PROMOÇÕES</Text>
      </View>
      <TouchableOpacity style={[Estilos.HeaderDireita]} onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}>
        <ImageResize source={require('../../assets/menu_topo.png')} width={Dimensions.get('window').width/15} style={{marginRight:Dimensions.get('window').height/50}} />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  }
  
  
  

  
  
  
  return (
    <>
     
       
        {conteudo}


    </>
  );
};


//REDUX
const mapStateToProps = (state) => {
  return {

    /* BLOBAIS */
    url:state.auth.url,
    /* BLOBAIS */
    id_tb_user:state.auth.id_tb_user,
    verifica_login:state.auth.verifica_login,
    
  };
};
const LoginConnect = connect(mapStateToProps, { 

  /* BLOBAIS */
  Edit_url,
  /* BLOBAIS */
  Edit_id_tb_user,
  Edit_verifica_login,


  })(Header);
  //REDUX
  
 export default LoginConnect;
