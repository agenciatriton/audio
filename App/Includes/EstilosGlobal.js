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


    TextoCarregando:{
        color:'#FFFFFF', 
        fontSize: RFPercentage(1.7),
        fontFamily: 'Roboto-Light',
        textAlign:'center',
        paddingTop:Dimensions.get('window').width/40,
    },


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

    //TEXTO

    

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


  }
  