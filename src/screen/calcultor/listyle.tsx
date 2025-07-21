import { StyleSheet } from 'react-native';
import { colors } from '../../utils/color';

const lmsandisStyles = StyleSheet.create({

  reasonStyle: {
    marginTop: 2,
    textAlign: 'left',
    textAlignVertical: 'top',
    height: 50,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 5,
    fontSize: 16,
    paddingHorizontal: 12,
    fontWeight: 500,
  },
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scroll: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#673AB7',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  emiText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#008000',
    marginRight: 2
  },
  emiLabel: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  totalText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 16,
    color: '#000',
  },
  breakdown: {
    marginTop: 12,
    alignItems: 'center'
  },
  maincontainerStyle: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 9, shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
    height: 200,
    padding: 20,
  },
  subConstainerStyle:{
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  }
});

export default lmsandisStyles;
