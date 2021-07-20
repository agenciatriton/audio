import { StyleSheet, Platform, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export default {
      
    overlay: {
    //  ...StyleSheet.absoluteFillObject,
      backgroundColor: '#FFFFFF',
    // backgroundColor:'#000',
      marginTop: (Platform.OS === 'ios') ? 35 : 0,
      flex:1
    },
    item: {
    //  ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    // backgroundColor:'#000',
      flexDirection: 'row', 
      padding:5,
    },
    
    
    ForaMenuTopo:{
      flexDirection:"row",
      paddingTop:Dimensions.get('window').height/30,
      paddingBottom:Dimensions.get('window').height/30,
      width:"95%",
    },


    MenuTopoEsq:{
      flex:1,
      alignItems:'flex-start',
      justifyContent:'flex-start',
      
    },

    MenuTopoDir:{
      alignItems:'center',
      justifyContent:'flex-start',
      flexDirection:"row",
    },

    MenuTopoDir1:{
      alignItems:'flex-start',
      justifyContent:'flex-start',
      marginRight:Dimensions.get('window').height/200,
      marginTop:Dimensions.get('window').height/250,
    },

    MenuTopoDir2:{
      alignItems:'center',
      justifyContent:'center',
      //backgroundColor:'#FFFFFF',
      

    },

    MenuTopoDirTexto:{
      textTransform:"uppercase",
      color:'#FFFFFF', 
      fontSize: RFValue(16),
      lineHeight: RFValue(20),
      fontFamily: 'Roboto-Black',
      textAlign:'right',
      paddingBottom:Dimensions.get('window').height/300
      
    },
    
    MenuItemsFora:{
      
      width:"90%",
    },
    
    MenuItemsItem:{
      borderBottomWidth:0.3, 
      borderBottomColor:'#3b3b3b', 
      //borderTopWidth:0.3, 
      //borderTopColor:'#3b3b3b', 
      paddingTop:Dimensions.get('window').height/60, 
      paddingBottom:Dimensions.get('window').height/60,
    },

    MenuItemsItemTexto:{
      textTransform:"uppercase",
      color:'#FFFFFF', 
      fontSize: RFValue(20),
      lineHeight: RFValue(31),
      fontFamily: 'Roboto-Light',
      textAlign:'center',
    },
    MenuItemsItemTexto1:{
      textTransform:"uppercase",
      color:'#FFFFFF', 
      fontSize: RFValue(13),
      lineHeight: RFValue(13),
      fontFamily: 'Roboto-Light',
      textAlign:'center',
    },

  };