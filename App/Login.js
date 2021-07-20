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
  Button,
  AsyncStorage,
} from 'react-native';
import { DrawerActions, NavigationActions, StackActions, NavigationEvents} from 'react-navigation';
import Estilos from './Estilos';
import {NavigationApps,actions,googleMapsTravelModes, mapsTravelModes} from "react-native-navigation-apps";
import { connect } from 'react-redux';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import { 
  Edit_id_tb_user,
  Edit_c_nome,
  Edit_c_email,
  Edit_c_telefone,
  Edit_verifica_login,
  Edit_redireciona_login,

} from './Actions/LoginActions';
import ImageResize from 'react-native-scalable-image';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { TextInputMask } from 'react-native-masked-text';
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


Login.navigationOptions = ({ navigation }) => {
    const { state, setParams, navigate } = navigation;
    const params = state.params || {};
    return {
      header: 
     <Header tipo={'LOGIN'} navigation={navigation}></Header>
    }
}



function Login(props) {

  

  function Navega(pagina){
    props.navigation.navigate(pagina);
    props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: pagina })],
    }))
   }


  changePwdType = () => {
      let newState;
      if (c_senha) {
          newState = {
              icEye: 'visibility',
              password: false
          }
      } else {
          newState = {
              icEye: 'visibility-off',
              password: true
          }
      }

      // set new state value
      this.setState(newState)

  }


  
  //GLOBAIS
  const { navigate } = props.navigation;
  const [falha, setFalha] = useState(false);
  const [load, setLoad] = useState(false);
  //GLOBAIS

  //LOCAIS

  //const [c_email, setc_email] = useState('a@a.com.br');
  const [c_email, setc_email] = useState('');
  const [v_email, setv_email] = useState(false);
  const [m_email, setm_email] = useState();


  //const [c_senha, setc_senha] = useState('102030');
  const [c_senha, setc_senha] = useState('');
  const [v_senha, setv_senha] = useState(false);
  const [m_senha, setm_senha] = useState();
  const [mostra_senha, setmostra_senha] = useState(true);
  const [icone_senha, seticone_senha] = useState('visibility-off');
  const [esqueci, setesqueci] = useState(0);

  
  //LOCAIS


  const emailInput = useRef();
  const senhaInput = useRef();



  function Submit(){
    valida = false;
    
    //EMAIL
    if(c_email == null || c_email == ''){
        setv_email(true);
        setm_email('Campo e-mail é obrigatório!');
        valida = true;
      }else{

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!reg.test(c_email)){
          setv_email(true);
          setm_email('Campo e-mail não é válido!');
          valida = true;
        }else{
            setv_email(false);
            setm_email('');
        }


      }
    
    //SENHA
    if(c_senha == null || c_senha == ''){
        setv_senha(true);
        setm_senha('Campo senha é obrigatório!');
        valida = true;
    }else{
        if(c_senha.length<6){
            setv_senha(true);
            setm_senha('Campo senha está incompleto, mínimo 6 caracteres!');
            valida = true;
        }else{
            setv_senha(false);
            setm_senha('');
        }

    }


    if(!valida === true){
      //alert('foi');

      let data = JSON.stringify({            
        c_email: c_email,                   
        c_senha: c_senha,                                     
      })
      setLoad(true);
      PostaDados(
        'login.php', //url
        data,
      )
      .then(tb_user => {
        //console.log(tb_user);
        

        
        if(tb_user[0].retorno === true){


  
         // props.Edit_verifica_login('CadastroEdit');
          props.Edit_id_tb_user(tb_user[0].id_tb_user);
          props.Edit_c_nome(tb_user[0].c_nome);
          props.Edit_c_email(tb_user[0].c_email);
          props.Edit_c_telefone(tb_user[0].c_telefone);
 
 
 
          AsyncStorage.setItem("id_tb_user", tb_user[0].id_tb_user);
          AsyncStorage.setItem("c_nome", tb_user[0].c_nome);
          AsyncStorage.setItem("c_email", tb_user[0].c_email);
          AsyncStorage.setItem("c_telefone", tb_user[0].c_telefone);
        

         // alert('e-mail cadastrado com sucesso');
         inputRefLogin.current.showMessage({
          description: "",
          message: "Login efetuado com sucesso!",
          type: "success",
          backgroundColor: "#555555", // background color
          color: "#FFFFFF", // text color
          floating:true,
          duration:2000,
        });
        


       
          setTimeout(() => {
            if(props.navigation.getParam('retorno', 'no-retorno') == 'no-retorno'){
              setc_email('');
              setc_senha('');
              
              
         
            
                props.navigation.navigate('LoginVerifica');
                props.Edit_verifica_login('CadastroEdit');               
                props.navigation.dispatch(StackActions.reset({
                  index: 0,
                  actions: [NavigationActions.navigate({ routeName: 'LoginVerifica' })],
                }));
                setTimeout(() => {
                  setLoad(false);

               }, 100);

               props.navigation.navigate('Home');
             
            }else{
              setc_email('');
              setc_senha('');
              setLoad(false);
              
  
              //props.navigation.navigate('LoginVerifica');
              props.Edit_verifica_login('CadastroEdit');
              props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'LoginVerifica' })],
              }));
              props.Edit_redireciona_login('');
             // alert(props.redireciona_login);
             // setTimeout(() => {
              props.navigation.navigate(props.navigation.getParam('retorno', 'no-retorno'));  
              //}, 200);
              

            }
          }, 2500);
       
         
            
        




        



        
        }else if(tb_user[0].retorno === false){
          setesqueci(1);
          inputRefLogin.current.showMessage({
            description: "",
            message: "Login ou senha incorretos!",
            type: "success",
            backgroundColor: "#555555", // background color
            color: "#FFFFFF", // text color
            floating:true,
            duration:2000,
          });

          setTimeout(() => {
            //alert('foi');
            //props.navigation.navigate('Home');

            setLoad(false);
          }, 2500);
          
        }

      })
      .catch(err => {
        setLoad(false);
        setFalha(true);
      });
    }

  }




  function Esqueci(){
    valida = false;
    
    //EMAIL
    if(c_email == null || c_email == ''){
        setv_email(true);
        setm_email('Campo e-mail é obrigatório!');
        valida = true;
      }else{
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!reg.test(c_email)){
            setv_email(true);
            setm_email('Campo e-mail não é válido!');
            valida = true;
        }else{
            setv_email(false);
            setm_email('');
        }
      }
    


    if(!valida === true){
      //alert('foi');

      let data = JSON.stringify({            
        c_email: c_email,                                           
      })
      setLoad(true);
      PostaDados(
        'senha.php', //url
        data,
      )
      .then(tb_user => {
        //console.log(tb_user);
        

        
        if(tb_user[0].retorno === true){
          
         //props.Edit_id_tb_user(tb_user[0].c_email);
       

         // alert('e-mail cadastrado com sucesso');
         inputRefLogin.current.showMessage({
          description: "",
          message: "Senha enviada com sucesso para o e-mail "+tb_user[0].c_email,
          type: "success",
          backgroundColor: "#555555", // background color
          color: "#FFFFFF", // text color
          floating:true,
          duration:4000,
        });
        
        setTimeout(() => {

          setLoad(false);
          
          
        }, 4500);
       
        
        }else if(tb_user[0].retorno === false){
          setesqueci(1);
          inputRefLogin.current.showMessage({
            description: "",
            message: "E-mail não encontrado no sistema!",
            type: "success",
            backgroundColor: "#555555", // background color
            color: "#FFFFFF", // text color
            floating:true,
            duration:4000,
          });

          setTimeout(() => {
            //alert('foi');
            

            setLoad(false);
          }, 4500);
          
        }
        

      })
      .catch(err => {
        //console.log(err);
        setLoad(false);
        setFalha(true);
      });
    }

  }


  function TextoBilheteriaBold(props){
    return <Text style={[Estilos.TextoBilheteriaBold]}>{props.children}</Text>
  }


  function TextoNegrito(props){
    return <Text style={[Estilos.TextoNegritoEvento]}>{props.children}</Text>
  }

  function MostraSenha(){

    setmostra_senha(!mostra_senha);
    if(mostra_senha){
      seticone_senha('visibility');
    }else{
      seticone_senha('visibility-off');
    }
  }



  const [search, setsearch] = useState('Rua sousa brasil, 83');
  const [tb_banner, settb_banner] = useState([props.navigation.getParam('item')]);
  const inputRefLogin = useRef(null);

    return (
        <>
        <SafeAreaView style={[{flex:1}]}>



              
            {
                    load === true
                    ?
                    <View style={{flex:1}}>
                    <Load visivel={true} cor={'#1b1b1b'} tamanho={'small'} /*  */ navigation={props.navigation} />
           
                    <FlashMessage ref={inputRefLogin} position="bottom" style={{backgroundColor:'#000000'}} />
                    </View>
                    :
                    <ScrollView style={[{flex:1}]} keyboardShouldPersistTaps={'handled'}>

       
            <View style={{alignItems:'center', paddingTop:Dimensions.get('window').height/40,}} keyboardShouldPersistTaps={'handled'}>

                    
               
       
                
                    <View style={[Estilos.CampoFormFora,{}]}>
                    <Text style={[Estilos.LabelCampo,{}]}>E-mail</Text>
                    
                    <TextInput
                            keyboardType='email-address'
                            style={Estilos.campoForm}
                            placeholderTextColor = "#000"
                            autoCapitalize = "none"
                            value={c_email} 
                            onChangeText={text =>setc_email(text)}
                            onSubmitEditing={event => senhaInput.current.focus()}
                            ref={emailInput}
                            returnKeyType={ "next" }
                            blurOnSubmit={ false }
                            />
                            { 
                            v_email && 
                            <Text style={[Estilos.LabelCampoValida,{}]}>
                                {
                            m_email
                            }</Text> }
                    </View>

                
                
                    <View style={[Estilos.CampoFormFora,{}]}>
                    <Text style={[Estilos.LabelCampo,{}]}>Senha</Text>
                    <TextInput
                            
                            //keyboardType='email-address'
                            style={Estilos.campoForm}
                            placeholderTextColor = "#000"
                            autoCapitalize = "none"
                            value={c_senha} 
                            secureTextEntry={mostra_senha}
                            onChangeText={text =>setc_senha(text)}
                            onSubmitEditing={Keyboard.dismiss}
                            ref={senhaInput}
                            returnKeyType={ "done" }
                            blurOnSubmit={ false }
                            password={true}
                            />
                            { 
                            v_senha && 
                            <Text style={[Estilos.LabelCampoValida,{}]}>
                                {
                            m_senha
                            }</Text> }

                    <TouchableOpacity onPress={()=>MostraSenha()}
                    style={{position:'absolute', right:10, top:15}}> 
                        <MaterialIcon name={icone_senha} size={Dimensions.get('window').height/30} color={'#555555'}  keyboardShouldPersistTaps="handled"/>
                    </TouchableOpacity>
                    </View>

                 

                    <TouchableOpacity style={[Estilos.ForaBotaoNotificacaoBranco,{marginTop:Dimensions.get('window').height/40}]}
                    onPress={()=>Submit()} keyboardShouldPersistTaps={'handled'}>
                        <Text style={Estilos.TextoBotaoNotificao}>ENTRAR</Text>
                    </TouchableOpacity>

                       {//esqueci == 0?
                    //null
                    //:
                    <TouchableOpacity onPress={()=>Esqueci()} style={[Estilos.TextoBotaoNotificaoPularFora,{paddingTop:Dimensions.get('window').height/40}]}>
                        <Text style={Estilos.TextoJaPossuo}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                   }

                    <TouchableOpacity onPress={()=>Navega('Cadastro')} style={[Estilos.TextoBotaoNotificaoPularFora]}>
                        <Text style={Estilos.TextoJaPossuo}>Não possuo cadastro</Text>
                    </TouchableOpacity>


            {/*}
                    <View style={{}}>
                     <Text style={Estilos.TextoJaPossuo}>OU</Text>
                    </View>

             

                    <View style={[Estilos.QuadroCadastroFora,{marginTop:Dimensions.get('window').height/50, borderColor:'#000000',}]}>

                      <TouchableOpacity style={[Estilos.QuadroCadastroEsq]}>
                        <View style={[,{marginRight:5}]}><ImageResize source={require('../assets/g_login_black.png')} width={Dimensions.get('window').width/13} /></View>
                        <View><Text style={[Estilos.QuadroCadastroEsqTexto,{color:'#000000',}]}>Entrar com Google</Text></View>
                      </TouchableOpacity>

                      <View style={{width:1, height:30, backgroundColor:'#000000'}}></View>
                      <TouchableOpacity style={[Estilos.QuadroCadastroDir]}>
                        <View style={[,{marginRight:5}]}><ImageResize source={require('../assets/f_login_black.png')} width={Dimensions.get('window').width/13} /></View>
                        <View><Text style={[Estilos.QuadroCadastroEsqTexto,{color:'#000000',}]}>Entrar com Facebook</Text></View>
                      </TouchableOpacity>
                      
                    </View>
                  */}
              </View>
              </ScrollView>
            }

              
              


              
            

             {/* GLOBAIS */}
   
            
            {/* GLOBAIS */}
        </SafeAreaView>
        
        </>
    );
};


const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
    c_nome:state.auth.c_nome,
    c_email:state.auth.c_email,
    c_telefone:state.auth.c_telefone,
    verifica_login:state.auth.verifica_login,
    redireciona_login:state.auth.redireciona_login,

  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,
  Edit_c_nome,
  Edit_c_email,
  Edit_c_telefone,
  Edit_verifica_login,
  Edit_redireciona_login,

  })(Login);
 export default LoginConnect;