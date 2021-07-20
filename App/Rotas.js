import { Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
//import stackNav from './Stacknav';
import stackNav from './Stacknav';
import SideMenu from './SideMenu/SideMenu';
import Home from "./Home";
import Eventos from "./Eventos";
import EventosInterna from "./EventosInterna";
import Vinheta from "./Vinheta";

import ItensEventosInterna from "./ItensEventosInterna";
import Localizacao from "./Localizacao";
import Live from "./Live";
import Cadastro from "./Cadastro";
import Erro from "./Includes/Erro";


//import Cartoes from './Cartoes';




const drawernav = createDrawerNavigator({




  stackNav : {
    screen: stackNav,
  },  




},{  

  useNativeAnimations: true,
  drawerBackgroundColor: "transparent",
  contentComponent: SideMenu,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerWidth: 300,
  drawerPosition: 'right',
  drawerWidth: 300,
  drawerPosition: 'right',
  contentOptions: {
    activeTintColor: '#e91e63',
    itemsContainerStyle: {
      // opacity: 1
    },
    iconContainerStyle: {
      // opacity: 1
    },
    itemStyle: {
      flexDirection: 'row-reverse',
    }
  },
  
  resetOnBlur:true,
  lazy: true,   
  //drawerWidth: Dimensions.get('window').width - 80,
  drawerWidth: Dimensions.get('window').width,
  defaultNavigationOptions: {
    gesturesEnabled: false,
    //drawerLockMode:'locked-closed'
  },
  headerStyle: {
     
    backgroundColor: 'transparent',
  
  }
  


});


const AppContainer = createAppContainer(drawernav);
export default AppContainer;