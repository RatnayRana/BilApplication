import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dropdown: {
    padding: 10,
    height: 50,
    backgroundColor: colors.white,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
  },
  focusedDropdown: {
    borderColor: '#007AFF',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#aaa',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#333',
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  textItem: {
    fontSize: 16,
    color: '#333',
  },
});
