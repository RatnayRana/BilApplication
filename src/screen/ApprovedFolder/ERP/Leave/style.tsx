import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/color';

const approvedLeaveStyles = StyleSheet.create({
  // HeaderStyle
 
  // text: {
  //   color: colors.black,
  //   fontSize: 22,
  // },
  displaycontainer: {
    padding:4,
    paddingLeft:7,
    height: 55,
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 15,
  },
  // mainContainer:{
  //   marginBottom:12
  // },
  buttonContainer: {
    alignItems: 'center', // Ensures button is centered
    width: '100%',
    marginVertical: 18,
    alignSelf: 'center',
    height: 'auto', // Ensures button stays within bounds // Ensures button stays within bounds
  },
  ButtonStyle: {
  //   marginBottom: 60, // Increase space
  //   height: 50, // Reduce height slightly
  //   width: '100%', // Make sure it fits the screen
  //   backgroundColor: '#fff',
  //   justifyContent: 'center', // Center text inside button
  //   alignItems: 'center', // Center text horizontally
  //   borderRadius: 10, // Make button look better
},
  loaderStyle:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1000
  },
  reasonStyle:{
    marginTop: 5,
    textAlign: 'left',
    textAlignVertical: 'top',
    height: 80,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 5,
    fontSize: 16,
    paddingHorizontal: 12,
    fontWeight: 500,
  }
});

export default approvedLeaveStyles;
