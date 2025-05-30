import { StyleSheet } from 'react-native';
import { colors } from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginBottom: 10,
    // marginTop: 10,
    gap: 10,
  },
  label: {
    fontSize: 20,
    color: colors.black,
  },
  inputContainer: {
    padding: 8,
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius:10,
    flexDirection: 'row', 
    justifyContent:'space-between'    
  },
  input: {
    marginRight:100,
    flex: 1, // Ensure the TextInput takes up all available space
    textAlignVertical: 'center', // Center text vertically (Android-specific)
    // paddingTop: 6, // Adjust this value to move the placeholder down
    // paddingLeft: 10, // Reset margin to avoid conflict
    height: '100%',
  },


  eye: {
    width: 30,
    height: 30,
      marginLeft: 10,
  },
});
