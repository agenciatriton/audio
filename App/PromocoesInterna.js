import React , { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  ScrollView, 
  TouchableOpacity,
  Linking,
  TextInput,
  Keyboard,
  Modal,
} from 'react-native';
import { NavigationEvents } from "react-navigation";
import { showMessage, hideMessage } from "react-native-flash-message";
import { DrawerActions } from 'react-navigation-drawer';
import FlashMessage from "react-native-flash-message";
import Estilos from './Estilos';
import {NavigationApps,actions,googleMapsTravelModes, mapsTravelModes} from "react-native-navigation-apps";
import { connect } from 'react-redux';
import Share from 'react-native-share';
import { 
  Edit_id_tb_user,
  Edit_promo_local,
} from './Actions/LoginActions';
import ImageResize from 'react-native-scalable-image';

//GLOBAIS
import Configs from './Includes/Configs';
import Flat from './Includes/Flat';
import Erro from './Includes/Erro';
import Load from './Includes/Load';
import Header from './Includes/Header';
import Rodape from './Includes/Rodape';

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


PromocoesInterna.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    headerTitle: 
    <View>
      <Text style={[Estilos.TituloEventoInterno]}>{navigation.getParam('titulo', 'NO-ID')}</Text>
    </View>
    ,
    headerTitleStyle: {color:'#FFFFFF'},
    headerStyle: {backgroundColor:'#1b1b1b',borderBottomWidth: 0,  height:Dimensions.get('window').height/14,},
    headerTintColor: '#FFFFFF',
  }
}




