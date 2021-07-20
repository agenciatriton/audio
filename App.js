/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Switch,
  StatusBar,
  Alert,
  AppState,
  InteractionManager
   } from 'react-native';
import { YellowBox } from 'react-native';
import Rotas from './App/Rotas';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './App/Reducers';
import Stacknav from './App/Stacknav';



let store = createStore(Reducers, applyMiddleware(ReduxThunk));

console.disableYellowBox = true;


export default class CustomDrawer extends Component {



  render () {


    /*
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillUpdate is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);

    console.ignoredYellowBox = ['Require cycle: node_modules/react-native-paper'];
*/
    return (
      
      <Provider store={store}>
        <Rotas/>        
      </Provider>
    );
  }
}


