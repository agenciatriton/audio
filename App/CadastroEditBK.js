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
  Switch,
  AsyncStorage,
} from 'react-native';

import { openSettings, check, request, PERMISSIONS} from 'react-native-permissions';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import MultiSelect from 'react-native-multiple-select';
import { DrawerActions, NavigationActions, StackActions, NavigationEvents } from 'react-navigation-drawer';
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
import OneSignal from 'react-native-onesignal';
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


CadastroEdit.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
   <Header tipo={'CADASTRO EDIT'} navigation={navigation}></Header>
  }
}




function CadastroEdit(props) {




  const inputRefCadastroEdit = useRef(null);
  const _cnascimento = useRef(null);

  onSelectedItemsChange = selectedItems => {
    //alert(selectedItems+'dd');
    set_selectedItems(selectedItems);

    //this.setState({  });
  };

  


  //ONE SIGNAL
  useEffect(() => {
    OneSignal.init("18135e37-745a-4f35-b4e1-b923a8d09482");
    //OneSignal.registerForPushNotifications();
  }, []);
  //ONESIGNAL



useEffect(() => {

  let myInterval = setInterval(() => {
    
      
    if(Platform.OS === 'ios'){
    
    }else{
      let status = "";
      OneSignal.getPermissionSubscriptionState((subscriptionState) => {
          status = JSON.parse(subscriptionState.subscriptionEnabled, null, 2);
      //alert(status);
      set_res(status);
        
      }); 
    }




  }, 2000);   





},[]);
  

  useEffect(() => {
    props.Edit_verifica_login('CadastroEdit');
    let data = JSON.stringify({            
      id_tb_user: props.id_tb_user,                   
    })
    setLoad(true);
    PostaDados(
      'cadastro_edit.php', //url
      data,
    )
    .then(tb_user => {
      //console.log(tb_user);
      var myArray = tb_user[0].c_genero.split(',');
      if(tb_user[0].retorno === true){
         // alert(tb_user[0].c_nome);
       setc_nome(tb_user[0].c_nome);
       setc_email(tb_user[0].c_email);
       setc_telefone(tb_user[0].c_telefone);
       setc_senha(tb_user[0].c_senha);
       setc_genero(tb_user[0].c_genero);
       set_selectedItems(myArray);
       setc_nascimento(tb_user[0].c_nascimento);
       setLoad(false);
      }

    })
    .catch(err => {
     // alert('erro');
      console.log(err.toString());
      setLoad(false);
      setFalha(true);
    });
  
 },[]);




//GLOBAIS
const { navigate } = props.navigation;
const [falha, setFalha] = useState(false);
const [load, setLoad] = useState(false);
//GLOBAIS

//LOCAIS
const [c_nome, setc_nome] = useState();
const [v_nome, setv_nome] = useState(false);
const [m_nome, setm_nome] = useState();

const [c_nascimento, setc_nascimento] = useState();
const [v_nascimento, setv_nascimento] = useState(false);
const [m_nascimento, setm_nascimento] = useState();

const [c_email, setc_email] = useState();
const [v_email, setv_email] = useState(false);
const [m_email, setm_email] = useState();

const [c_telefone, setc_telefone] = useState();
const [v_telefone, setv_telefone] = useState(false);
const [m_telefone, setm_telefone] = useState();

const [c_senha, setc_senha] = useState();
const [v_senha, setv_senha] = useState(false);
const [m_senha, setm_senha] = useState();
const [mostra_senha, setmostra_senha] = useState(true);
const [icone_senha, seticone_senha] = useState('visibility-off');



const [res, set_res] = useState(VerificaStatusPush());
const [reslocalizacao, set_reslocalizacao] = useState(VerificaStatusLocalizacao());




const [c_genero, setc_genero] = useState([]);



selectedItems
const [selectedItems, set_selectedItems] = useState();
const [items, setitems] = useState([{
  id: '1',
  name: 'Pop',
}, {
  id: '2',
  name: 'Rock',
},
{
  id: '3',
  name: 'Indie',
}, {
  id: '4',
  name: 'Folk',
}, {
  id: '5',
  name: 'Hip Hop',
}, {
  id: '6',
  name: 'Funk',
}, {
  id: '7',
  name: 'Pagode',
}, {
  id: '8',
  name: 'Samba',
}, {
  id: '9',
  name: 'Reggae',
}, {
  id: '10',
  name: 'Musica Popular Brasileira',
}, {
  id: '11',
  name: 'Eletronico',
}, {
  id: '12',
  name: 'Axé',
}

]);


//LOCAIS

const nomeInput = useRef();
const emailInput = useRef();
const telefoneInput = useRef();
const senhaInput = useRef();
const nascimentoInput = useRef();

function Submit(){

  props.Edit_verifica_login('CadastroEdit');

  valida = false;
  //NOME
  if(c_nome == null || c_nome == ''){
    setv_nome(true);
    setm_nome('Campo nome é obrigatório!');
    valida = true;
  }else{
    setv_nome(false);
    setm_nome('');
  }


  //NASCIMENTO
  if(c_nascimento == null || c_nascimento == ''){
    setv_nascimento(true);
    setm_nascimento('Campo data de nascimento é obrigatório!');
    valida = true;
  }else{

    if(c_nascimento.length<10){
      setv_nascimento(true);
      setm_nascimento('Campo Nascimento está incompleto!');
      valida = true;
    }else{
      setv_nascimento(false);
      setm_nascimento('');
    } 
  }



  

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

  //CELULAR



  if(c_telefone == null || c_telefone == ''){
    setv_telefone(true);
    setm_telefone('Campo telefone é obrigatório!');
    valida = true;
  }else{
    if(c_telefone.length<11){
        setv_telefone(true);
        setm_telefone('Campo telefone está incompleto!');
        valida = true;
    }else{
        setv_telefone(false);
        setm_telefone('');
    }

  }


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

  

  let p_generos = selectedItems.toString();




  let str = p_generos;
  let res = str.split(",");
  //console.log(res.length);

  let existe;
  let total = '';
  let arraytotal = [];
  for (i = 1; i < 13; ) {
    existe = '';
    for (x = 0; x < res.length; x++) {

      if(res[x] == i){
        existe = 'sim';
      }else{
        //console.log(i+":false")
      }
      
    }

    if(existe == 'sim'){
      if(i < 12){
      total = total + i + ":true,";
      }else{
      total = total + i + ":true";
      }
      arraytotal.push("true");
      console.log(i+":true")
    }else{
      if(i < 12){
      total = total + i + ":false,";
      }else{
      total = total
       + i + ":false";
      }
      arraytotal.push("false");
      console.log(i+":false")
    }
    i++
  }
  



  if(!valida === true){
    
  //alert('foi');
  setLoad(true);
  let data = JSON.stringify({
    id_tb_user: props.id_tb_user,                   
    c_nome: c_nome,                   
    c_email: c_email,                   
    c_senha: c_senha,                   
    c_telefone: c_telefone,  
    c_nascimento: c_nascimento,  
    c_genero: p_generos,                 
  })
  
  PostaDados(
    'cadastro_edit_submit.php', //url
    data,
  )
  .then(tb_user => {
    //console.log(tb_user);

    OneSignal.sendTags({
      id_tb_user: props.id_tb_user,
      c_nome: c_nome,
      c_email: c_email, 
      c_senha: c_senha, 
      c_telefone: c_telefone,
      c_nascimento: c_nascimento,
      c_genero: p_generos,
      c_dia_mes_aniversario: c_nascimento.substring(3, 5)+c_nascimento.substring(0, 2),
      g_1: arraytotal[0],
      g_2: arraytotal[1],
      g_3: arraytotal[2],
      g_4: arraytotal[3],
      g_5: arraytotal[4],
      g_6: arraytotal[5],
      g_7: arraytotal[6],
      g_8: arraytotal[7],
      g_9: arraytotal[8],
      g_10: arraytotal[9],
      g_11: arraytotal[10],
      g_12: arraytotal[11],
  });





    if(tb_user[0].retorno === true){

       props.Edit_c_nome(c_nome);
       props.Edit_c_email(c_email);
       props.Edit_c_telefone(c_telefone);

        // alert('e-mail cadastrado com sucesso');
        inputRefCadastroEdit.current.showMessage({
        description: "",
        message: "Cadastro atualizado com sucesso!",
        type: "success",
        backgroundColor: "#555555", // background color
        color: "#FFFFFF", // text color
        floating:true,
        duration:4000,
        });

          setTimeout(() => {
            //alert('foi');
            //props.navigation.navigate('Home');
            setLoad(false);
          }, 4500);
    
    }

  })
  .catch(err => {
    console.log(err.toString());
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


function MudaStatusPush(res){


  if(res == true)
  {
    //Perform any task here which you want to execute on Switch ON event.
    //Alert.alert("Switch is On.");



    props.navigation.navigate('CadastroEdit');     
    props.Edit_redireciona_login('CadastroEdit');
    openSettings().catch(() => console.warn('cannot open settings'));
    OneSignal.setSubscription(true);
    set_res(true);
  }
  else{
    //Perform any task here which you want to execute on Switch OFF event.
    //Alert.alert("Switch is Off.");
    props.navigation.navigate('CadastroEdit');     
    props.Edit_redireciona_login('CadastroEdit');;
    openSettings().catch(() => console.warn('cannot open settings'));
    OneSignal.setSubscription(false);
    set_res(false);
  }
}

function VerificaStatusPush(){


  if(Platform.OS === 'ios'){
    OneSignal.promptForPushNotificationsWithUserResponse(myCallback);
  }else{
    let status = "";
    OneSignal.getPermissionSubscriptionState((subscriptionState) => {
        status = JSON.parse(subscriptionState.subscriptionEnabled, null, 2);
    //alert(status);
    set_res(status);
      
    }); 
  }


 

}

function myCallback(permission){


//alert(permission.toString())
  //alert('dd');
  //alert(permission.toString());
  //swiper.scrollBy(1);
 // alert(permission.toString());

  if(permission == true){
    set_res(true);

  }else{
    set_res(false);
    
  }
}







function MudaStatusLocalizacao(valor){

  

    props.navigation.navigate('CadastroEdit');     


  if(Platform.OS === 'ios'){
    request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
       // setLoad(false);
        console.log(result);

        if(valor === true){
        if(result.toString() == 'granted'){
          props.Edit_redireciona_login('');
          set_reslocalizacao(true);
        }
        }else{
          props.Edit_redireciona_login('CadastroEdit');
          openSettings().catch(() => console.warn('cannot open settings'));
        }



        if(result.toString() == 'unvailable'){
          props.Edit_redireciona_login('CadastroEdit');
          openSettings().catch(() => console.warn('cannot open settings'));
            
          
        }
        
        if(result.toString() == 'denied'){
          props.Edit_redireciona_login('CadastroEdit');
              openSettings().catch(() => console.warn('cannot open settings'));   
        }
        
        if(result.toString() == 'blocked'){
          props.Edit_redireciona_login('CadastroEdit');
              openSettings().catch(() => console.warn('cannot open settings'));
        }

    })
  }else{
    //setLoad(false);
        request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
         // setLoad(false);
         console.log(result);

         if(valor === true){
         if(result.toString() == 'granted'){
           set_reslocalizacao(true);
         }
         }else{
           props.Edit_redireciona_login('CadastroEdit');
           openSettings().catch(() => console.warn('cannot open settings'));
         }
 
 
 
         if(result.toString() == 'unvailable'){
           props.Edit_redireciona_login('CadastroEdit');
           openSettings().catch(() => console.warn('cannot open settings'));
             
           
         }
         
         if(result.toString() == 'denied'){
           props.Edit_redireciona_login('CadastroEdit');
               openSettings().catch(() => console.warn('cannot open settings'));   
         }
         
         if(result.toString() == 'blocked'){
           props.Edit_redireciona_login('CadastroEdit');
               openSettings().catch(() => console.warn('cannot open settings'));
         }

      })
    }

    
}

function VerificaStatusLocalizacao(){
  

 

    if(Platform.OS === 'ios'){
      check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
         // setLoad(false);
          console.log(result);
  
  
          if(result.toString() == 'granted'){
           set_reslocalizacao(true);
          }
  
          if(result.toString() == 'unvailable'){
            set_reslocalizacao(false);     
          } 
          
          if(result.toString() == 'denied'){
            set_reslocalizacao(false);     
          }
          
          if(result.toString() == 'blocked'){
            set_reslocalizacao(false);     
          }
  
      })
    }else{
      //setLoad(false);
      check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
            console.log(
              result.toString()
          );
  
          if(result.toString() == 'granted'){
            set_reslocalizacao(true);
          }
  
          if(result.toString() == 'unvailable'){
            set_reslocalizacao(false);         
          }
          
          if(result.toString() == 'denied'){
            set_reslocalizacao(false);   
          }
          
          if(result.toString() == 'blocked'){
            set_reslocalizacao(false);   
          }
  
        })
      }
  
 
}

  




