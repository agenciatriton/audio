import PropTypes from 'prop-types';
import React, {Component, useEffect, useState} from 'react';
import {ScrollView, 
  Text, 
  View, 
  Image, 
  TouchableWithoutFeedback, 
  TouchableNativeFeedback, 
  Linking, 
  Dimensions, 
  Alert, 
  BackHandler,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import Rodape from '../Includes/Rodape';
//REDUX
import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
  Edit_c_nome,
  Edit_url,
} from '../Actions/LoginActions';
//REDUX

import AsyncStorage from '@react-native-community/async-storage';
import ImageResize from 'react-native-scalable-image';
import Estilos from './SideMenu.style';

SideMenu.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
   null
  }
}





function SideMenu(props) {

  const [initialRender, set_initialRender] = useState(false);
  
  useEffect(()=>{
    setTimeout(() => {
      set_initialRender(true);
    }, 1000);
  },[]);


  
    return (

<>

      {initialRender?
      <SafeAreaView style={{flex:1, backgroundColor:'#020202'}}>
        <ScrollView>
        <View style={{width:"100%", flex:1, justifyContent:"center", alignItems:'center'}}>
          <View style={[Estilos.ForaMenuTopo]}>
            <View style={[Estilos.MenuTopoEsq]}><ImageResize source={require('../../assets/logo_inicio.png')} width={Dimensions.get('window').width/5} style={{marginLeft:Dimensions.get('window').width/25}} /></View>
              <TouchableOpacity style={[Estilos.MenuTopoDir,{}]} onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}>
                  <View style={[Estilos.MenuTopoDir1]}><Text style={[Estilos.MenuTopoDirTexto]}>Menu</Text></View>
                  <View style={[Estilos.MenuTopoDir2,{marginTop:8}]}><ImageResize source={require('../../assets/fechar.png')} width={Dimensions.get('window').width/13} style={{marginRight:Dimensions.get('window').width/25}} /></View>
              </TouchableOpacity>
          </View>
          <View style={[Estilos.MenuItemsFora]}>
          {
          props.id_tb_user==null || props.id_tb_user==0 || props.id_tb_user==''?

            <TouchableOpacity style={[Estilos.MenuItemsItem]} onPress={()=>props.navigation.navigate('LoginInicio')}>
              <Text style={[Estilos.MenuItemsItemTexto]}>Cadastro / login</Text>
            </TouchableOpacity>
          :
            null
          }
            
            {
          props.id_tb_user==null || props.id_tb_user==0 || props.id_tb_user==''?

           null
          :
          <TouchableOpacity style={[Estilos.MenuItemsItem]} onPress={()=>props.navigation.navigate('CadastroEdit')}>
          <Text style={[Estilos.MenuItemsItemTexto]}>PERFIL</Text>
          <Text style={[Estilos.MenuItemsItemTexto1]}>{props.c_nome}</Text>
        </TouchableOpacity>

          }

           


            <TouchableOpacity style={[Estilos.MenuItemsItem]} onPress={()=>props.navigation.navigate('Home')}>
        <Text style={[Estilos.MenuItemsItemTexto]}>PROGRAMAÇÃO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Estilos.MenuItemsItem]} onPress={()=>props.navigation.navigate('Eventos')}>
              <Text style={[Estilos.MenuItemsItemTexto]}>SHOWS / EVENTOS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Estilos.MenuItemsItem]} onPress={()=>props.navigation.navigate('FacaSeuEvento')}>
              <Text style={[Estilos.MenuItemsItemTexto]}>FAÇA SEU EVENTO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Estilos.MenuItemsItem]}  onPress={()=>Linking.openURL('https://audiosp.com.br/studio')}>
              <Text style={[Estilos.MenuItemsItemTexto]}>STUDIO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Estilos.MenuItemsItem]} onPress={()=>props.navigation.navigate('Localizacao')}>
              <Text style={[Estilos.MenuItemsItemTexto]}>LOCALIZAÇÃO</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={[Estilos.MenuItemsItem]} onPress={()=>props.navigation.navigate('Promocoes')}>
              <Text style={[Estilos.MenuItemsItemTexto]}>PROMOÇÕES</Text>
            </TouchableOpacity>
            
        



           <TouchableOpacity style={[Estilos.MenuItemsItem]} onPress={()=>props.navigation.navigate('Configuracoes')}>
              <Text style={[Estilos.MenuItemsItemTexto]}>Configurações</Text>
            </TouchableOpacity>



          {
          props.id_tb_user==null || props.id_tb_user==0 || props.id_tb_user==''?

         null
          :
            <TouchableOpacity style={[Estilos.MenuItemsItem]} onPress={()=>props.navigation.navigate('Logout')}>
              <Text style={[Estilos.MenuItemsItemTexto]}>Fazer logout</Text>
            </TouchableOpacity>
          }
          
          </View>
        </View>
        <Rodape navigation={props.navigation} ></Rodape>
          </ScrollView>
      </SafeAreaView>
      :
      null
      }




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
      c_nome:state.auth.c_nome,
      
    };
  };
  const LoginConnect = connect(mapStateToProps, { 
  
    /* BLOBAIS */
    Edit_url,
    /* BLOBAIS */
    Edit_id_tb_user,
    Edit_c_nome,
  
  
    })(SideMenu);
    //REDUX
    
   export default LoginConnect;
  