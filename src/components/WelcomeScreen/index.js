import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';  
 

import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import styles from './style';


export default class index extends Component {
   
  render() {
    return ( 
      <Swiper>
        
        <View style={styles.slideContainer} showButtons='true'> 
        
          <View  style={styles.textContainer}>
            <Text style={styles.text}>Ders Çalışırken Sıkılıyor Musun?</Text>
          </View>
          
          <View  style={styles.textContainer}rr>
            <Text style={styles.textAlt}>İstediğin yerde ders alabileceksin</Text>
          </View>

          <View  style={styles.ımage1} >
            <Image source={require('../../assests/page1.png')} />
          </View>
          
        </View>


        <View style={styles.slideContainer} showButtons='true'> 
        
          <View  style={styles.textContainer}>
            <Text style={styles.text}>Bilgi Paylaştıkça ve Para Kazandıkça Güzel</Text>
          </View>
          
          <View  style={styles.textContainer}>
            <Text style={styles.textAlt}>Artık ders anlatarak para kazanabileceksin ve bu senin belirlediğin yerde ...</Text>
          </View>

          <View  style={styles.ımage1} >
            <Image source={require('../../assests/page2.png')} />
          </View>
          
        </View>

        <View style={styles.slideContainer} showButtons='true'> 
        
          <View  style={styles.textContainer}>
            <Text style={styles.text}>Anlamadığın ve Öğrenmek İstediğin Konuları Anında Öğren</Text>
          </View>
          
          <View  style={styles.textContainer}>
            <Text style={styles.textAlt}>Eğitime yeni bir soluk ve heyecan geliyor. Hem öğren, hem öğret !!!</Text>
          </View>

          <View  style={styles.ımage1} >
            <Image source={require('../../assests/page3.png')} />
          </View>
          
        </View>
        
        <View style={styles.slide3} > 
          <View style={styles.buttonView}>
            <Button  
              title="Giriş Yap" 
              onPress = {() => Actions.login()}
            />  
          </View>
        
     
        </View>

        

      </Swiper>
    
      )
  }
} 

