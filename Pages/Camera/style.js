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
      width: 30,
      height: 30
    },
    foot:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14
    },
    button:{
      backgroundColor: 'white',
      width: 70,
      height: 70,
      fontSize: 18,      
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
});

export default styles;