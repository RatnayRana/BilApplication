import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/color';

const {height} = Dimensions.get('window');
const applicationStyles = StyleSheet.create({
  scrollview: {
    marginTop: 5,
    padding: 16,
  },
  container: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.white,
    flex: 1,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight:500
  },
  //navcontainer main style
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
    marginBottom: 10, 
  },
  headercontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },

  imagev: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  CardStyle: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 5,
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: '2%',
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },

  textStyle: {
    fontSize: 18,
    color: colors.white,
  },
  submitStyle: {
    alignItems: 'center',
    marginLeft: 30,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '10%',
    left: '2%',
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
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '7%',
    
  },
});

export default applicationStyles;
