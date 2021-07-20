import React , { useState, useEffect } from 'react';

import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Dimensions,
} from 'react-native';
import Estilos from '../Estilos';
import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
  Edit_id_tb_status,
  Edit_c_video,
  Edit_id_tb_tipo,
  Edit_c_texto,
} from '../Actions/LoginActions';

//GLOBAIS
import Erro from './Erro';
import Load from './Load';
//GLOBAIS

//FUNCOES
import { 
    //GLOBAIS
    ListaDados,
    PostaDados,
    Testelala,
    LerTXT,
    //GLOBAIS
  
    //LOCAIS
  
    //LOCAIS
  }
  //FUNCOES
  from './Funcoes';

// IMPORTS Render ITEM
import FlatRenderItem from './FlatRenderItem';
// IMPORTS Render ITEM

Flat.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
   null
  }
}



function Flat(props) {



    //GLOBAIS
    const { navigate } = props.navigation;
    const [falha, setFalha] = useState(false);
    const [load, setLoad] = useState(false);
    //GLOBAIS

    const [pagina, setPagina] = useState(false);
    const [fim, setFim] = useState(false);
    const [data, setData] = useState([]);
    const [datastatus, setDatastatus] = useState(false);
    const [datastatus2, setDatastatus2] = useState(false);
    const [datastatusFooter, setDatastatusFooter] = useState(false);
    const [banner, setBanner] = useState([]);

   



    useEffect(() => {
        CarregaInicio();
        CarregaBanners();

      
    },[]);


    

    function CarregaBanners(){
        setDatastatus2(true);
        if(props.adicional){
            fetch(`https://audiosp.com.br/app/banner.php?random_number=${new Date().getTime()}`)
            .then((categorias)=>categorias.json())
            .then((json)=>{
                setBanner(json);
                setDatastatus2(false);
            }).catch((error) =>
            {
               // alert('erro');
            });
        }
    }

    function CarregaInicio(){

      

        setFim(false);
        setPagina(0);
        setData([]);
        setDatastatus(true);
        setPagina(1);
        fetch(global.URL + props.url + `?random_number=${new Date().getTime()}&page=1${props.parametros}&chave=${global.CHAVE}`)
        .then((p_resposta)=>p_resposta.json())
        .then((json)=>{
            setData(json)
            //console.log(json);
            setDatastatus(false);
            setDatastatus2(false);
        }).catch((error) =>
        {
            setFim(true);
            console.log(error);
            setFalha(true);
        });


        VerificaLive();
        
    }



function VerificaLive(teste){
    
    
    LerTXT(
      'https://audiosp.com.br/upload/live.txt'
    ).then(tb_live => {
      //console.log(tb_live);

      if(tb_live == 1){
        ListaDados(
          'live.php', //url
        )
  
        .then(tb_live => {
      //    alert(props.passou);
            //alert(tb_live[0].id_tb_live+'xxx');
            let p_status = tb_live[0].id_tb_status;
            let p_video = tb_live[0].c_video;
            let p_id_tb_tipo = tb_live[0].id_tb_tipo;
            let p_texto = tb_live[0].c_texto;
            if(p_status == 1){
              //props.Edit_passou('sim');
              props.Edit_id_tb_status(1);
              props.Edit_c_video(p_video);
              props.Edit_id_tb_tipo(p_id_tb_tipo);
              props.Edit_c_texto(p_texto);

              
           
                
        }

            
  
  
          }
        )
        .catch(err => {
          //alert(err.toString())
  
        });
      }

      //alert(tb_live.toString());

    }
  )
  .catch(err => {
    //alert(err.toString())

  });
/*
  setTimeout(() => {
    VerificaLive();
  }, 10000);
*/
}





    async function CarregaMais(){
        setDatastatusFooter(true);
        //alert(p_pagina);
        if(fim === false){
            //setDatastatus(true);
            let x_pagina = pagina+1;
            setPagina(x_pagina);
            fetch(global.URL + props.url + `?random_number=${new Date().getTime()}&page=${x_pagina}${props.parametros}&chave=${global.CHAVE}`)
            .then((p_resposta)=>p_resposta.json())
            .then((json)=>{

               
                setDatastatusFooter(false);
                if(json[0].status == 'fim'){
                    //alert('fim');
                    setFim(true);
                }else{
                //setData([...data,...json])
                setData(data => [...data, ...json]);
                //console.log(json);
                //setDatastatus(false);
                }
            }).catch((error) =>
            {
                 //console.log(error);
                 setFim(true);
                //console.log(error);
                setFalha(true);
            });
        }
  
    }
    function Render_Footer(){
  
    return (

        <>
    
           
                {
                    ( datastatusFooter && !fim  )
                    ?
                    <View style={{paddingBottom:15, paddingTop:15}}>    
                    <Load visivel={true} cor={props.cor_carregando_baixo} tamanho={'large'} /*  */ navigation={props.navigation} />   
                    </View>
                    :
                    null
                }
       
        </>
    )
  }

    return (
        <>
            { datastatus === true || datastatus2 === true
            ?

            
           
            <Load visivel={true} cor={props.cor_carregando} tamanho={'large'} /*  */ navigation={props.navigation} />
            :
         
         
      
            <FlatList
                //removeClippedSubviews={false}
                style={{width: '100%',flex:1, zIndex:1, backgroundColor:props.backgroundColor,
                marginTop: (props.margem) ? -Dimensions.get('window').width/6 : 0,
                 }}
                keyExtractor={item => item.id}
                data = { data }
                initialNumToRender={3}
                
                renderItem={({ item, index }) => 
                        <View style={{alignItems:'center', flex:1}} key={index}>
                            <FlatRenderItem navigation={props.navigation} item={item} parametros={props.parametros} index={index} include={props.include} adicional={banner} />
                        </View>
                }
                numColumns={props.colunas}
                onEndReached={()=>CarregaMais()}
                ListFooterComponent = { Render_Footer() }
                onEndReachedThreshold={0.1}
                refreshControl={
                    <RefreshControl  onRefresh={()=>CarregaInicio()} style={{
                    }}
                    tintColor={props.cor_carregando}                    
                    />
                  }
            />
      
            }
             {/* GLOBAIS */}
        
        {/* GLOBAIS */}
        <Erro erro_pagina={props.erro_pagina} visivel={falha} navigation={props.navigation} />
        </>
    );
};

const styles = StyleSheet.create({
    ModalFora:{
      flex:1, 
      flexDirection:'column', 
      alignItems:'center' , 
      justifyContent: 'center'
    },
    BgModal:{
        width:'70%', height:'30%', 
        justifyContent: 'center',
        alignItems:'center',
        //backgroundColor:'#ffffff',
    },
    BotaoModal:{
        
    },
    BotaoTextoModal:{
        color:'#FFFFFF'
    },
    BotaoFora:{
       width:'70%',
        height:40,
        justifyContent: 'center',
        alignItems:'center',
    },
    TextoModalAtencao:{
        color:'#000000',
    },
    TextoModal:{
        color:'#000000'
    },    
});

const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
    id_tb_status:state.auth.id_tb_status,
    c_video:state.auth.c_video,
    id_tb_tipo:state.auth.id_tb_tipo,
    c_texto:state.auth.c_texto,
    
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,
  Edit_id_tb_status,
  Edit_c_video,
  Edit_id_tb_tipo,
  Edit_c_texto,

  })(Flat);
 export default React.memo(LoginConnect);