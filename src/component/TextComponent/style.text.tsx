import { StyleSheet } from 'react-native';
import { colors } from '../../utils/color';

export const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    Text:{
        fontSize: 44,
        fontWeight: 'bold',
        color: colors.black,
    },
});
