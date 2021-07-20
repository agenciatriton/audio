import { StyleSheet, Platform, Dimensions} from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
export default {

    container: {
        flex: 1,
        ...ifIphoneX({
            paddingTop: (Platform.OS === 'ios') ? 35 : 0,
        }, {
            paddingTop: (Platform.OS === 'ios') ? 25 : 0,
        }),
        backgroundColor:'#0a0b20', //COR CORRETA
        //backgroundColor:'#FFF',
    }, 

    
    
    //CORES

    PretoBg:{
       backgroundColor:'#1b1b1b',
    },

    CinzaBgClaro:{
        backgroundColor:'#f5f5f5',
    },

    CinzaTexto3:{
        color:'#3b3b3b'
    },

    CinzaTexto4:{
        color:'#4b4b4b'
    },   
    
    CinzaTexto9:{
        color:'#4b4b4b'
    },

    //CORES

    //NOTIFICACOES

    TopicoInicio:{
        color:'#FFFFFF', 
        fontSize: RFValue(30),
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Thin',
        textAlign:'center',
    },

    TextoInicio:{
        color:'#FFFFFF', 
        fontSize: RFValue(13),
        fontFamily: 'Roboto-Light',
        textAlign:'center',
    },

    ForaBotaoNotificacao:{
        height:Dimensions.get('window').height/15,
        backgroundColor:'#FFFFFF',
        width:'90%',
        alignItems:'center', 
        justifyContent:'center',
    },

    ForaBotaoNotificacao2:{
        height:Dimensions.get('window').height/15,
        backgroundColor:'transparent',
        width:'90%',
        alignItems:'center', 
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#FFFFFF'
    },



    TextoBotaoNotificao:{
        color:'#000000', 
        fontSize: RFValue(17),
        fontFamily: 'Roboto-Black',
        textAlign:'center',
        
    },

    TextoBotaoNotificao2:{
        color:'#FFFFFF', 
        fontSize: RFValue(17),
        fontFamily: 'Roboto-Black',
        textAlign:'center',
        
    },


    TextoBotaoNotificao2:{
        color:'#FFFFFF', 
        fontSize: RFValue(17),
        fontFamily: 'Roboto-Black',
        textAlign:'center',
        
    },

    NotificacaoMargemTopo:{
        marginTop:Dimensions.get('window').height/40
    },

    TextoBotaoNotificaoPularFora:{
        height:60,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },

    TextoBotaoNotificaoPular:{
        color:'#b9b9b9', 
        fontSize: RFValue(15),
        fontFamily: 'Roboto-Light',
        textAlign:'center',
        textTransform:'uppercase',
    },


    //NOTIFICACOES



    //EVENTOS
    
    DataEvento:{
        color:'#3b3b3b', 
        fontSize: RFPercentage(1.7),
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Light',
        
       
    },
    
    
    CarregandoEvento:{
        color:'#FFFFFF', 
        fontSize: RFValue(11),
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Light',
        
       
    },
    
    TituloEventoInterno:{
        color:'#FFFFFF', 
        fontSize: RFValue(13),
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Black',
        
       
    },
    
    TituloEvento:{
        color:'#3b3b3b', 
        fontSize: RFPercentage(2),
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Black',
        
       
    },

    BotoaOpcaoEventoFora:{
        flexDirection:'row',
       
    },

    BotoaOpcaoEventoForaEsq:{
        backgroundColor:"#f1f1f1",
        flex:1,
        height:Dimensions.get('window').height/15,
        alignItems:'center',
        justifyContent:'center',
        

    },

    BotoaOpcaoEventoMeio:{
        backgroundColor:"#FFFFFF",
      
        height:Dimensions.get('window').height/15,
        width:1,
        alignItems:'center',
        justifyContent:'center',


    },

    BotoaOpcaoEventoForaDir:{
        backgroundColor:"#f1f1f1",
        flex:1,
        height:Dimensions.get('window').height/15,
        alignItems:'center',
        justifyContent:'center',


    },

    TextoBotaoShowAtivo:{
        color:'#3b3b3b',
    },

    TextoBotaoShowInativo:{
        color:'#b9b9b9',
    },


    //EVENTOS



    //HEADER
    HeaderFora:{
       // backgroundColor:'transparent', 
       
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    },

    HeaderEsquerda:{
        justifyContent:'center',
        alignItems:'flex-start',
        flex:1,
    },
    HeaderDireita:{
        justifyContent:'center',
        alignItems:'flex-end',
        flex:1,
        
    },
    HeaderMeio:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },

        
    HeaderTitulo:{
        color:'#FFFFFF', 
        fontSize: RFValue(15),
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Light',
        
       
    },
    //HEADER



    //TABBAR

    TabTitulo:{
        color:'#FFFFFF', 
        fontSize: RFPercentage(1.5),
        lineHeight: RFPercentage(1.5),
        fontFamily: 'Roboto-Regular',
        textAlign:'center',
    },


    //TABBAR



    //PROGRAMACAO
    TitProgramacaoFora:{
        width:'100%', 
        flex:1,
        //backgroundColor:'#999999',
        flexDirection:'row',
    },
    
    ProgramacaoEsq:{
        alignItems:'flex-start', 
        justifyContent:'center', 
        flex:1,
    },
    
    ProgramacaoMeio:{
        alignItems:'center', 
        justifyContent:'center', 
    },
    
    ProgramacaoDir:{
        alignItems:'flex-end', 
        justifyContent:'center', 
        flex:1,
    },
    
    
    ProgramacaoMeioTexto:{
        color:'#3b3b3b', 
        fontSize: RFValue(15),
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Thin',
        textAlign:'center',
    },
    

    ProgramacaoBarraEsq:{
        width:'70%', 
        height:1, 
        backgroundColor:"#b9b9b9", 
        marginLeft:Dimensions.get('window').width/15,
    },
    

    ProgramacaoBarraDir:{
        width:'70%', 
        height:1, 
        backgroundColor:"#b9b9b9", 
        marginRight:Dimensions.get('window').width/15,
    },


    ProgramacaoForaItem:{
        width:'100%', 
        flex:1,
        alignItems:'center',
        paddingBottom:Dimensions.get('window').height/40,
        backgroundColor:'#FFFFFF',
    },



    ProgramacaoItemFotoHome:{
        width:'90%', 
        alignItems:'center',
        backgroundColor:'transparent',
        height:(Dimensions.get('window').width/100)*37,
        marginBottom:Dimensions.get('window').width/50,

    },


    ForaProgramacaoTituloFora:{
        width:'90%', 
        marginTop:Dimensions.get('window').width/120,
        marginBottom:Dimensions.get('window').width/120,
    },





    NovaData:{
        backgroundColor:"#000000",
        padding:10,
        position:"absolute",
        bottom:10,
        right:0

        

    },



    NovaDataTexto:{
       textTransform:"uppercase",
        color:'#FFFFFF', 
        fontSize: RFValue(14),
        lineHeight: RFValue(16),
        fontFamily: 'Roboto-Black',
        textAlign:'center',
        
 

    },

    NovaDataTextoDentro:{
       textTransform:"uppercase",
        color:'#FFFFFF', 
        fontSize: RFValue(16),
        lineHeight: RFValue(18),
        fontFamily: 'Roboto-Black',
        textAlign:'center',
        
 

    },


    ForaProgramacaoTitulo:{
       textTransform:"uppercase",
        color:'#000000', 
        fontSize: RFValue(25),
        lineHeight: RFValue(30),
        fontFamily: 'Roboto-Black',
        textAlign:'left',
        padding:0,

    },

    DataHomeFora:{
        flex:1,
        flexDirection:'row',
        width:'90%',
       
    },

    TextoCompartilhar:{
        textTransform:'uppercase',
        color:'#3b3b3b', 
        fontSize: RFPercentage(2),
        lineHeight: RFPercentage(2),
        fontFamily: 'Roboto-Light',
        textAlign:'center',
        marginRight:5,
    },


    DiaFora:{
        alignItems:'flex-start',
        justifyContent:'flex-start',
  
    },

    MesFora:{
        alignItems:'flex-start',
        justifyContent:'flex-start',
 
    },

    SemanaFora:{
        alignItems:'flex-start',

        justifyContent:'flex-start',

    },

    DiaTexto:{
        textTransform:'uppercase',
        color:'#3b3b3b', 
        fontSize: RFPercentage(3),
        lineHeight: RFPercentage(3.5),
        fontFamily: 'Roboto-Black',
        textAlign:'center',
        marginRight:5,
    },

    MesTexto:{
        textTransform:'uppercase',
        color:'#3b3b3b', 
        fontSize: RFPercentage(3),
        lineHeight: RFPercentage(3.5),
        fontFamily: 'Roboto-Black',
        textAlign:'center',
        marginRight:5,
    },

    SemanaTexto:{
        textTransform:'uppercase',
        color:'#3b3b3b', 
        fontSize: RFPercentage(3),
        lineHeight: RFPercentage(3.5),
        fontFamily: 'Roboto-Light',
        textAlign:'center',
        marginRight:5,
    },

    DiaTexto1:{
        textTransform:'uppercase',
        color:'#3b3b3b', 
        fontSize: RFPercentage(2.7),
        lineHeight: RFPercentage(3.2),
        fontFamily: 'Roboto-Black',
        textAlign:'center',
        marginRight:5,
    },

    MesTexto1:{
        textTransform:'uppercase',
        color:'#3b3b3b', 
        fontSize: RFPercentage(2.7),
        lineHeight: RFPercentage(3.2),
        fontFamily: 'Roboto-Black',
        textAlign:'center',
        marginRight:5,
    },

    SemanaTexto1:{
        textTransform:'uppercase',
        color:'#3b3b3b', 
        fontSize: RFPercentage(2.7),
        lineHeight: RFPercentage(3.2),
        fontFamily: 'Roboto-Light',
        textAlign:'center',
        marginRight:5,
    },

    ForaCompartilhar:{
        flex:1,
        width:'90%',
        flexDirection:'row',
        marginTop:Dimensions.get('window').width/80
    },

    //PROGRAMACAO


    //ITENS BANNER

    DiaItensBanner:{
        color:'#FFFFFF', 
        fontSize: RFPercentage(5),
        lineHeight: RFPercentage(5),
        fontFamily: 'Roboto-Black',
        textAlign:'center',
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },

    MesItensBanner:{
        paddingTop:5,
        textTransform:"uppercase",
        color:'#FFFFFF', 
        fontSize: RFPercentage(3),
        lineHeight: RFPercentage(3),
        fontFamily: 'Roboto-Regular',
        textAlign:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },

    DiasemanaItensBanner:{
    
        textTransform:"uppercase",
        color:'#FFFFFF', 
        fontSize: RFPercentage(3),
        lineHeight: RFPercentage(3.5),
        fontFamily: 'Roboto-Thin',
        textAlign:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 2.22,

        elevation: 3,
    },

    TituloBanner:{
        textTransform:'uppercase',
        color:'#FFFFFF', 
        fontSize: RFPercentage(4),
        lineHeight: RFPercentage(4),
        fontFamily: 'Roboto-Black',
        textAlign:'left',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
 
    },


    TituloBanner2:{
        textTransform:'uppercase',
        color:'#FFFFFF', 
        fontSize: RFPercentage(3),
        lineHeight: RFPercentage(3.5),
        fontFamily: 'Roboto-Black',
        textAlign:'left',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
 
    },

    TituloBanner2x:{
        textTransform:'uppercase',
        color:'#FFFFFF', 
        fontSize: RFPercentage(2),
        lineHeight: RFPercentage(2.5),
        fontFamily: 'Roboto-Black',
        textAlign:'left',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
 
    },
    //ITENS BANNER

    


    //RODAPE

    itemRedeRodape:{
        flex:1, 
        alignItems:'center', 
        justifyContent:'center',
    },

    BarraBranca:{
        flexDirection:"row", 
        height:0.5, 
        backgroundColor:'#FFFFFF', 
        alignItems:'center', 
        justifyContent:'center', 
        width:"80%", 
        marginBottom:Dimensions.get('window').width/17,  
        marginTop:Dimensions.get('window').width/17,

    },


    

    TextoEnderecoFora:{
        flexDirection:"row", 
        alignItems:'center', 
        justifyContent:'center', 
        width:"90%", 
        marginBottom:Dimensions.get('window').width/7,  
        marginTop:Dimensions.get('window').width/20
    
    },
    

    TextoBilheteriaFora:{
        flexDirection:"row", 
        alignItems:'center', 
        justifyContent:'center', 
        width:"90%", 
        marginBottom:Dimensions.get('window').width/20,  
        marginTop:Dimensions.get('window').width/20
    
    },

    TextoBilheteria:{
        textTransform:'uppercase',
        color:'#FFFFFF', 
        fontSize: RFPercentage(2.2),
        lineHeight: RFPercentage(2.5),
        fontFamily: 'RobotoCondensed-Regular',
        textAlign:'center',
    },

    TextoBilheteriaBoldX:{
        textTransform:'uppercase',
        color:'#FFFFFF', 
        fontSize: RFPercentage(2.7),
        lineHeight: RFPercentage(3.5),
        fontFamily: 'Roboto-Regular',
        textAlign:'left',
    },

    TextoBilheteriaBold:{
        textTransform:'uppercase',
        color:'#FFFFFF', 
        fontSize: RFPercentage(2.2),
        lineHeight: RFPercentage(2.7),
        fontFamily: 'RobotoCondensed-Bold',
        textAlign:'center',
    },

    TextoCNPJ:{
        textTransform:'uppercase',
        color:'#FFFFFF', 
        fontSize: RFPercentage(1.5),
        lineHeight: RFPercentage(1.5),
        fontFamily: 'RobotoCondensed-Bold',
        textAlign:'center',
    },


    //RODAPE

    //PROGRAMACAO INTERNA

    ForaTituloInterna:{
        paddingTop:Dimensions.get('window').height/40, 
        paddingLeft:Dimensions.get('window').height/40, 
        paddingRight:Dimensions.get('window').height/40, 
        paddingBottom:Dimensions.get('window').height/40, 
        backgroundColor:'#f9f9f9',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        flex:1,
    },

    TituloInterna:{
        textTransform:'uppercase',
        color:'#3b3b3b', 
        fontSize: RFPercentage(3),
        lineHeight: RFPercentage(3.5),
        fontFamily: 'Roboto-Black',
        textAlign:'left',
    },


    BotaoCamarote:{
        width:'90%',
        height:Dimensions.get('window').width/6,
        backgroundColor:"transparent",
        borderRadius:4,
        flexDirection:'row',
        borderWidth: 1,
        borderColor: '#3b3b3b',
        
    },

    BotaoEsq:{
      flex:1,
      justifyContent:'center', 
      alignItems:"flex-end",
      marginRight:Dimensions.get('window').width/20,
    },

    BotaoDir:{
        flex:2,
        justifyContent:'center', 
        alignItems:"flex-start",

        marginLeft:Dimensions.get('window').width/20,
    },


    TextoCamarote:{
        color:'#3b3b3b', 
        fontSize: RFPercentage(3),
        lineHeight: RFPercentage(4.5),
        fontFamily: 'Roboto-Black',
        textAlign:'center',
    },


    DadosEventoFora:{
        flex:1,
        justifyContent:'center', 
        alignItems:"center",
        marginTop:Dimensions.get('window').width/20,
        width:'90%',

    },

    TextoEvento:{
        textTransform:'uppercase',
        color:'#3b3b3b', 
        fontSize: RFPercentage(2.3),
        lineHeight: RFPercentage(2.8),
        fontFamily: 'Roboto-Light',
        textAlign:'left',
        marginBottom:10

    },

    TextoEvento1:{
        color:'#3b3b3b', 
        fontSize: RFPercentage(2.3),
        lineHeight: RFPercentage(2.8),
        fontFamily: 'Roboto-Light',
        textAlign:'left',
        marginBottom:10
        

    },

    TextoEvento1X:{
        color:'#3b3b3b', 
        fontSize: RFPercentage(4.3),
        lineHeight: RFPercentage(4.8),
        fontFamily: 'Roboto-Light',
        textAlign:'left',
     

    },

    TextoNegritoEvento:{
        textTransform:'uppercase',
        color:'#3b3b3b', 
        fontSize: RFPercentage(2.3),
        lineHeight: RFPercentage(2.8),
        fontFamily: 'Roboto-Black',
        textAlign:'left',
    },



    //PROGRAMACAO INTERNA
    

    ConteinerSua:{
        paddingTop:Dimensions.get('window').height/30,
        paddingBottom:Dimensions.get('window').height/40,
    },

    ConteinerSua:{
        paddingTop:Dimensions.get('window').height/30,
        paddingBottom:Dimensions.get('window').height/40,
    },


    BrancoSuaCompra:{
        color:'#FFFFFF', 
        fontSize: RFValue(19),
        textTransform: 'uppercase',
        fontFamily: 'Montserrat-Bold',
        textAlign:'center',
    },



    Titlicenca:{
        fontFamily: 'Hind-SemiBold',
        color:'#0072bc', 
        fontSize: RFPercentage(2.5),
    },


    //CADASTRO

    campoForm:{
        width:'100%',
        paddingTop: 3,
        paddingBottom: 5,
        //paddingRight: 15,
        //paddingLeft: 15,
        fontSize:RFValue(19),
       // borderWidth: 0.5,
        //borderRadius: 10,
        borderBottomWidth: 1.5,
        borderBottomColor: '#eeeeee',
        fontFamily: 'Roboto-Light',
   
        color:'#555555',
       
      },

      CampoFormFora:{
        width:'90%',
        marginBottom: 10,
    },


    LabelCampo:{
        fontSize: RFValue(15),
        fontFamily: 'Roboto-Light',
        color:'#000000',
      },

      
      LabelCampoValida:{
        fontSize: RFValue(13),
        fontFamily: 'Roboto-Light',
        color:'#999999',
      },

      LabelCampoValida2:{
        fontSize: RFValue(13),
        fontFamily: 'Roboto-Light',
        color:'#000000',
      },

      


      ForaBotaoNotificacaoBranco:{
        height:Dimensions.get('window').height/15,
        backgroundColor:'#FFFFFF',
        borderColor:'#000000',
        borderWidth:1,
        width:'90%',
        alignItems:'center', 
        justifyContent:'center',
    },
