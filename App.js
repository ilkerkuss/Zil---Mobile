/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Text
} from 'react-native'; 
 
import Root from './src/Root'
 
export default class App extends Component {
  render() {
    return ( 
     <View style = {{flex:1}}>   
       <Root />
     </View>
    );
  }
 
};  
