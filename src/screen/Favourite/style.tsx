import { StyleSheet } from 'react-native';
import { colors } from '../../utils/color';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const cardGap = 16;

const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;
export const seetingStyles = StyleSheet.create({


  headercontainer: {
    height: height / 5,
    backgroundColor: "rgb(37, 99, 235)",
    // display: 'flex',
    // alignItems: 'center',
    // flexDirection: 'column',
    // gap: 5,
    // marginBottom: 10,
  },
 
  TextStyle: {
    fontSize: 20,
    width:'auto',
    color: colors.white,
    fontWeight: 600,
     marginLeft: 15
  },
  textStyle: {
    width: width-100,
    justifyContent: 'space-around',
      flexDirection: 'row',
      fontWeight:'bold',
      fontSize: 24,

  },

  iconStyle: {
    marginHorizontal: '10%'
   
  }


});
