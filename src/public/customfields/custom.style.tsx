// import { StyleSheet } from "react-native";
// import { colors } from "../../utils/color";

import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  errorText: {
    marginLeft: '5%',
    color: '#FF0000',
  },

  container4: {
    padding: 10,
    margin: 6,
  },
  traveltype: {
    fontSize: 20,
  },
  textStyle: {
    marginTop: 10,
    fontSize: 18,
    color:colors.primary,
  },
  DateContainer: {},
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal: 10, // Add some padding for spacing
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 100,
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
  formContainer: {
    marginTop: 12,
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
    height: 55,
    marginTop: 10,
    width: '100%',
    borderWidth: 2,
    borderRadius: 8,
    borderColor:colors.primary,    flex: 1,

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
    fontSize: 22,
    // fontWeight: 'bold',
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
  // pickupline
  textContainer: {
    // backgroundColor:colors.darkGrey,
    // display: 'flex',
    // gap: 10,
    // marginTop: 10,
  },
  ButtonStyle: {
    width: '95%',
    backgroundColor: '#44A3FF',
  },
  buttonConatiner: {
    marginTop: 10,
    marginLeft: 13,
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
    backgroundColor: colors.white,
    height: 200,
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
  text: {
    color: colors.black,
    fontSize: 28,
  },
  ReasonContainer: {
    backgroundColor: colors.white,
    // height: 200,
    paddingTop: 10,
  },
});
