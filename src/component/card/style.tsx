import { StyleSheet } from 'react-native';
import { colors } from '../../utils/color';

export const styles = StyleSheet.create({
   
   Text:{
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.black,
      textAlign: 'center', // Centers text horizontally
      flexWrap: 'wrap',
      width: '100%', // Keeps text within bounds
      marginTop: 10,

   },
 
});
