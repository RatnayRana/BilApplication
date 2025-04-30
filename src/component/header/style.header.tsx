import { StyleSheet } from 'react-native';
import { colors } from '../../utils/color';

export const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    Text:{
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.black,
    },
    iconstyle:{
        marginTop: 9,
        fontSize: 24,
        color:colors.black,
        fontWeight:'bold',
    },
});
