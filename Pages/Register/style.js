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
    btnRegister:{
      borderRadius: 12,
      backgroundColor: 'white',
      borderColor: '#8F9FBF',
      borderWidth: 1,
      width: 245,
      height: 52,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
    },
    txtRegister:{
      color: '#8F9FBF',
      fontSize: 18,
      fontWeight: 'bold'
    }
});

export default styles;