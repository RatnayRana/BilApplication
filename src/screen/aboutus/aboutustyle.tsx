import { StyleSheet } from 'react-native';
import { colors } from '../../utils/color';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const AboutStyles = StyleSheet.create({
  headercontainer: {
    height: height / 3, // increased from /4 to give space for image + text

    backgroundColor: "rgb(37, 99, 235)",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    flexDirection: 'column',
  },

  ImagedivStyle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.white,
    overflow: 'hidden',
    marginBottom: 15,
  },

  ImageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },

  TextView: {
    alignItems: "center",
    justifyContent: "center",
  },

  TextStyle: {
    alignSelf:'center',
    color: colors.white,
    fontSize: 16,
    
  },

  IconStyle: {
    padding: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});