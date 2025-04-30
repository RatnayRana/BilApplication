import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    // marginLeft:8,// Center the image horizontally
    marginBottom: 10,
    marginTop: 10,
    gap: 10,
  },
  label: {
    fontSize: 20,
    color: colors.black,
  },
  inputContainer: {
    gap:40,
    padding:8,
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row', // Ensure icons and inputs are aligned horizontally
    alignItems: 'center',
     // Align items vertically

  },
  input: {
    flex: 1, // Ensure the TextInput takes up all available space
    textAlignVertical: 'center', // Center text vertically (Android-specific)
    paddingTop: 6, // Adjust this value to move the placeholder down
    paddingLeft: 10, // Reset margin to avoid conflict
    height: '100%',
    backgroundColor:'black'

  },

  icon: {
    marginRight: 10,
  },
  image: {
    width:30,
    height:30,
},
eye : {
    width: 24,
    marginHorizontal: 10,
},
});