ForaBotaoNotificacaoBranco2:{
        height:Dimensions.get('window').height/15,
        backgroundColor:'#000000',
        // borderColor:'#',
        borderWidth:1,
        width:'90%',
        alignItems:'center', 
        justifyContent:'center',
    },

    TextoJaPossuo:{
        color:'#000000', 
        fontSize: RFValue(15),
        fontFamily: 'Roboto-Light',
        textAlign:'center',
        textTransform:'uppercase'
    },
      

    QuadroCadastroFora:{
        height:Dimensions.get('window').height/15,
        width:'90%',
        borderWidth:1,
        borderColor:'#FFFFFF',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },

    QuadroCadastroEsq:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        height:'100%'
    },

    QuadroCadastroEsqTexto:{
        fontSize: RFValue(11),
        fontFamily: 'Roboto-Light',
        color:'#FFFFFF',
    },

    QuadroCadastroDir:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        height:'100%'
    },

    //CADASTRO


    //LIVE
    Agora:{
        fontSize: RFPercentage(1.8),
        lineHeight: RFPercentage(1.8),
        fontFamily: 'Roboto-Black',
        textTransform:'uppercase',
    },

    AgoraTexto:{
        fontSize: RFPercentage(1.8),
        lineHeight: RFPercentage(2.3),
        fontFamily: 'Roboto-Light',
        textTransform:'uppercase',
    },

    TituloLive:{
        fontSize: RFPercentage(2.5),
        lineHeight: RFPercentage(2.5),
        fontFamily: 'Roboto-Black',
        textTransform:'uppercase',
      
    },

    CampoFora:{
        flex:1,
        width:'100%',
        marginTop:Dimensions.get('window').width/20,
        //height:50
    },
    CampoForaDentro:{
        marginLeft:Dimensions.get('window').width/20,
        marginRight:Dimensions.get('window').width/20,
        backgroundColor:"#FFFFFF",
   
    },
    MargemTitulo:{
        marginLeft:Dimensions.get('window').width/20,
        marginRight:Dimensions.get('window').width/20,
        paddingBottom:Dimensions.get('window').width/40,
        paddingTop:Dimensions.get('window').width/40,
     
    },

    tituloMensagem:{
        fontSize: RFPercentage(2),
        lineHeight: RFPercentage(2),
        fontFamily: 'Roboto-Regular',
        textTransform:'uppercase',
        color:"#3b3b3b",

    },
    tituloMensagem2:{
        fontSize: RFPercentage(2.5),
        lineHeight: RFPercentage(3),
        fontFamily: 'Roboto-Regular',
        //textTransform:'uppercase',
        color:"#3b3b3b",
 

    },
    //LIVE


    //PROMOCAO INATIVA
    TextoNaoPossivel:{
        
        fontSize: RFPercentage(5),
        lineHeight: RFPercentage(6),
        fontFamily: 'Roboto-Black',
        color:'#000000',
        textTransform:'uppercase',
        textAlign:"center",

    },

    
    TextoNaoPossivelInt:{
        fontSize: RFPercentage(2.8),
        lineHeight: RFPercentage(3.2),
        fontFamily: 'Roboto-Light',
        color:'#000000',
        textTransform:'uppercase',
        textAlign:"center",
        paddingLeft:Dimensions.get('window').width/20,
        paddingRight:Dimensions.get('window').width/20,
        paddingTop:Dimensions.get('window').width/15,

    },
    TextoNaoPossivelPassos:{
        fontSize: RFPercentage(2.5),
        lineHeight: RFPercentage(3),
        fontFamily: 'Roboto-Black',
        color:'#000000',
        textTransform:'uppercase',
        textAlign:"center",
        paddingLeft:Dimensions.get('window').width/20,
        paddingRight:Dimensions.get('window').width/20,
        paddingTop:Dimensions.get('window').width/15,

    },
    TextoNaoPossivelPassosBold:{
        fontSize: RFPercentage(2.5),
        lineHeight: RFPercentage(3),
        fontFamily: 'Roboto-Light',
        color:'#000000',
        textTransform:'uppercase',
        textAlign:"center",
        paddingLeft:Dimensions.get('window').width/20,
        paddingRight:Dimensions.get('window').width/20,
        paddingTop:Dimensions.get('window').width/60,

    },

    //PROMOCAO INATIVA


    //PROMOCOES 
    TituloForaPromo:{
        fontSize: RFPercentage(3),
        lineHeight: RFPercentage(3.5),
        fontFamily: 'Roboto-Black',
        color:'#FFFFFF',
        textTransform:'uppercase',
        
    },

    TituloParticipar:{
        fontSize: RFPercentage(2.2),
        lineHeight: RFPercentage(2.7),
        fontFamily: 'Roboto-Black',
        color:'#111111',
        textTransform:'uppercase',
        
    },
    TituloParticiparCompartilhar:{
        fontSize: RFPercentage(3),
        lineHeight: RFPercentage(3),
        fontFamily: 'Roboto-Regular',
        color:'#FFFFFF',
        textTransform:'uppercase',
        
    },

    ForaCompartilharProg:{
        alignItems:"center", 
        justifyContent:'center', 
        borderColor:'#b9b9b9', 
        backgroundColor:'#b9b9b9', 
        borderWidth:1, 
        flex:1,
        marginLeft:Dimensions.get('window').width/25,
        marginRight:Dimensions.get('window').width/25,
        flexDirection:'row',
        
    },

    ForaProgInterna:{
        width:'100%',
        height: 300,
    },

    TextoDescricaoPromo:{
        fontSize: RFPercentage(2.5),
        lineHeight: RFPercentage(3),
        fontFamily: 'Roboto-Light',
        color:'#FFFFFF',
    },

    ForaTextoDescricaoPromo:{
        paddingLeft:Dimensions.get('window').width/25,
        paddingRight:Dimensions.get('window').width/25,
        paddingTop:Dimensions.get('window').width/25,
        flex:1,
    },

    ForaAceito:{
        paddingLeft:Dimensions.get('window').width/15,
        paddingRight:Dimensions.get('window').width/15,
        
    },


    ForaCheck:{
        padding:Dimensions.get('window').width/25,
        flexDirection:'row',
    },

    DentroCheck:{
        borderWidth:1,
        borderColor:'#FFFFFF',
        width:20,
        height:20,

    },

    CheckTextoFora:{
        paddingLeft:Dimensions.get('window').width/25,

    },

    CheckTexto:{
        color:'#777777',
        fontSize: RFPercentage(2),
        lineHeight: RFPercentage(2.5),
        fontFamily: 'Roboto-Bold',
    },


    CheckTextoBold:{
        color:'#FFFFFF',
        fontSize: RFPercentage(2),
        lineHeight: RFPercentage(2.5),
        fontFamily: 'Roboto-Bold',
        textTransform:'uppercase',
        textDecorationLine:'underline',
        paddingTop:10,
        paddingBottom:10,
        
    },


    TextoPromoTitulo:{
        color:'#FFFFFF',
        fontSize: RFPercentage(3),
        lineHeight: RFPercentage(3.5),
        fontFamily: 'Roboto-Regular',
        color:"#FFFFFF",
        textAlign:"center",
        
    },

    ForaCheck1:{
        paddingLeft:Dimensions.get('window').width/25,
        paddingRight:Dimensions.get('window').width/25,
        paddingBottom   :Dimensions.get('window').width/25,
        alignItems:'center',
        justifyContent:'center',
        textAlign:"center",
    },


    ForaInputPromo:{
        borderWidth:1,
        borderColor:'#FFFFFF',
        paddingLeft:Dimensions.get('window').width/25,
        paddingRight:Dimensions.get('window').width/25,
        justifyContent:'center',
        alignItems:'center',
    },

    campoFormPromo:{
        width:'100%',
        paddingTop: 17,
        paddingBottom: 20,
        //paddingRight: 15,
        //paddingLeft: 15,
        fontSize:RFValue(19),
       // borderWidth: 0.5,
        //borderRadius: 10,
        borderBottomWidth: 1.5,
        //borderBottomColor: '#eeeeee',
        fontFamily: 'Roboto-Light',
   
        color:'#FFFFFF',
       
      },



    TextoModalFecha:{
        fontSize: RFPercentage(3),
        lineHeight: RFPercentage(3.5),
        fontFamily: 'Roboto-Black',
        color:'#000',
        textTransform:'uppercase',
        textAlign:'right',
    },

    TextoModal:{
        fontSize: RFPercentage(2),
        lineHeight: RFPercentage(2),
        fontFamily: 'Roboto-Regular',
        color:'#000',
        paddingTop:10,

    },


    TextoTituloPromo:{
        color:'#FFFFFF', 
        fontSize: RFValue(20),
        fontFamily: 'Roboto-Regular',
        textAlign:'center',
    },

    TextoTituloPromoLight:{
        color:'#FFFFFF', 
        fontSize: RFValue(17),
        fontFamily: 'Roboto-Light',
        textAlign:'center',
    },

    //PROMOCOES 
    

  }
  