function MostraSenha(){

setmostra_senha(!mostra_senha);
if(mostra_senha){
seticone_senha('visibility');
}else{
seticone_senha('visibility-off');
}
}



    return (
 
      <SafeAreaView style={[{flex:1}]}>

           {
                    load === true
                    ?
                    <View style={{flex:1}}>

                    <Load visivel={true} cor={'#1b1b1b'} tamanho={'small'} /*  */ navigation={props.navigation} />
                    <FlashMessage ref={inputRefCadastroEdit} position="bottom" style={{backgroundColor:'#000000'}} />
                    </View>
                    :
                    <ScrollView style={[{flex:1}]} keyboardShouldPersistTaps={'handled'}>
                     
                    <View style={{alignItems:'center', paddingTop:Dimensions.get('window').height/40,}} keyboardShouldPersistTaps={'handled'}>
                  
                  <View style={[Estilos.CampoFormFora,{}]}>
                  <Text style={[Estilos.LabelCampo,{}]}>Nome</Text>
                  <TextInput
                          keyboardType='default'
                          style={Estilos.campoForm}
                          placeholderTextColor = "#000"
                          autoCapitalize = "none"
                          value={c_nome} 
                          onChangeText={text =>setc_nome(text)}
                          onSubmitEditing={event => this._cnascimento.getElement().focus()}
                          ref={nomeInput}
                          returnKeyType={ "next" }
                          blurOnSubmit={ false }
                          />
                          { 
                          v_nome && 
                          <Text style={[Estilos.LabelCampoValida,{}]}>
                              {
                          m_nome
                          }</Text> }
                  </View>


                <View style={[Estilos.CampoFormFora,{}]}>
                <Text style={[Estilos.LabelCampo,{}]}>Data de nascimento</Text>
                <TextInputMask
                    returnKeyType={ "done" }
                    ref={ref => this._cnascimento = ref}
                    maxLength={14}
                    style={Estilos.campoForm}
                    underlineColorAndroid = "transparent"
                    
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"
                    type={'datetime'}
                    options={{
                        format: 'DD/MM/YYYY'
                    }}
                    value={c_nascimento}
                    onChangeText={text => 
                        setc_nascimento(text)
                        //this.setState({x_cpf: text})
                    }


                    blurOnSubmit={ false }
                    onSubmitEditing={event => emailInput.current.focus()}
                   // returnKeyType={ "next" }
                   
                    />
                        { 
                        v_nascimento && 
                        <Text style={[Estilos.LabelCampoValida,{}]}>
                            {
                        m_nascimento
                        }</Text> }
                </View>



                  
  
                
                  <View style={[Estilos.CampoFormFora,{}]}>
                  <Text style={[Estilos.LabelCampo,{}]}>E-mail</Text>
                  <TextInput
                          keyboardType='email-address'
                          style={Estilos.campoForm}
                          placeholderTextColor = "#000"
                          autoCapitalize = "none"
                          value={c_email} 
                          onChangeText={text =>setc_email(text)}
                          //onSubmitEditing={event => this._cpfRef.getElement().focus()}
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
                  <Text style={[Estilos.LabelCampo,{}]}>Celular</Text>
                 
                      <TextInputMask
                      type={'custom'}
                      maxLength={14}
                      style={Estilos.campoForm}
                      placeholderTextColor = "#000"
                      keyboardType='numeric'
                      options={{
                        /**
                         * mask: (String | required | default '')
                         * the mask pattern
                         * 9 - accept digit.
                         * A - accept alpha.
                         * S - accept alphanumeric.
                         * * - accept all, EXCEPT white space.
                        */
                        mask: '99-999999999'
                      }}
                      value={c_telefone}
                      onChangeText={text =>setc_telefone(text)}
                      onSubmitEditing={event => senhaInput.current.focus()}
                      //ref={ref => this._cpfRef = ref}
                      returnKeyType={ "done" }
                      //blurOnSubmit={ false }
                      />
  
                          { 
                          v_telefone && 
                          <Text style={[Estilos.LabelCampoValida,{}]}>
                              {
                          m_telefone
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


                  <View style={[Estilos.CampoFormFora,{}]}>
                {/*<Text style={[Estilos.LabelCampo,{}]}>Selecione seus gêneros musicais</Text>*/}
                      <MultiSelect
                        hideTags
                        items={items}
                        uniqueKey="id"
                        ref={(component) => { this.multiSelect = component }}
                        onSelectedItemsChange={onSelectedItemsChange}
                        selectedItems={selectedItems}
                        selectText="Seus gêneros musicais"
                        searchInputPlaceholderText="Buscar gêneros..."
                        onChangeInput={ (text)=> console.log(text)}
                        altFontFamily="Roboto-Light"
                        fontFamily="Roboto-Light"
                        itemFontFamily="Roboto-Light"
                        selectedItemFontFamily="Roboto-Light"
                        textColor='#000000'
                        fontSize={RFValue(15)}
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        tagTextColor="#CCC"
                        selectedItemTextColor="#000000"
                        selectedItemIconColor="#000000"
                        itemTextColor="#000"
                        displayKey="name"
                        searchInputStyle={{ color: '#000000',  fontSize: RFValue(15),
                        fontFamily: 'Roboto-Light',
                         }}
                        styleTextDropdown={{ color: '#000000',  fontSize: RFValue(15),
                        fontFamily: 'Roboto-Light',
                         }}
                         styleTextDropdownSelected={{ color: '#000000',  fontSize: RFValue(15),
                        fontFamily: 'Roboto-Light',
                         }}
                        submitButtonColor="#000000"
                        submitButtonText="Fechar"
                      />
         
                </View>
               
                

                  <View style={{flexDirection:'row', width:'90%', paddingTop:10, paddingBottom:10}}>
                    <View style={{justifyContent:'center', alignItems:'flex-start', flex:1}}><Text style={[Estilos.LabelCampo,{textAlign:'left'}]}>Notificações</Text></View>
                    <View style={{justifyContent:'center', flex:1, alignItems:'flex-end'}}>

                      
                    <Switch
                    onValueChange={(value) => MudaStatusPush(value)}
                    style={{justifyContent:'flex-end', alignItems:'flex-end'}}
                    value={res}
                    onTintColor='#999999'
                  // tintColor='#1a53ae'
                    thumbTintColor='#000000'
                    />  

                    
                    </View>
                  </View>
                
  

                  <View style={{flexDirection:'row', width:'90%', paddingTop:10, paddingBottom:10}}>
                    <View style={{justifyContent:'center', alignItems:'flex-start', flex:1}}><Text style={[Estilos.LabelCampo,{textAlign:'left'}]}>Localização</Text></View>
                    <View style={{justifyContent:'center', flex:1, alignItems:'flex-end'}}>
                    <Switch
                    onValueChange={(value) => MudaStatusLocalizacao(value)}
                    style={{justifyContent:'flex-end', alignItems:'flex-end'}}
                    value={reslocalizacao}
                    onTintColor='#999999'
                  // tintColor='#1a53ae'
                    thumbTintColor='#000000'
                    />  
                    </View>
                  </View>


              
              
                         
  
  
                  <TouchableOpacity style={[Estilos.ForaBotaoNotificacaoBranco,{marginTop:Dimensions.get('window').height/40,marginBottom:Dimensions.get('window').height/40}]}
                  onPress={()=>Submit()} keyboardShouldPersistTaps={'handled'}>
                      <Text style={Estilos.TextoBotaoNotificao}>GRAVAR DADOS</Text>
                  </TouchableOpacity>
  
          
  
  
                </View>
                    

                    </ScrollView>
           }
      </SafeAreaView>

      

      
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


  })(CadastroEdit);
 export default LoginConnect;