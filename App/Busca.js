import React , { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Modal,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Keyboard, 
} from 'react-native';
import Estilos from './Estilos';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { DrawerActions } from 'react-navigation-drawer';
import { NavigationActions, StackActions, NavigationEvents, withNavigationFocus} from 'react-navigation';


import ImageResize from 'react-native-scalable-image';
//GLOBAIS
import Configs from './Includes/Configs';
import Flat from './Includes/Flat';
import Erro from './Includes/Erro';
import Load from './Includes/Load';
import Header from './Includes/Header';
//GLOBAIS

//REDUX
import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
  Edit_url,
  Edit_tipo_evento,
  Edit_busca,
} from './Actions/LoginActions';
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
from './Includes/Funcoes';



    Eventos.navigationOptions = ({ navigation }) => {
        const { state, setParams, navigate } = navigation;
        const params = state.params || {};
        return {
         
          headerTitle: 
          <View style={[Estilos.HeaderMeio]}>
      <Text style={[Estilos.HeaderTitulo,{}]}>BUSCA</Text>
      </View>
          ,
          headerRight:
            <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:'100%', flex:1}} onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}>
              <ImageResize source={require('../assets/menu_topo.png')} width={Dimensions.get('window').width/15} style={{marginRight:Dimensions.get('window').height/50}} />
          </TouchableOpacity>
          ,
       
          headerTitleStyle: {color:'#FFFFFF'},
          headerStyle: {backgroundColor:'#1b1b1b',borderBottomWidth: 0,  height:Dimensions.get('window').height/14,justifyContent:'center', alignItems:'center',},
          headerTintColor: '#FFFFFF',
        }
      }

const resetActionEventos = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Eventos' })],
});



function Eventos(props) {


  
  //GLOBAIS
  const { navigate } = props.navigation;
  const [falha, setFalha] = useState(false);
  const [load, setLoad] = useState(false);
  //GLOBAIS

  //LOCAIS

        
  const [busca, set_busca] = useState('');
  const [campo, set_campo] = useState();

  //LOCAIS

  //DIDMOUNT
  useEffect(() => {
    
  },[]);

  function ChamaItem(tipo){
    props.Edit_tipo_evento(tipo);

    setTimeout(() => {
      props.navigation.navigate('Eventos');
      props.navigation.dispatch(resetActionEventos);
    }, 100);

  }
  

  return (
    <>
      <SafeAreaView style={[{flex:1}]}>
        <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
          
        <View style={{width:'100%', justifyContent:'center', alignItems:'center', paddingTop:Dimensions.get('window').height/50, paddingBottom:Dimensions.get('window').height/50}}>
            <View style={{width:'90%',}}>
                        <TextInput

                        keyboardType='default'
                        style={Estilos.campoForm}
                        placeholder={'Digite sua busca'}
                        placeholderTextColor={"#999999"}
                        autoCapitalize = "none"
                        value={props.busca} 
                        onChangeText={text =>props.Edit_busca(text)}
                        onSubmitEditing={()=>{
                            Keyboard.dismiss();
                            props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [NavigationActions.navigate({ routeName: 'Home' })],
                              }));
                              props.navigation.navigate('Busca');  
                        }}  
                        //ref={nomeInput}
                        returnKeyType={ "search" }
                        blurOnSubmit={ false }
                        />

                            {props.busca == ''?
                            <TouchableOpacity onPress={()=>{
                                        //props.Edit_busca(busca);
                                        props.navigation.dispatch(StackActions.reset({
                                          index: 0,
                                          actions: [NavigationActions.navigate({ routeName: 'Home' })],
                                        }));
                                        props.navigation.navigate('Busca');  
                                    }}
                            style={{position:'absolute', right:10, top:2}}> 
                                <MaterialIcon name={'search'} size={Dimensions.get('window').height/30} color={'#999999'}  keyboardShouldPersistTaps="handled"/>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={()=>{
                                props.Edit_busca('');
                                props.navigation.dispatch(StackActions.reset({
                                  index: 0,
                                  actions: [NavigationActions.navigate({ routeName: 'Home' })],
                                    }));
                                    props.navigation.navigate('Busca');  
                                }}
                                style={{position:'absolute', right:10, top:2}}> 
                                <MaterialIcon name={'close'} size={Dimensions.get('window').height/30} color={'#999999'}  keyboardShouldPersistTaps="handled"/>
                            </TouchableOpacity>
                            
                            }


                        </View>
            </View>
        <Flat 
            url={'programacao_busca.php'} 
            colunas={1} 
            include={'ItensBusca'} 
            cor_carregando={'#1b1b1b'} 
            cor_carregando_baixo={'#1b1b1b'} 
            navigation={props.navigation} 
            style={{zIndex:1}} backgroundColor={'#FFFFFF'}
            parametros={'&c_busca='+props.busca}
            erro_pagina={'Busca'}
            busca={true}
          />


        </View>

        {/* GLOBAIS */}
 
        <Load visivel={load} cor={'#FFFFFF'} tamanho={'small'} /*  */ navigation={props.navigation} />
        {/* GLOBAIS */}
          
      </SafeAreaView>


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
    tipo_evento:state.auth.tipo_evento,
    busca:state.auth.busca,
    
  };
};
const LoginConnect = connect(mapStateToProps, { 

  /* BLOBAIS */
  Edit_url,
  /* BLOBAIS */
  Edit_id_tb_user,
  Edit_tipo_evento,
  Edit_busca,

  })(Eventos);
  //REDUX
  
 export default LoginConnect;
