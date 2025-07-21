import { StyleSheet } from 'react-native';
import { colors } from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginBottom: 10,
    gap: 10,
  },
  label: {
    fontSize: 20,
    color: colors.black,
  },
  inputContainer: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    textAlignVertical: 'center', // Ensures center text vertically on Android
    color: colors.black,
  },
  eyeContainer: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eye: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
