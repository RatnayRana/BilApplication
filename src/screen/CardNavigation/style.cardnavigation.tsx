import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

const aprrovalStyles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 28,
  },
  image: {
    width: 24,
    height: 24,
  },
  container1: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'center',
    paddingHorizontal: 19, // Add some padding for spacing
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
  imagestyle: {
    height: 30,
    width: 30,
    borderRadius: 100,
  },
  //   cardStyle

  CardStyle: {
    height: 180,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 30,
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: '3%',
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },

  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  submitStyle: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '13%',
    left: '10%',
    width: '80%',
    height: 50,
    backgroundColor: colors.black,
    borderWidth: 1,
    borderRadius: 30,
    elevation: 3,
  },
  SubmitTextStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.white,
  },
  imageandTitleStyle: {
    flexDirection: 'row',
    paddingHorizontal:7,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '7%',
  },
});

export default aprrovalStyles;
