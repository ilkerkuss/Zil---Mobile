import React, {Component} from 'react';
import { 
  View,
  Text, 
} from 'react-native';

import {Router, Scene } from 'react-native-router-flux';

import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';

export default class Root extends Component{
    render() {
        return(
            <Router>
                <Scene
                key='Root'
                > 
                    <Scene
                    key='WelcomeScreen'
                    component={WelcomeScreen}
                    hideNavBar
                    initial ={true}
                    /> 

                    <Scene
                        key='login'
                        component={LoginScreen}
                        hideNavBar
                    /> 

                </Scene>
            </Router>
        );
    }
}

