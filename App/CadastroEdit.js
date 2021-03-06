import React , { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Modal,
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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
    setLoad(true);
    
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
  
 },[props.verifica_login]);




//GLOBAIS
const { navigate } = props.navigation;
const [falha, setFalha] = useState(false);
const [load, setLoad] = useState(false);
//GLOBAIS

//LOCAIS
const [modal, set_modal] = useState(false);
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
  name: 'M??sica Popular Brasileira',
}, {
  id: '11',
  name: 'Eletronico',
}, {
  id: '12',
  name: 'Ax??',
}, {
  id: '13',
  name: 'Sertanejo',
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
    setm_nome('Campo nome ?? obrigat??rio!');
    valida = true;
  }else{
    setv_nome(false);
    setm_nome('');
  }


  //NASCIMENTO
  if(c_nascimento == null || c_nascimento == ''){
    setv_nascimento(true);
    setm_nascimento('Campo data de nascimento ?? obrigat??rio!');
    valida = true;
  }else{

    if(c_nascimento.length<10){
      setv_nascimento(true);
      setm_nascimento('Campo Nascimento est?? incompleto!');
      valida = true;
    }else{
      setv_nascimento(false);
      setm_nascimento('');
    } 
  }



  

  //EMAIL
  if(c_email == null || c_email == ''){
    setv_email(true);
    setm_email('Campo e-mail ?? obrigat??rio!');
    valida = true;
  }else{

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!reg.test(c_email)){

        setv_email(true);
        setm_email('Campo e-mail n??o ?? v??lido!');
        valida = true;
    }else{
        setv_email(false);
        setm_email('');
    }
  }

  //CELULAR



  // if(c_telefone == null || c_telefone == ''){
  //   setv_telefone(true);
  //   setm_telefone('Campo telefone ?? obrigat??rio!');
  //   valida = true;
  // }else{
  //   if(c_telefone.length<11){
  //       setv_telefone(true);
  //       setm_telefone('Campo telefone est?? incompleto!');
  //       valida = true;
  //   }else{
  //       setv_telefone(false);
  //       setm_telefone('');
  //   }

  // }


  if(c_senha == null || c_senha == ''){
    setv_senha(true);
    setm_senha('Campo senha ?? obrigat??rio!');
    valida = true;
  }else{
    if(c_senha.length<6){
        setv_senha(true);
        setm_senha('Campo senha est?? incompleto, m??nimo 6 caracteres!');
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
      if(i < 13){
      total = total + i + ":true,";
      }else{
      total = total + i + ":true";
      }
      arraytotal.push("true");
      console.log(i+":true")
    }else{
      if(i < 13){
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
      g_13: arraytotal[12],
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
            props.navigation.navigate('Home');
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
           <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={() => {
                // Alert.alert('Modal has been closed.');
            }}>
            <View style={[styles.ModalFora]}>
                <View style={[styles.BgModal, Estilos.CinzaBgClaro]}>
                        <TouchableOpacity
                        onPress={()=>{set_modal(false)}}
                        style={{justifyContent:"flex-end", alignItems:'flex-end', width:'85%'}}><Text style={[styles.TextoAtencao2,{marginTop:60}]}>X</Text></TouchableOpacity>
                        <ScrollView style={[styles.ModalDentro]}>
                         
                            <Text style={[styles.TextoAtencao]}>POL??TICA DE PRIVACIDADE</Text>

                            <View style={[styles.foraProblema]}>
                          
                            </View>
                            <View style={{marginBottom:50}}>
                              <Text style={[styles.TextoVerifique,{textAlign:"left"}]}>
                              AUDIO PROMO????ES E EVENTOS LTDA ("n??s", "n??s" ou "nosso") opera o site / aplicativo m??vel AUDIO (o "Servi??o").{'\n\n'}

Esta p??gina informa sobre nossas pol??ticas relativas ?? coleta, uso e divulga????o de dados pessoais quando voc?? usa nosso Servi??o e as op????es associadas a esses dados.{'\n\n'}

Usamos seus dados para fornecer e melhorar o servi??o. Ao usar o Servi??o, voc?? concorda com a coleta e uso de informa????es de acordo com esta pol??tica. A menos que definido de outra forma nesta Pol??tica de Privacidade, os termos usados ??????nesta Pol??tica de Privacidade t??m os mesmos significados que em nossos Termos e Condi????es.{'\n\n'}

Coleta e uso de informa????es{'\n\n'}
Coletamos v??rios tipos diferentes de informa????es para v??rias finalidades para fornecer e melhorar nosso Servi??o para voc??.{'\n\n'}

Tipos de dados coletados{'\n\n'}
Dados Pessoais{'\n\n'}
Durante o uso do nosso Servi??o, podemos solicitar que voc?? nos forne??a algumas informa????es pessoais identific??veis ??????que podem ser usadas para contat??-lo ou identific??-lo ("Dados Pessoais"). Informa????es pessoalmente identific??veis ??????podem incluir, mas n??o est??o limitadas a:{'\n\n'}

Endere??o de e-mail{'\n'}
Nome e sobrenome{'\n'}
N??mero de telefone{'\n'}
G??nero{'\n'}
Data de nascimento{'\n'}
Apelido{'\n'}
CPF{'\n'}
Cookies e dados de uso{'\n'}
Dados de uso{'\n'}
Quando voc?? acessa o Servi??o por ou por meio de um dispositivo m??vel, podemos coletar determinadas informa????es automaticamente, incluindo, entre outros, o tipo de dispositivo m??vel que voc?? usa, o ID exclusivo do dispositivo m??vel e o endere??o IP do dispositivo m??vel. , o seu sistema operacional m??vel, o tipo de navegador de Internet m??vel que voc?? usa, identificadores exclusivos de dispositivos e outros dados de diagn??stico ("Dados de Uso").{'\n'}{'\n'}

Dados de acompanhamento e cookies{'\n\n'}
Usamos cookies e tecnologias de rastreamento semelhantes para rastrear a atividade em nosso Servi??o e manter certas informa????es.{'\n\n'}

Cookies s??o arquivos com pequena quantidade de dados que podem incluir um identificador exclusivo an??nimo. Os cookies s??o enviados para o seu navegador a partir de um site e armazenados no seu dispositivo. As tecnologias de rastreamento tamb??m usadas s??o beacons, tags e scripts para coletar e rastrear informa????es e para melhorar e analisar nosso Servi??o.{'\n\n'}

Voc?? pode instruir seu navegador a recusar todos os cookies ou indicar quando um cookie est?? sendo enviado. No entanto, se voc?? n??o aceitar cookies, talvez n??o consiga usar algumas partes de nosso Servi??o.{'\n\n'}

Exemplos de cookies que usamos:{'\n\n'}

Cookies de sess??o. Usamos cookies de sess??o para operar nosso servi??o.{'\n'}
Cookies preferenciais. Usamos os cookies preferenciais para lembrar suas prefer??ncias e v??rias configura????es.{'\n'}
Cookies de seguran??a. Usamos os cookies de seguran??a para fins de seguran??a.{'\n'}

Uso de dados{'\n'}
AUDIO usa os dados coletados para v??rias finalidades:{'\n'}

Para fornecer e manter o servi??o{'\n'}
Para notific??-lo sobre altera????es em nosso servi??o{'\n'}
Para permitir que voc?? participe de recursos interativos de nosso Servi??o ao optar por faz??-lo{'\n'}
Para fornecer atendimento e suporte ao cliente{'\n'}
Para fornecer an??lises ou informa????es valiosas para que possamos melhorar o Servi??o{'\n'}
Para monitorar o uso do servi??o{'\n'}
Para detectar, prevenir e resolver problemas t??cnicos{'\n'}
Transfer??ncia de dados{'\n'}
Suas informa????es, incluindo Dados Pessoais, podem ser transferidas para - e mantidas em - computadores localizados fora do seu estado, prov??ncia, pa??s ou outra jurisdi????o governamental, onde as leis de prote????o de dados podem ser diferentes das da sua jurisdi????o.{'\n'}{'\n'}

Se voc?? estiver localizado fora do Brasil e optar por nos fornecer informa????es, observe que transferimos os dados, incluindo Dados pessoais, para o Brasil e os processamos l??.{'\n'}{'\n'}

O seu consentimento para com esta Pol??tica de Privacidade, seguido pelo envio de tal informa????o, representa o seu consentimento para essa transfer??ncia.{'\n'}{'\n'}

O AUDIO tomar?? todas as medidas razoavelmente necess??rias para garantir que seus dados sejam tratados de forma segura e de acordo com esta Pol??tica de Privacidade e nenhuma transfer??ncia de seus Dados Pessoais ocorrer?? para uma organiza????o ou pa??s, a menos que haja controles adequados em vigor, incluindo a seguran??a de seus dados e outras informa????es pessoais.{'\n'}{'\n'}

Divulga????o de dados{'\n'}
Requisitos legais{'\n'}
A AUDIO App pode divulgar seus Dados Pessoais com base na cren??a de que tal a????o ?? necess??ria para:{'\n'}{'\n'}

Para cumprir uma obriga????o legal{'\n'}
Para proteger e defender os direitos ou propriedade da AUDIO{'\n'}
Para evitar ou investigar poss??veis irregularidades relacionadas ao Servi??o{'\n'}
Para proteger a seguran??a pessoal dos usu??rios do Servi??o ou do p??blico{'\n'}
Para proteger contra responsabilidade legal{'\n'}
Seguran??a dos dados{'\n'}
A seguran??a dos seus dados ?? importante para n??s, mas lembre-se de que nenhum m??todo de transmiss??o pela Internet ou m??todo de armazenamento eletr??nico ?? 100% seguro. Embora nos esforcemos para usar meios comercialmente aceit??veis ??????para proteger seus dados pessoais, n??o podemos garantir sua seguran??a absoluta.{'\n'}{'\n'}

Provedores de servi??os{'\n'}{'\n'}
Podemos empregar empresas e indiv??duos terceirizados para facilitar o nosso Servi??o ("Prestadores de Servi??os"), para fornecer o Servi??o em nosso nome, para executar servi??os relacionados ao Servi??o ou para nos ajudar a analisar como nosso Servi??o ?? usado.{'\n'}{'\n'}

Esses terceiros t??m acesso aos seus Dados Pessoais apenas para realizar essas tarefas em nosso nome e s??o obrigados a n??o divulg??-los ou us??-los para qualquer outra finalidade.{'\n'}{'\n'}

Links para outros sites{'\n'}{'\n'}
Nosso Servi??o pode conter links para outros sites que n??o s??o operados por n??s. Se voc?? clicar em um link de terceiros, voc?? ser?? direcionado para o site de terceiros. Recomendamos vivamente que reveja a pol??tica de privacidade de todos os sites que visita.{'\n'}{'\n'}

N??o temos controle nem assumimos nenhuma responsabilidade pelo conte??do, pol??ticas de privacidade ou pr??ticas de quaisquer sites ou servi??os de terceiros.{'\n'}{'\n'}

Privacidade das crian??as{'\n'}
Nosso servi??o n??o ?? direcionado a menores de 18 anos ("Filhos").{'\n'}

N??o coletamos intencionalmente informa????es de identifica????o pessoal de menores de 18 anos. Se voc?? ?? pai / m??e ou respons??vel legal e sabe que seus Filhos nos forneceram dados pessoais, entre em contato conosco. Se ficarmos cientes de que coletamos dados pessoais de crian??as sem a verifica????o do consentimento dos pais, tomamos medidas para remover essas informa????es de nossos servidores.{'\n'}

Altera????es a esta pol??tica de privacidade{'\n'}
Podemos atualizar nossa Pol??tica de Privacidade de tempos em tempos. Vamos notific??-lo de quaisquer altera????es publicando a nova Pol??tica de Privacidade nesta p??gina.{'\n'}{'\n'}

Avisaremos voc?? por e-mail e / ou um aviso em destaque no nosso Servi??o antes que a altera????o entre em vigor e atualize a "data efetiva" na parte superior desta Pol??tica de Privacidade.{'\n'}{'\n'}

Recomenda-se que voc?? revise esta Pol??tica de Privacidade periodicamente para quaisquer altera????es. Altera????es a esta Pol??tica de Privacidade s??o efetivas quando publicadas nesta p??gina.{'\n'}{'\n'}

Entre em contato{'\n'}
Se voc?? tiver alguma d??vida sobre esta Pol??tica de Privacidade, entre em contato:{'\n'}

Por email: sac@audiosp.com.br{'\n'}

                              </Text>
                            </View>


                        </ScrollView>          
                </View>
            </View>
        </Modal>

           {
                    load === true
                    ?
                    <View style={{flex:1}}>

                    <Load visivel={true} cor={'#1b1b1b'} tamanho={'small'} /*  */ navigation={props.navigation} />
                    <FlashMessage ref={inputRefCadastroEdit} position="bottom" style={{backgroundColor:'#000000'}} />
                    </View>
                    :
                    <KeyboardAwareScrollView
                    style={[{flex:1}]}
                    behavior="padding"
                    keyboardShouldPersistTaps={'handled'}
                  >
        
                     
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
                {/*<Text style={[Estilos.LabelCampo,{}]}>Selecione seus g??neros musicais</Text>*/}
                      <MultiSelect
                        hideTags
                        items={items}
                        uniqueKey="id"
                        ref={(component) => { this.multiSelect = component }}
                        onSelectedItemsChange={onSelectedItemsChange}
                        selectedItems={selectedItems}
                        selectText="Seus g??neros musicais"
                        searchInputPlaceholderText="Buscar g??neros..."
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
               
                <TouchableOpacity style={[Estilos.ForaBotaoNotificacaoBranco2,{marginTop:Dimensions.get('window').height/40}]}
                onPress={()=>set_modal(true)} keyboardShouldPersistTaps={'handled'}>
                    <Text style={Estilos.TextoBotaoNotificao2}>LER TERMOS DE USO</Text>
                </TouchableOpacity>
                         
  
  
                  <TouchableOpacity style={[Estilos.ForaBotaoNotificacaoBranco,{marginTop:Dimensions.get('window').height/40,marginBottom:Dimensions.get('window').height/40}]}
                  onPress={()=>Submit()} keyboardShouldPersistTaps={'handled'}>
                      <Text style={Estilos.TextoBotaoNotificao}>GRAVAR DADOS</Text>
                  </TouchableOpacity>
  
          
  
  
                </View>
                    

                    </KeyboardAwareScrollView>
           }
      </SafeAreaView>

      

      
    );
};



const styles = StyleSheet.create({
  ModalFora:{
    flex:1, 
    flexDirection:'column', 
    alignItems:'center' , 
    justifyContent: 'center',
    backgroundColor:'rgba(0,0,0,0.50)',
  },
  BgModal:{
      width:'100%', 
      justifyContent: 'center',
      alignItems:'center',
      //backgroundColor:'#ffffff',
  },

  ModalDentro:{
    // paddingTop:Dimensions.get('window').height/20,
    // paddingBottom:Dimensions.get('window').height/40,

  },

  TextoAtencao:{
    color:'#161616', 
    fontSize: RFValue(20),
    lineHeight: RFValue(25),
    fontFamily: 'Roboto-Black',
    textAlign:'center',
    paddingTop:Dimensions.get('window').height/200,
    paddingLeft:10,
    paddingRight:10
  },
  TextoAtencao2:{
    color:'#161616', 
    fontSize: RFValue(25),
    lineHeight: RFValue(30),
    fontFamily: 'Roboto-Black',
    textAlign:'center',
    paddingTop:Dimensions.get('window').height/200,
    paddingLeft:10,
    paddingRight:10
  },

  foraProblema:{  
    flexDirection:'row',
    width:(Dimensions.get('window').width/100)*80,
    backgroundColor:'#e7e7e7',
    justifyContent: 'center',
    alignItems:'center',
    marginTop:Dimensions.get('window').height/200,
  },

  esquerda:{
    padding:Dimensions.get('window').height/50,
    flex:1, 
  },

  direita:{
    padding:Dimensions.get('window').height/100,
    flex:7, 
  },
  
  TextoProblem:{
    color:'#161616', 
    fontSize: RFValue(15),
    lineHeight: RFValue(18),
    fontFamily: 'Roboto-Bold',
    textAlign:'left',
  },

  
  TextoVerifique:{
    color:'#161616', 
    fontSize: RFValue(15),
    lineHeight: RFValue(18),
    fontFamily: 'Roboto-Light',
    textAlign:'center',
    padding:Dimensions.get('window').height/40,
  },

  BotaoFora:{

    backgroundColor:'#000000',
    width:Dimensions.get('window').width/100*80,

  },

  TextoBotao:{
    color:'#FFF', 
    fontSize: RFValue(15),
    lineHeight: RFValue(18),
    fontFamily: 'Roboto-Black',
    textAlign:'center',
    paddingTop:Dimensions.get('window').height/50,
    paddingBottom:Dimensions.get('window').height/50,
    paddingLeft:Dimensions.get('window').width/8,
    paddingRight:Dimensions.get('window').width/8,
  },


});

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