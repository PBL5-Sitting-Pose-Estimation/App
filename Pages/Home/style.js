import { StyleSheet } from 'react-native';
import color from '../../Contains/color'
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'white'
    },
    head:{
        flex: 1.2,
        paddingStart: 20,
        justifyContent: 'center'
    },
    title:{
        fontSize: 22,
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        opacity: 1,
        letterSpacing: 0.4
    },
    centerImage:{
      flex: 3.8,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderStyle: 'dashed',
      borderRadius: 8,
      borderColor: '#8F9FBF',
      marginHorizontal: 20
    },
    image:{
      position: 'absolute',
      right: 20,
      borderRadius: 100,
      borderWidth: 1,
      // borderColor: 'black',
      width: 70,
      height: 70,
    },
    foot:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14
    },
    btnLogin:{
      borderRadius: 12,
      color: 'white',
      backgroundColor: '#8F9FBF',
      width: 50,
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
      width: 50,
      height: 52,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center'
    }
});

export default styles;