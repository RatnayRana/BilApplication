import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';
const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  container1: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal: 10, // Add some padding for spacing
  },
  headercontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
  },
  subcontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: colors.black,
    elevation: 5,
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 100,
  },
  text: {
    color: colors.black,
    fontSize: 28,
  },
  traveltype: {
    fontSize: 20,
  },
  formContainer: {
    marginTop: 12,
    marginLeft: 10,
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
  placeholder: {},
  checkbox: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  textStyle: {
    fontSize: 20,
  },
  check: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 5,
    gap: 20,
  },
  travelfundingDrop: {
    marginTop: 10,
  },
  DateContainer: {
    marginTop: 10,
  },
  dateContainer: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Ensure vertical alignment
    justifyContent: 'space-between', // Space out text and icon
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#FAFAFA',

    padding: 9,
  },
  container2: {
    height: 50,
    marginTop: 10,
    width: '94%',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: colors.white,
    marginLeft: 10,
    flex: 1,

    justifyContent: 'space-between',
    // alignItems: 'center',
    // backgroundColor: 'white',
  },
  startdate: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    marginBottom: 100,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputContainer: {
    backgroundColor: colors.white,
    padding: 12,
    marginLeft: 10,
    marginTop: 10,
    width: '94%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
  },
  AdvanceCheck: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 1,
    marginTop: 10,
    alignItems:'center',
    justifyContent: 'space-between',
  },
  icon: {
     marginRight:15,
  },
  AdvancetextStyle:{
    marginRight:10,
    fontSize:20,
  },
  textContainer: {
    display: 'flex',
    gap: 10,
    marginTop: 10,
  },
  input: {
    backgroundColor: colors.white,
    paddingTop:10,
},
ReasonContainer:{
    backgroundColor: colors.white,
    height:200,
    paddingTop:10,
},
ButtonStyle: {
    width: '95%',
    backgroundColor: '#44A3FF',
  },
  buttonConatiner: {
    marginTop: 20,
    marginLeft: 13,
  },

  disabledInput: {
    backgroundColor: '#fAfAfA',
    color: '#888',
  },

  dropdownDisabled: {
    backgroundColor: '#f5f5f5',
    opacity: 0.7,
  },
});

export default styles;
