import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   centerview:{
    // flex: 1, //
    justifyContent:'center',
    alignItems:'center',
   },
   modalview:{
    fontSize:20,
    margin:20,
    backgroundColor:'#41046a',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    padding:10,
    width:'90%',
    height:'90%',
    shadowColor:'#000',
    shadowOffset:{
        width:0,
        height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5,

   },
});
