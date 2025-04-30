import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';
import {Dimensions} from 'react-native';
const { height} = Dimensions.get('window');

export const styles = StyleSheet.create({
 
  CardContainer: {
    // width: width,
    paddingHorizontal: 15,
    height: height,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // marginStart: 2,
    // marginEnd: 2
    

  },
  Card: {
    // width: width / 3,
    // height: height / 6,
    width: "32%",
    height: 100,
    backgroundColor: colors.white,
    marginTop: 10,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  cardimageStyle: {
    width: 40,
    height: 40,
    alignSelf: 'center',

  },
  text1: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 24,
    color: colors.black,
  },
  cardTextStyle:{
    fontSize: 18,
      color: colors.black,
      textAlign: 'center', // Centers text horizontally
      flexWrap: 'wrap',
      width: '100%', // Keeps text within bounds
      marginTop: 10,

  }
});
