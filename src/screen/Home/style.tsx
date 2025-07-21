import { StyleSheet } from 'react-native';
import { colors } from '../../utils/color';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const cardGap = 16;

const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;
export const homeStyles = StyleSheet.create({

  CardContainer: {

    // paddingHorizontal: 12,
    paddingVertical: 16,
    height: height,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10


  },
  Card: {
    width: cardWidth,
    height: height / 4,
    marginTop: 10,
    borderRadius: 18,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    elevation: 6,
    paddingHorizontal: 22,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 5,

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
  cardTextStyle: {
    fontSize: 18,
    color: colors.black,
    textAlign: 'left', // Centers text horizontally
    flexWrap: 'wrap',
    width: '100%', // Keeps text within bounds
    marginVertical: 15,
    fontWeight: 600,
    marginHorizontal: 3

  },
  TextView: {
    display: 'flex',
    flexDirection: 'column',
  },
  Main: {
    justifyContent: 'center', width: width, height: height, alignItems: 'center'
  },
  headercontainer: {
    height: height / 8,
    backgroundColor: "rgb(37, 99, 235)",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent:'center',
    gap: 5,

  },
  Imagediv: {
    height: 50,
    width: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.white,
    marginRight: 10,
    overflow: 'hidden',
  },
  TextStyle: {

    fontSize: 20,
    color: colors.white,
    fontWeight: 600
  }
});
