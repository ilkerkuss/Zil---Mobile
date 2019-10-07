import { StyleSheet,Dimensions } from 'react-native'; 

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
  },
  ımage1: { 
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 25,
  },
  slideContainer: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: { 
    flex:1
  },
  textContainer : {  
    alignItems: 'center',  
  },
  text: {    
    color: '#F30A59',
    textAlign : 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }, 
  textAlt : {
    color: '#F30A59',
    textAlign : 'center',
    fontSize: 14,
  }, 
  buttonView:{   
    marginTop:screenHeight*0.42,
    width:screenWidth*0.9,
  }
})