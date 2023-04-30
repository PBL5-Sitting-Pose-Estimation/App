import { StyleSheet, Dimensions } from 'react-native';
import color from '../../Contains/color'
const styles = StyleSheet.create({
    container:{
      flex: 1
    },
    title:{
        flex: 1,
        fontSize: 90,
        // fontFamily: 'Grand Hotel',
        fontStyle: 'normal',
        alignItems: 'center',
        justifyContent: 'center'
    },
    centerImage:{
      flex: 1
    },
    image:{
      width: Dimensions.get('window').width,
      height: 189
    },
    foot:{
      flex: 1,
      alignItems: 'center',
      gap: 20
    },
    btnLogin:{
      borderRadius: 12,
      color: 'white',
      backgroundColor: '#8F9FBF',
      width: 245,
      height: 52,
      textAlign: 'center',
      textAlignVertical: 'center'
    },
    btnRegister:{
      borderRadius: 12,
      color: '#8F9FBF',
      backgroundColor: 'white',
      width: 245,
      height: 52,
      textAlign: 'center',
      textAlignVertical: 'center'
    }
});

export default styles;