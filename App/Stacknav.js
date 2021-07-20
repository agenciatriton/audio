import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  TouchableOpacity,
  ImageBackground,
  Image,
  StatusBar,
  Dimensions
} from 'react-native';

import { createMaterialBottomTabNavigator, BottomTabBar } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from  'react-navigation';
import { createStackNavigator } from  'react-navigation-stack';
import {NavigationActions, StackActions} from 'react-navigation';
import Estilos from './Estilos';
import Home from "./Home";
import Busca from "./Busca";
import FacaSeuEvento from "./FacaSeuEvento";
import Live from "./Live";
import PromocoesGanhador from "./PromocoesGanhador";
import ProgramacaoInterna from "./ProgramacaoInterna";
import Eventos from "./Eventos";
import EventosInterna from "./EventosInterna";
import Localizacao from "./Localizacao";
import Cadastro from "./Cadastro";
import CadastroEdit from "./CadastroEdit";
import LoginVerifica from "./LoginVerifica";
import Promocoes from "./Promocoes";
import PromocoesVerifica from "./PromocoesVerifica";
import PromocoesInativoLocalizacao from "./PromocoesInativoLocalizacao";
import PromocoesInativoPush from "./PromocoesInativoPush";
import PromocoesInterna from "./PromocoesInterna";

import Login from "./Login";
import LoginInicio from "./LoginInicio";
import Logout from "./Logout";
import Configuracoes from "./Configuracoes";
import Teste from "./Teste";
import Vinheta from "./Vinheta";
import Erro from "./Includes/Erro";
import { Header } from 'react-native/Libraries/NewAppScreen';


//let CountContainer = connect(state => ({ value: state.count }))(Count);




const stackNavProgramacao = createStackNavigator({ 

  Vinheta : {
    screen: Vinheta,
    navigationOptions: {
      gesturesEnabled: false,
      tabBarVisible: false,
  }
  },

  Home : {
    screen: Home,
  },
  Busca : {
    screen: Busca,
  },

  FacaSeuEvento : {
    screen: FacaSeuEvento,
  },


  ProgramacaoInterna : {
    screen: ProgramacaoInterna,
  },
  Live : {
    screen: Live,
  },
  PromocoesGanhador : {
    screen: PromocoesGanhador,
  },
});


/*
stackNavProgramacao.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index == 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
*/

// This code let you hide the bottom app bar when "CustomHide" is rendering
stackNavProgramacao.navigationOptions = ({ navigation }) => {
  let tabBarVisible;

    navigation.state.routes.map(route => {
      if (route.routeName === "Vinheta") {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });


  return {
    tabBarVisible
  };
};

const stackNavEventos = createStackNavigator({
   
  Eventos : {
    screen: Eventos,
  },
  EventosInterna : {
    screen: EventosInterna,
  },

});


const stackNavLocalizacao = createStackNavigator({
  Localizacao : {
    screen: Localizacao,
  },
});


const stackNavPromocoes = createStackNavigator({
  PromocoesVerifica : {
    screen: PromocoesVerifica,
  },
  Promocoes : {
    screen: Promocoes,
  },
  PromocoesInativoLocalizacao : {
    screen: PromocoesInativoLocalizacao,
  },
  PromocoesInativoPush : {
    screen: PromocoesInativoPush,
  },
  PromocoesInterna : {
    screen: PromocoesInterna,
  },

});


const stackNavPerfil = createStackNavigator({

  LoginVerifica : {
    screen: LoginVerifica,
  },

  LoginInicio : {
    screen: LoginInicio,
  },
  
  Teste : {
    screen: Teste,
  },
  
  Cadastro : {
    screen: Cadastro,
  },

  CadastroEdit : {
    screen: CadastroEdit,
  },

  Login : {
    screen: Login,
  },
  
  Logout : {
    screen: Logout,
  },
  
  Configuracoes : {
    screen: Configuracoes,
  },
  

  

});


export default createAppContainer(createMaterialBottomTabNavigator({


  
  stackNavProgramacao:{
    screen:stackNavProgramacao,   
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: Dimensions.get('window').width/50 }}>PROGRAMAÇÃO </Text>,

    }  
  },
  
  stackNavEventos:{
    screen:stackNavEventos,     
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: Dimensions.get('window').width/50 }}>ÚLTIMOS  EVENTOS </Text>,

    }  
  },
      
  stackNavLocalizacao:{
    screen:stackNavLocalizacao, 
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: Dimensions.get('window').width/50 }}>LOCALIZAÇÃO </Text>,

    }      
  },
  
  stackNavPromocoes:{
    screen:stackNavPromocoes,     
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: Dimensions.get('window').width/50 }}>PROMOÇÕES </Text>,

    }  
  },

  stackNavPerfil:{
    screen:stackNavPerfil,    
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: Dimensions.get('window').width/50 }}>PERFIL </Text>,

    }   
  },



/*
    Cadastro_index_1:{
      headerBackTitleVisible: false,
      screen:Cadastro_index_1,
      navigationOptions: {
        tabBarLabel:"Padrao",
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('../assets/bandeiras/2.png')} style={{width:30, height:30}}/>
        )
      },
    },

*/   
  },
  {

    defaultNavigationOptions: ({ navigation }) => ({




      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'stackNavProgramacao') {
          if(focused == ''){
            tabBarIcon = require('../assets/icon1.png');
          }else{
            tabBarIcon = require('../assets/icon1_over.png');
          }
          iconName = "Programação";
        } else if (routeName === 'stackNavEventos') {
          if(focused == ''){
            tabBarIcon = require('../assets/icon2.png');
          }else{
            tabBarIcon = require('../assets/icon2_over.png');
          }
          iconName = "Últimos Eventos";
        }
        else if (routeName === 'stackNavLocalizacao') {
          if(focused == ''){
            tabBarIcon = require('../assets/icon3.png');
          }else{
            tabBarIcon = require('../assets/icon3_over.png');
          } 
          iconName = "Localização";
        }
        else if (routeName === 'stackNavPromocoes') {
          if(focused == ''){
            tabBarIcon = require('../assets/icon4.png');
          }else{
            tabBarIcon = require('../assets/icon4_over.png');
          }
          iconName = "Promoções";
        }
        else if (routeName === 'stackNavPerfil') {
          if(focused == ''){
            tabBarIcon = require('../assets/icon5.png');
          }else{
            tabBarIcon = require('../assets/icon5_over.png');
          }
          iconName = "Perfil";
        }
        else if (routeName === 'Vinheta') {
          if(focused == ''){
            tabBarIcon = null;
          }else{
            tabBarIcon = null;
          }
          iconName = null;
        }
        
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
          return <View style={{paddingLeft:10, paddingRight:10}}>
          <View style={{
            backgroundColor:'#1b1b1b',
            width:Dimensions.get('window').width/5,
            height:Dimensions.get('window').width/5,
            alignItems:'center',
            justifyContent:'flex-start',
            flexDirection:'column',
            }}>
              <View style={{marginBottom:10}}><Image source={tabBarIcon}         
          style={{
            width:Dimensions.get('window').width/10,
            height:Dimensions.get('window').width/10,
            
          }}/></View>
           

        </View>
        </View>
        ;
      },
    }),

    resetOnBlur:false,
    labeled:true,
    lazy: true,
    barStyle: { 
      backgroundColor: '#1b1b1b', 
      height:70,
      paddingTop:10,

      paddingLeft:10,
    },
    tabBarOptions:{
      justifyContent:"center",
      alignItems:"center",

    },
    style:{

    },
    shifting: false
  },
));

