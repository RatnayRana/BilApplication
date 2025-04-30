import { StyleSheet } from 'react-native';
import { colors } from '../../utils/color';

export const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        backgroundColor: colors.blue,
        width:300,
        height:50,
        borderRadius: 10,
    },
    title : {
        color: colors.white,
        padding:12,
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',

    },
});
