import { StyleSheet } from 'react-native';
import color from '../../Contains/color'
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'white',
      marginTop: 15
    },
    head:{
        flex: 1.2,
        paddingStart: 20,
        justifyContent: 'center'
    },
    title:{
        fontSize: 20,
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        opacity: 1,
        color: '#8F9FBF',
        width: 334
    },
    centerImage:{
      flex: 3.8,
      justifyContent: 'center',
      marginHorizontal: 20
    },
    image:{
      position: 'absolute',
      right: 20,
      bottom: 30,
      // borderRadius: 100,
      // borderWidth: 1,
      // borderColor: 'black',
      width: 70,
      height: 70,
    },
    scroll: {
      // borderWidth: 1
    },
    foot:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14
    }
});

export default styles;