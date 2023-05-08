import { StyleSheet } from 'react-native';
import color from '../../Contains/color'
const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white'
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
      color: '#8F9FBF',
      backgroundColor: 'white',
      borderColor: '#8F9FBF',
      borderWidth: 1,
      width: 245,
      height: 52,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center',
      alignSelf: 'center',
      marginTop: 10
    }
});

export default styles;