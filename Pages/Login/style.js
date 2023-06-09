import { StyleSheet } from 'react-native';
import color from '../../Contains/color'
const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    backContainer:{
      position: 'absolute',
      top: 50,
      left: 20
    },
    backBtn:{
      width: 25,
      height: 25
    },
    waitingCircle:{
      position: 'absolute',
      top: 0, 
      left: 0, 
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title:{
      fontSize: 40,
      fontFamily: 'Nunito',
      fontStyle: 'normal',
      textAlign: 'center'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor: '#c5c5c5',
      borderRadius: 10,
      padding: 10,
      marginHorizontal: 30
    },
    btnLogin:{
      borderRadius: 12,
      backgroundColor: '#8F9FBF',
      width: 245,
      height: 52,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      overflow: 'hidden'
    },
    txtLogin:{
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
    },
    linkRegister:{
      color: '#8F9FBF',
      fontSize: 18,
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontFamily: 'Nunito',
      textAlign: 'right',
      marginTop: 10,
      marginEnd: 80
    }
});

export default styles;