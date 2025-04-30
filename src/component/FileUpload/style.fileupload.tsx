import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '94%',
        marginLeft:10,
        padding:8,
        height:60,
        borderRadius:10,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    image: {
        height: 30,
        width: 30,
        borderRadius: 100,
      },
      uploadbutton:{
        borderRadius:10,
        height:50,
        backgroundColor:'#44A3FF',
        elevation:2,
      },
});

export default styles;