function PromocoesInterna(props) {


  useEffect(() => {

     // props.Edit_promo_local(true);

  
  },[]);

  /*
  useEffect(() => {
    set_id_tb_promo(props.navigation.getParam('id_tb_promo'));
  },[]);
  */

  function Submit(){

    let valida = false;

    //TEXTO
    if(c_texto == null || c_texto == ''){
        setv_texto(true);
        setm_texto('Campo resposta é obrigatório!');
        valida = true;

    }else{
        setv_texto(false);
        setm_texto('');
    }

    //ACEITE
    if(ativoseta === false){
      set_aceite(true);
      valida = true;
    }else{
      set_aceite(false);
    }

    if(!valida === true){
      //alert('foi');

      let data = JSON.stringify({
        id_tb_promo: id_tb_promo,                   
        c_texto: c_texto,                   
        id_tb_user: props.id_tb_user,                   
        
      })
      setLoad(true);
      PostaDados(
        'promocao_submit.php', //url
        data,
      )
      .then(tb_user => {
        console.log(tb_user);

        if(tb_user[0].retorno === true){
         
          inputRef.current.showMessage({
            description: "",
            message: "Cadastro efetuado com sucesso.\nFique atento as nossas notificações!",
            type: "success",
            backgroundColor: "#000000", // background color
            color: "#FFFFFF", // text color
            floating:true,
            duration:6000,
          });
          
          setTimeout(() => {
            //alert('foi');
            set_id_tb_promo('');
            set_c_texto('');
            set_id_tb_promo('');
            set_ativoseta(false);

            setLoad(false);
            props.navigation.navigate('Promocoes');
          }, 6500);
         
         }else if(tb_user[0].retorno === false){
          console.log(tb_user);
         //console.log(tb_user[0].c_genero);
         inputRef.current.showMessage({
             description: "",
             message: "Você já está inscrito nesta promoção.",
             type: "success",
             backgroundColor: "#000000", // background color
             color: "#FFFFFF", // text color
             floating:true,
             duration:4000,
           });
 
           setTimeout(() => {
            set_ativoseta(false);
            set_id_tb_promo('');
            set_c_texto('');
            set_id_tb_promo('');
             //alert('foi');
             //props.navigation.navigate('Home');
             setLoad(false);
             props.navigation.navigate('Promocoes');
           }, 4500);
       
         // console.log(tb_user.toString()+"erro");
           
         }

      })
      .catch(err => {
        console.log(err);
        console.log(tb_user);
        setLoad(false);
        setFalha(true);
      });
    }
    





  }


    //GLOBAIS
    const { navigate } = props.navigation;
    const [falha, setFalha] = useState(false);
    const [modal, set_modal] = useState(false);
    const [load, setLoad] = useState(false);

    //GLOBAIS
    const [c_texto, set_c_texto] = useState('');
    const [v_texto, setv_texto] = useState(false);
    const [m_texto, setm_texto] = useState();
    const [id_tb_promo, set_id_tb_promo] = useState(props.navigation.getParam('id_tb_promo'));
  

  const Leia = ({ children }) => <Text style={[Estilos.CheckTextoBold]} onPress={()=>set_modal(true)}>{children}</Text>;

  function TextoBilheteriaBold(props){
    return <Text style={[Estilos.TextoBilheteriaBold]}>{props.children}</Text>
    }


  function TextoNegrito(props){
    return <Text style={[Estilos.TextoNegritoEvento]}>{props.children}</Text>
    }

  function Aceito(){
    if(ativoseta === true){
      set_ativoseta(false);
    }else{
      set_ativoseta(true);
    }
  }
  const [ativoseta, set_ativoseta] = useState(false);
  const [aceite, set_aceite] = useState(false);
  const inputRef = useRef(null);

    return (
        <>
  <NavigationEvents
          onWillFocus={payload => {
            props.Edit_promo_local(true);
          }}
        />
        {
        load === true
        ?
        <View style={{flex:1}}>

        <FlashMessage ref={inputRef} position="bottom" style={{backgroundColor:'#000000'}} />
        <Load visivel={true} cor={'#1b1b1b'} tamanho={'small'} /*  */ navigation={props.navigation} />
        </View>
        :
        <SafeAreaView style={[{flex:1, backgroundColor:'#000000'}]} keyboardShouldPersistTaps={'handled'}>
         
            <ScrollView style={[{flex:1}]} keyboardShouldPersistTaps={'handled'}>
            <SafeAreaView style={[{flex:1, backgroundColor:'#000000'}]}>
         
         
            <Modal
            style={{flex:1, backgroundColor:'#FFFFFF'}}
            animationType="slide"
            transparent={false}
            visible={modal}
            onRequestClose={() => {
                // Alert.alert('Modal has been closed.');
            }}>
               <TouchableOpacity onPress={()=>{
                set_modal(false);
              }}>
               <View style={{margin:20}}>
              
              <Text style={[Estilos.TextoModalFecha]}>FECHAR X</Text>
              </View>
              </TouchableOpacity>
              <ScrollView style={[{flex:1}]}>
                <View style={{marginLeft:20, marginRight:20}}>
          
                
              
                <Text style={[Estilos.TextoModal]}>{props.navigation.getParam('c_regra', 'NO-ID')}</Text>
                  
                </View>
                </ScrollView>
              </Modal>
</SafeAreaView>

                    
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
                <View style={[Estilos.ForaProgInterna]}>
                <ImageBackground source={{uri:'https://audiosp.com.br/upload/promo/'+props.navigation.getParam('id_tb_promo', 'NO-ID')+'a.'+props.navigation.getParam('c_extensao1', 'NO-ID')}} style={{width: '100%', height: 300, flex:1, }}></ImageBackground>
                </View>
        </ImageBackground>

                  <TouchableOpacity style={{flex:1, backgroundColor:'#111111', paddingLeft:Dimensions.get('window').width/25,paddingRight:Dimensions.get('window').width/25, }}
                      onPress={
                          ()=>AbrePromocao(
                              props.item.id_tb_galeria,
                              props.item.c_titulo,
                              props.item.c_texto,
                              )
                      } >
                  <ImageResize source={require('../assets/barra_itens_agenda.png')} width={Dimensions.get('window').width/2} style={{marginTop:Dimensions.get('window').width/20, marginBottom:Dimensions.get('window').width/25, marginLeft:Dimensions.get('window').width/25}} />
                  
                  <View style={{paddingLeft:Dimensions.get('window').width/25,paddingRight:Dimensions.get('window').width/25,paddingBottom:Dimensions.get('window').width/25, }}>
                      <Text style={[Estilos.TituloForaPromo]}>{props.navigation.getParam('c_titulo', 'NO-ID')}</Text>
                      
                  </View>
                  </TouchableOpacity>

                  <View style={[Estilos.ForaTextoDescricaoPromo]}>
                    <Text style={[Estilos.TextoDescricaoPromo,{paddingLeft:Dimensions.get('window').width/25,paddingRight:Dimensions.get('window').width/25}]}>
                    {props.navigation.getParam('c_texto', 'NO-ID')}
                    </Text>
                  </View>

                  <View style={[Estilos.ForaAceito]} keyboardShouldPersistTaps={'handled'}>
                      <TouchableOpacity style={[Estilos.ForaCheck]} onPress={()=>Aceito()}>
                        
                        <View style={[Estilos.DentroCheck]}>
                          <View style={[Estilos.DentroCheckSeta]}>
                          { ativoseta === true?  
                          <ImageResize source={require('../assets/seta.png')} width={18}  />
                          :
                          null
                          }
                          </View>
                        </View>
                        <View style={[Estilos.CheckTextoFora]}>
                            <Text style={[Estilos.CheckTexto,
                            aceite === false ?
                              null
                            : { color: '#ff0000' }
                            ]}>
                            Declaro que li as <Leia>Regras Completas</Leia> deste concurso cultural.
                            </Text>
                        </View>
                      </TouchableOpacity>
                      
                      <View style={[Estilos.ForaCheck1]} onPress={()=>Aceito()}>
                        <Text style={[Estilos.TextoPromoTitulo]}>O que você mais gosta da Audio?</Text>
                      </View>

                      <View style={[Estilos.ForaInputPromo]}>
                        <TextInput
                          keyboardType='default'
                          style={Estilos.campoFormPromo}
                          placeholderTextColor = "#888888"
                          placeholder="Digite sua resposta aqui"
                          autoCapitalize = "none"
                          value={c_texto} 
                          onChangeText={text =>set_c_texto(text)}
                          returnKeyType={ "send" }
                          //returnKeyType={ "done" }
                          onSubmitEditing={()=>Submit()}  
                          //ref={nomeInput}
                          //returnKeyType={ "next" }
                          blurOnSubmit={ false }
                        />
                        
                      </View>
                      <View style={[Estilos.ForaInputPromo,{borderWidth:0}]}>
                      { 
                        v_texto && 
                        <Text style={[Estilos.LabelCampoValida,{color:"#ff0000", paddingTop:5}]}>
                            {
                        m_texto
                        }</Text> }
                        
                      </View>


                      <TouchableOpacity style={[Estilos.ForaInputPromo,{alignItems:"center", justifyContent:'center', borderColor:'#FFFFFF',backgroundColor:'#FFFFFF', marginTop:Dimensions.get('window').height/60,marginBottom:Dimensions.get('window').height/30}]}
                      onPress={()=>Submit()} keyboardShouldPersistTaps={'handled'}>
                          <Text style={[Estilos.TituloParticipar,{padding:Dimensions.get('window').width/20}]}>ENVIAR RESPOSTA e PARTICIPAR</Text>
                      </TouchableOpacity>



                  </View>
            </ScrollView>
        </SafeAreaView>
        }
        </>
    );
};


const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
    promo_local:state.auth.promo_local,
    
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,
  Edit_promo_local,

  })(PromocoesInterna);
 export default LoginConnect;