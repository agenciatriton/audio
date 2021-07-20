import {
  ScrollView,
  Text,
  View,
  AsyncStorage,
  Image,
  Linking,
  TouchableWithoutFeedback,
  Platform,
  Share,
} from 'react-native';

import BackgroundTimer from 'react-native-background-timer';
import OneSignal from 'react-native-onesignal';





/* PUSH NOTIFICATION ////////////////////////////////////////////////////////////////////////// */

export const Push = function(){
  return new Promise(function(resolve, reject){
      registerForPushNotifications().then((json)=>{
                resolve(json);
            }).catch((error) =>
            {
                reject(error);
      });
   });
};
/* PUSH NOTIFICATION ////////////////////////////////////////////////////////////////////////// */






/* LISTAR DADOS ////////////////////////////////////////////////////////////////////////// */
export const ListaDados = function(url){
    return new Promise(function(resolve, reject){
          fetch(global.URL + url+`?random_number=${new Date().getTime()}&chave=${global.CHAVE}`)
            .then((p_resposta)=>p_resposta.json())
            .then((json)=>{
                resolve(json);
            }).catch((error) =>
            {
                reject(error);
            });
     });
};
/* COMO USAR

const [load, setLoad] = useState(false);

setLoad(true);
ListaDados(
  'categorias_teste.php', //url
)
.then(tb_categoria => {
  setCategoria(tb_categoria);
    setLoad(false);
  }
)
.catch(err => {
  //alert(err.toString())
  setLoad(false);
  setFalha(true);
});

{
    tb_categoria.map((tb_categoria)=>{
    return <View key = {tb_categoria.id_tb_categoria}><Text>
    { tb_categoria.c_titulo }
    </Text></View>
      })
}

*/
/* LISTAR DADOS ////////////////////////////////////////////////////////////////////////// */



/* POSTA DADOS /////////////////////////////////////////////////////////////////////////// */
export const PostaDados = function(url, data){
  return new Promise(function(resolve, reject){
      fetch(global.URL + url, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
          body: data
      }).then((response) => response.json())
      .then((responseJson) => {
        resolve(responseJson);
      }).catch((error) => {
        reject(error);
      });
    
  });
}


/* COMO USAR
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
})
.catch(err => {
  setLoad(false);
  setFalha(true);
});
*/
/* POSTA DADOS /////////////////////////////////////////////////////////////////////////// */



/* LISTAR DADOS COM PAGINACAO //////////////////////////////////////////////////////////// */
export const ListaDadosPaginacao = function(url){
};
/* LISTAR DADOS COM PAGINACAO //////////////////////////////////////////////////////////// */







export const Compartilhar = function(titulo, mensagem){
  return new Promise(function(resolve, reject){

     
        Share.share({
          title: titulo,
          message: mensagem,
        
        }, {
          // Android only:
          dialogTitle: 'COMPARTILHE AUDIO SP',
          // iOS only:
          excludedActivityTypes: [
            'com.apple.UIKit.activity.PostToTwitter'
          ]
        })
     
   });
};

/* COMO USAR
 ()=>  Compartilhar(
              'titulo',
              'mensagem_ios',
              'mensagem_android',
              'link',
            )
            .then(tb_categoria => {
              //setCategoria(tb_categoria);
              }
            )
*/




/* LER TXT ////////////////////////////////////////////////////////////////////////// */
export const LerTXT = function(caminho){
  return new Promise(function(resolve, reject){
        fetch(caminho)
          .then((p_resposta)=>p_resposta.text())
          .then((json)=>{
              resolve(json);
          }).catch((error) =>
          {
              reject(error);
          });
   });
};
/* COMO USAR

const [load, setLoad] = useState(false);

setLoad(true);
ListaDados(
'categorias_teste.php', //url
)
.then(tb_categoria => {
setCategoria(tb_categoria);
  setLoad(false);
}
)
.catch(err => {
//alert(err.toString())
setLoad(false);
setFalha(true);
});

{
  tb_categoria.map((tb_categoria)=>{
  return <View key = {tb_categoria.id_tb_categoria}><Text>
  { tb_categoria.c_titulo }
  </Text></View>
    })
}

*/
/* LER TXT ////////////////////////////////////////////////////////////////////////// */










export const Navega = function(pagina, navigationx){
  navigationx.navigate(pagina);
//alert(pagina);
};

/* COMO USAR
 ()=>  Compartilhar(
              'Tiutlo',
              'Mensgem',
              'https://audiosp.com.br',
              Share.Social.INSTAGRAM
            )
            .then(tb_categoria => {
              //setCategoria(tb_categoria);
              }
            )
*/



export const AbreURL = function(pagina){
  Linking.openURL(pagina)
//alert(pagina);
};
/* COMO USAR
 ()=>AbreURL('url')
*/


export const verifyLogin = function(valor){
  alert(valor);
};

export const Retorna = function(valor, valor2){
  return new Promise(function(resolve, reject){
      //alert('foi 2');
     setTimeout(function(){
       resolve([valor, valor2]);
     }, 100);
   });
};


export function Timer(segundos){
    return new Promise(function(resolve, reject){
        
      
    if(Platform.OS === 'ios'){
      BackgroundTimer.start();
      setInterval(() => {
        //('tic');
      }, segundos);
      // Do whatever you want incuding setTimeout;
      BackgroundTimer.stop();
    }


    }); 
}




export function Testelala(load){
    return new Promise(function(resolve, reject){
          alert('111');
    }); 
}


