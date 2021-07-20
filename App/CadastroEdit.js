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
  name: 'Música Popular Brasileira',
}, {
  id: '11',
  name: 'Eletronico',
}, {
  id: '12',
  name: 'Axé',
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



  // if(c_telefone == null || c_telefone == ''){
  //   setv_telefone(true);
  //   setm_telefone('Campo telefone é obrigatório!');
  //   valida = true;
  // }else{
  //   if(c_telefone.length<11){
  //       setv_telefone(true);
  //       setm_telefone('Campo telefone está incompleto!');
  //       valida = true;
  //   }else{
  //       setv_telefone(false);
  //       setm_telefone('');
  //   }

  // }


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
                         
                            <Text style={[styles.TextoAtencao]}>POLÍTICA DE PRIVACIDADE</Text>

                            <View style={[styles.foraProblema]}>
                          
                            </View>
                            <View style={{marginBottom:50}}>
                              <Text style={[styles.TextoVerifique,{textAlign:"left"}]}>
                              AUDIO PROMOÇÕES E EVENTOS LTDA ("nós", "nós" ou "nosso") opera o site / aplicativo móvel AUDIO (o "Serviço").{'\n\n'}

Esta página informa sobre nossas políticas relativas à coleta, uso e divulgação de dados pessoais quando você usa nosso Serviço e as opções associadas a esses dados.{'\n\n'}

Usamos seus dados para fornecer e melhorar o serviço. Ao usar o Serviço, você concorda com a coleta e uso de informações de acordo com esta política. A menos que definido de outra forma nesta Política de Privacidade, os termos usados ​​nesta Política de Privacidade têm os mesmos significados que em nossos Termos e Condições.{'\n\n'}

Coleta e uso de informações{'\n\n'}
Coletamos vários tipos diferentes de informações para várias finalidades para fornecer e melhorar nosso Serviço para você.{'\n\n'}

Tipos de dados coletados{'\n\n'}
Dados Pessoais{'\n\n'}
Durante o uso do nosso Serviço, podemos solicitar que você nos forneça algumas informações pessoais identificáveis ​​que podem ser usadas para contatá-lo ou identificá-lo ("Dados Pessoais"). Informações pessoalmente identificáveis ​​podem incluir, mas não estão limitadas a:{'\n\n'}

Endereço de e-mail{'\n'}
Nome e sobrenome{'\n'}
Número de telefone{'\n'}
Gênero{'\n'}
Data de nascimento{'\n'}
Apelido{'\n'}
CPF{'\n'}
Cookies e dados de uso{'\n'}
Dados de uso{'\n'}
Quando você acessa o Serviço por ou por meio de um dispositivo móvel, podemos coletar determinadas informações automaticamente, incluindo, entre outros, o tipo de dispositivo móvel que você usa, o ID exclusivo do dispositivo móvel e o endereço IP do dispositivo móvel. , o seu sistema operacional móvel, o tipo de navegador de Internet móvel que você usa, identificadores exclusivos de dispositivos e outros dados de diagnóstico ("Dados de Uso").{'\n'}{'\n'}

Dados de acompanhamento e cookies{'\n\n'}
Usamos cookies e tecnologias de rastreamento semelhantes para rastrear a atividade em nosso Serviço e manter certas informações.{'\n\n'}

Cookies são arquivos com pequena quantidade de dados que podem incluir um identificador exclusivo anônimo. Os cookies são enviados para o seu navegador a partir de um site e armazenados no seu dispositivo. As tecnologias de rastreamento também usadas são beacons, tags e scripts para coletar e rastrear informações e para melhorar e analisar nosso Serviço.{'\n\n'}

Você pode instruir seu navegador a recusar todos os cookies ou indicar quando um cookie está sendo enviado. No entanto, se você não aceitar cookies, talvez não consiga usar algumas partes de nosso Serviço.{'\n\n'}

Exemplos de cookies que usamos:{'\n\n'}

Cookies de sessão. Usamos cookies de sessão para operar nosso serviço.{'\n'}
Cookies preferenciais. Usamos os cookies preferenciais para lembrar suas preferências e várias configurações.{'\n'}
Cookies de segurança. Usamos os cookies de segurança para fins de segurança.{'\n'}

Uso de dados{'\n'}
AUDIO usa os dados coletados para várias finalidades:{'\n'}

Para fornecer e manter o serviço{'\n'}
Para notificá-lo sobre alterações em nosso serviço{'\n'}
Para permitir que você participe de recursos interativos de nosso Serviço ao optar por fazê-lo{'\n'}
Para fornecer atendimento e suporte ao cliente{'\n'}
Para fornecer análises ou informações valiosas para que possamos melhorar o Serviço{'\n'}
Para monitorar o uso do serviço{'\n'}
Para detectar, prevenir e resolver problemas técnicos{'\n'}
Transferência de dados{'\n'}
Suas informações, incluindo Dados Pessoais, podem ser transferidas para - e mantidas em - computadores localizados fora do seu estado, província, país ou outra jurisdição governamental, onde as leis de proteção de dados podem ser diferentes das da sua jurisdição.{'\n'}{'\n'}

Se você estiver localizado fora do Brasil e optar por nos fornecer informações, observe que transferimos os dados, incluindo Dados pessoais, para o Brasil e os processamos lá.{'\n'}{'\n'}

O seu consentimento para com esta Política de Privacidade, seguido pelo envio de tal informação, representa o seu consentimento para essa transferência.{'\n'}{'\n'}

O AUDIO tomará todas as medidas razoavelmente necessárias para garantir que seus dados sejam tratados de forma segura e de acordo com esta Política de Privacidade e nenhuma transferência de seus Dados Pessoais ocorrerá para uma organização ou país, a menos que haja controles adequados em vigor, incluindo a segurança de seus dados e outras informações pessoais.{'\n'}{'\n'}

Divulgação de dados{'\n'}
Requisitos legais{'\n'}
A AUDIO App pode divulgar seus Dados Pessoais com base na crença de que tal ação é necessária para:{'\n'}{'\n'}

Para cumprir uma obrigação legal{'\n'}
Para proteger e defender os direitos ou propriedade da AUDIO{'\n'}
Para evitar ou investigar possíveis irregularidades relacionadas ao Serviço{'\n'}
Para proteger a segurança pessoal dos usuários do Serviço ou do público{'\n'}
Para proteger contra responsabilidade legal{'\n'}
Segurança dos dados{'\n'}
A segurança dos seus dados é importante para nós, mas lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis ​​para proteger seus dados pessoais, não podemos garantir sua segurança absoluta.{'\n'}{'\n'}

Provedores de serviços{'\n'}{'\n'}
Podemos empregar empresas e indivíduos terceirizados para facilitar o nosso Serviço ("Prestadores de Serviços"), para fornecer o Serviço em nosso nome, para executar serviços relacionados ao Serviço ou para nos ajudar a analisar como nosso Serviço é usado.{'\n'}{'\n'}

Esses terceiros têm acesso aos seus Dados Pessoais apenas para realizar essas tarefas em nosso nome e são obrigados a não divulgá-los ou usá-los para qualquer outra finalidade.{'\n'}{'\n'}

Links para outros sites{'\n'}{'\n'}
Nosso Serviço pode conter links para outros sites que não são operados por nós. Se você clicar em um link de terceiros, você será direcionado para o site de terceiros. Recomendamos vivamente que reveja a política de privacidade de todos os sites que visita.{'\n'}{'\n'}

Não temos controle nem assumimos nenhuma responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.{'\n'}{'\n'}

Privacidade das crianças{'\n'}
Nosso serviço não é direcionado a menores de 18 anos ("Filhos").{'\n'}

Não coletamos intencionalmente informações de identificação pessoal de menores de 18 anos. Se você é pai / mãe ou responsável legal e sabe que seus Filhos nos forneceram dados pessoais, entre em contato conosco. Se ficarmos cientes de que coletamos dados pessoais de crianças sem a verificação do consentimento dos pais, tomamos medidas para remover essas informações de nossos servidores.{'\n'}

Alterações a esta política de privacidade{'\n'}
Podemos atualizar nossa Política de Privacidade de tempos em tempos. Vamos notificá-lo de quaisquer alterações publicando a nova Política de Privacidade nesta página.{'\n'}{'\n'}

Avisaremos você por e-mail e / ou um aviso em destaque no nosso Serviço antes que a alteração entre em vigor e atualize a "data efetiva" na parte superior desta Política de Privacidade.{'\n'}{'\n'}

Recomenda-se que você revise esta Política de Privacidade periodicamente para quaisquer alterações. Alterações a esta Política de Privacidade são efetivas quando publicadas nesta página.{'\n'}{'\n'}

Entre em contato{'\n'}
Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato:{'\n'}

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