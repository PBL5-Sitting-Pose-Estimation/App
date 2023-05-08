import { StyleSheet } from 'react-native';
import color from '../../Contains/color'
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'white'
    },
    head:{
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    title:{
        fontSize: 90,
        fontFamily: 'Grand Hotel',
        fontStyle: 'normal',
        opacity: 1,
        letterSpacing: 8,
        width: 220,
        height: 131,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    centerImage:{
      flex: 1.1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    image:{
      width: '100%',
      height: 220
    },
    foot:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14
    },
    btnLogin:{
      borderRadius: 12,
      color: 'white',
      backgroundColor: '#8F9FBF',
      width: 245,
      height: 52,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center'
    },
    btnRegister:{
      borderRadius: 12,
      color: '#8F9FBF',
      backgroundColor: 'white',
      borderColor: '#8F9FBF',
      borderWidth: 1,
      width: 245,
      height: 52,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center'
    }
});

export default styles;