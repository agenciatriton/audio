import React , { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';
import MapView, {Marker, GoogleMaps} from 'react-native-maps';
import {NavigationApps,actions,googleMapsTravelModes, mapsTravelModes} from "react-native-navigation-apps";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const {height, width} = Dimensions.get('window'); 
import Estilos from './Includes/EstilosGlobal';
import { connect } from 'react-redux';
import { 
  Edit_id_tb_user,
} from './Actions/LoginActions';


//GLOBAIS
import Configs from './Includes/Configs';
import Flat from './Includes/Flat';
import Erro from './Includes/Erro';
import Load from './Includes/Load';
import Header from './Includes/Header';
import { Assets } from 'react-navigation-stack';
//GLOBAIS


Localizacao.navigationOptions = ({ navigation }) => {
  const { state, setParams, navigate } = navigation;
  const params = state.params || {};
  return {
    header: 
    <Header tipo={'LOCALIZACAO'} navigation={navigation}></Header>
  }
}

function Localizacao(props) {

  const inputRefCadastro = useRef(null);


  function Teste(){
      if(IconsApps == false){
          setIconsApps(true);
      } else {
          setIconsApps(false);
      }
  }



  useEffect(() => {
//setTimeout(() => {
setTimeout(() => {
  //setIconsApps(false);

  map.animateToRegion(position, 1)
}, 2000);
   
  },[]);

  const [IconsApps, setIconsApps] = useState(false);


  const [position, setPosition] = useState({
    latitude: -23.5283405,
    longitude: -46.6695493,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  
  const [search, setsearch] = useState('Rua sousa brasil, 83');
  const [address, setaddress] = useState('Rua sousa brasil, 83');
  const [lat, setlat] = useState(false);
  const [lon, setlon] = useState(false);

    const { navigate } = props.navigation;

    return (
        <>
        <SafeAreaView style={[{flex:1}]}>
          <ScrollView style={[{flex:1}]}>

          <View style={{alignItems:'center', justifyContent:'center'}}>
              
              <MapView
                mapType='standard'
                ref={map => this.map = map}
                minZoomLevel={10}
                maxZoomLevel={18}
                rotateEnabled={false}

                zoomControlEnabled={true}
                style={styles.map}
                region={position}
                initialRegion={position}
                //initialCamera={position}
                // onPress={e => setPosition({ ...position, latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude, }) }
              >

                  <Marker
                      coordinate={position}
                      // title={'AUDIO | SHOWS E EVENTOS'} description={'Av. Francisco Matarazzo, 694 São Paulo/SP - CEP: 050001-000'}
                      // icon={require('../assets/marcador.png')}
                  >
                    <Image source={require('../assets/marcador.png')} style={{ width: 60, height: 35 }} />
                  </Marker>

              </MapView>

          </View>

          {IconsApps == true ?
            <View>
                <View style={styles.ViewComoChegar}>
                    <View style={styles.BotaoComoChegar}>
                        <Text style={styles.BotaoComoChegarTexto}>ESCOLHA UMA OPÇÃO ABAIXO:</Text>
                    </View>
                </View>

                <View style={{marginTop: 5, width:'100%', justifyContent:"center", alignItems:"center", paddingTop:10, paddingBottom:10}}>
                <NavigationApps
                    viewMode="view"
                    actionSheetBtnOpenTitle="COMO CHEGAR"
                    actionSheetCloseTitle="FECHAR"
                    iconSize={70}
                    row={true}
                    address='' // address to navigate by for all apps 
                    waze={{address:'',lat:'-23.5283405',lon:'-46.6695493',action: actions.navigateByLatAndLon}} // specific settings for waze
                    googleMaps={{search,lat:'-23.5283405',lon:'-46.6695493',action: actions.navigateByLatAndLon,travelMode:googleMapsTravelModes.driving}} // specific settings for google maps
                    maps={{address:'Av. Francisco Matarazzo, 694, São Paulo,SP, 050001000',lat:'-23.5283405',lon:'-46.6695493',action: actions.navigateByAddress,travelMode:mapsTravelModes.driving}} // specific settings for maps
            

                />
                </View>

            </View>
          : 
            <View style={styles.ViewComoChegar}>
                <TouchableOpacity style={styles.BotaoComoChegar} onPress={()=>Teste()}>
                    <Text style={styles.BotaoComoChegarTexto}>COMO CHEGAR</Text>
                </TouchableOpacity>
            </View>
          }

          <View style={styles.DadosContato}>
              <View style={styles.DivContato}>
                  <Image source={require('../assets/ico_local.png')} style={styles.IcoContato} />
                  <View>
                      <Text style={styles.DadosContatoTitulo}>ENDEREÇO</Text>
                      <Text style={styles.DadosContatoTexto}>Av. Francisco Matarazzo, 694 {"\n"}São Paulo/SP | CEP 050001-000</Text>
                  </View>
              </View>
              <View style={styles.DivContato}>
                  <Image source={require('../assets/ico_horario.png')} style={styles.IcoContato} />
                  <View>
                      <Text style={styles.DadosContatoTitulo}>Horário de funcionamento da bilheteria</Text>
                      <Text style={styles.DadosContatoTexto}>Segunda à Sábado - Das 13:00 às 20:00</Text>
                  </View>
              </View>
              <View style={styles.DivContato}>
                  <Image source={require('../assets/ico_telefone.png')} style={styles.IcoContato} />
                  <View>
                      <Text style={styles.DadosContatoTitulo}>Telefone</Text>
                      <Text style={[styles.DadosContatoTexto, {marginBottom: 0, fontSize: RFPercentage(2.9), lineHeight: RFPercentage(3.6)}]}>11 3862-8279</Text>
                  </View>
              </View>
          </View>

          {/*
          <View style={styles.ViewComoChegar}>
            <TouchableOpacity style={styles.BotaoComoChegar} onPress={()=>Teste()}>
              <Text style={styles.BotaoComoChegarTexto}>COMO CHEGAR</Text>
            </TouchableOpacity>
          </View>
          */}

          </ScrollView>
       </SafeAreaView>

        </>
    );


};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: 280
  },
  DadosContato: {
    width: '80%',
    padding: 20,
    paddingBottom: 0
  },
  DadosContatoTitulo: {
    textTransform:'uppercase',
    color:'#000000', 
    fontSize: RFPercentage(2.9),
    lineHeight: RFPercentage(3.6),
    fontFamily: 'RobotoCondensed-Bold',
    textAlign:'left',
    marginBottom: 3
  },
  DadosContatoTexto: {
    textTransform:'uppercase',
    color:'#3b3b3b', 
    fontSize: RFPercentage(2.3),
    lineHeight: RFPercentage(2.8),
    fontFamily: 'RobotoCondensed-Regular',
    textAlign:'left',
  },

    ViewComoChegar: {
      width: '100%',
      padding: 20,
      paddingBottom: 0
    },
    BotaoComoChegar: {
      width: '100%',
      borderColor: '#000000',
      borderWidth: 1,
      padding: 15
    },
    BotaoComoChegarTexto: {
      textAlign:'center',
      textTransform:'uppercase',
      color:'#000000', 
      fontSize: RFPercentage(3),
      lineHeight: RFPercentage(3.6),
      fontFamily: 'RobotoCondensed-Bold',
    },
    IcoContato: {
      width: 35,
      height: 35,
      marginRight: 10
    },
    DivContato: {
      marginBottom: 20,
      flex: 1,
      flexDirection: 'row'
    },
    IconesApps: {
      alignItems:'center',
      justifyContent:'center',
      //backgroundColor: '#ababab',
      position: "relative",
      zIndex: 10,
      left: 0,
      right: 0,
    }

 });
 

const mapStateToProps = (state) => {
  return {
    id_tb_user:state.auth.id_tb_user,
    
  };
};

const LoginConnect = connect(mapStateToProps, { 
  Edit_id_tb_user,

  })(Localizacao);
 export default LoginConnect;