import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/color';
const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
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
    height: height / 7,
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    padding: 10,
    gap: 5,
    marginBottom: 10, // Add some padding for spacing
  },
  imagev: {
    height: 40,
    width: 40,
    borderRadius: 100,
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
  formContainer: {},
  ButtonStyle: {
    marginBottom: 60, // Increase space
    // height: 10, // Reduce height slightly
    width: '100%', // Make sure it fits the screen
    backgroundColor: colors.primary,
    justifyContent: 'center', // Center text inside button
    alignItems: 'center', // Center text horizontally
    borderRadius: 10,
    paddingVertical: 25, // Make button look better
  },
  buttonConatiner: {
    marginTop: 2,
  },
  container4: {
    padding: 10,
    margin: 6,
  },
  traveltype: {
    fontSize: 20,
  },
  textStyle: {
    fontSize: 20,
  },
  DateContainer: {
    marginTop: 10,
  },

  headericon: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    marginTop: 7,
    padding: 10,
  },
  titleContainer: {
    flex: 1, // Ensures the title container takes up available space
    alignItems: 'center', // Centers the title horizontally
  },
  labeltext: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  AdvanceCheck: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 1,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 15,
  },
  AdvancetextStyle: {
    marginRight: 10,
    fontSize: 20,
  },
  placeholder: {
    fontSize: 20,
    fontWeight: 'bold',
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
  checkbutton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    margin: 10,
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
    width: '95%',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: colors.white,
    marginLeft: 10,
    flex: 1,

    justifyContent: 'space-between',
    // alignItems: 'center',
    // backgroundColor: 'white',
  },
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    marginTop: 100,
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
  startdate: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  shiftContainer: {
    marginTop: 10,
    marginRight: 10,
  },
  inputContainer: {
    backgroundColor: colors.white,
    padding: 12,
    marginLeft: 10,
    marginTop: 10,
    width: '95%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textContainer: {
    display: 'flex',
    gap: 10,
    marginTop: 10,
  },

  checkbox: {
    marginTop: 10,
    marginRight: 10,
    paddingRight: 10,
  },
  halfday: {
    marginRight: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    height: 200,
  },

  text: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 400,
  },
  ReasonContainer: {
    backgroundColor: colors.black,
    marginHorizontal: 5,
    height: 200,
    paddingTop: 10,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  buttonContainer: {
    marginVertical: 10,
    alignSelf: 'center',
    alignItems: 'center', // Ensures button is centered
    width: '100%',
    height: 'auto', // Ensures button stays within bounds
  },
  loaderStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1000,
  },
  dropdownStyle: {
    padding: 10,
    height: 55,
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 15,
  },
  reasonStyle: {
    marginTop: 2,
    textAlign: 'left',
    textAlignVertical: 'top',
    height: 200,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 5,
    fontSize: 16,
    paddingHorizontal: 12,
    fontWeight: 500,
  },
  checkconatinerStyle: {
    borderColor: colors.primary,
    marginTop: 10,
    marginLeft: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
    marginVertical: 5,
  },
  //ConatinerInput
  containerInput: {
    display: 'flex',
    gap: 10,
    marginTop: 10,
  },
  textInputStyle: {
    marginTop: 10,
    fontSize: 20,
    color: colors.primary,
    fontWeight: 600,
  },
  //PlaceHolderStyle
  placeHolderStyle: {color: 'gray', fontSize: 16, fontWeight: '400'},
  // checkContainerStyle

  buttonTextStyle: {
    color: colors.white,
    fontWeight: 600,
    fontSize: 18,
  },
  //LabelStyle
});
