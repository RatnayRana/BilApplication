import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
},
title: {
    fontSize: 18,
    fontWeight: 'bold',
},
message: {
    fontSize: 14,
    marginTop: 5,
},


messageView: {
  display: 'flex',
  alignItems :'flex-start',
  marginLeft  : 100,

},
});
