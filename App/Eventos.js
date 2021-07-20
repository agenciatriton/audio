import React , { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Estilos from './Estilos';

import {NavigationActions, DrawerActions, StackActions} from 'react-navigation';

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
    header: 
   <Header tipo={'EVENTOS'} navigation={navigation}></Header>
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
  const [tb_categoria, setCategoria] = useState([]);
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
          
          
          <View style={[Estilos.BotoaOpcaoEventoFora]}>
            <TouchableOpacity style={[Estilos.BotoaOpcaoEventoForaEsq]}
              onPress={()=>ChamaItem(0)}
            >
<Text style={[props.tipo_evento == 0 ? Estilos.TextoBotaoShowAtivo : Estilos.TextoBotaoShowInativo]}>SHOWS</Text>
            </TouchableOpacity>
            
            <View style={[Estilos.BotoaOpcaoEventoMeio]}>
            </View>

            <TouchableOpacity style={[Estilos.BotoaOpcaoEventoForaDir]}
              onPress={()=>ChamaItem(1)}
            >
              <Text style={[props.tipo_evento == 1 ? Estilos.TextoBotaoShowAtivo : Estilos.TextoBotaoShowInativo]}>EVENTOS</Text>
            </TouchableOpacity>
          </View>


          <Flat 
            url={'eventos.php'} 
            colunas={2} 
            include={'ItensEventos'} 
            cor_carregando={'#1b1b1b'} 
            cor_carregando_baixo={'#1b1b1b'} 
            navigation={props.navigation} 
            style={{zIndex:1}} backgroundColor={'#FFFFFF'}
            parametros={'&c_tipo_evento='+props.tipo_evento}
            erro_pagina={'Eventos'}
          />
          {/* 
          <Text style={{color:'#FFFFFF'}}> </Text>
          <Text style={{color:'#FFFFFF'}}>{load.toString()} </Text>

          <Button title="INSERIR" 
          onPress={()=>{
            let data = JSON.stringify({
                    c_titulo: "aaaa",                   
            })
            setLoad(true);
            PostaDados(
              'modelo_post.php', //url
              data,
            )
            .then(tb_categoria2 => {
              console.log(tb_categoria2);
                setLoad(false);
                alert(tb_categoria2[0].id_tb_user);
              }
            )
            .catch(err => {
              setLoad(false);
              setFalha(true);
            });
          }}
          ></Button>  
          <Button title="Funcoes" onPress={()=>setLoad(!load)}></Button>  
          <Button title="Funcoes" onPress={()=>Testelala(load)}></Button>  

          <View>
         
          </View>

          {
            tb_categoria.map((tb_categoria)=>{
          return 
          <View key = {tb_categoria.id_tb_categoria}><Text>
          { tb_categoria.c_titulo }
          </Text></View>
            })
          }

          */}


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
    
  };
};
const LoginConnect = connect(mapStateToProps, { 

  /* BLOBAIS */
  Edit_url,
  /* BLOBAIS */
  Edit_id_tb_user,
  Edit_tipo_evento,


  })(Eventos);
  //REDUX
  
 export default LoginConnect;
