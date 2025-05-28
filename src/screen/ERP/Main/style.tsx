import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../../utils/color';
const { height, width } = Dimensions.get('window');
const cardGap = 16;

const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2.2;
export const erpServiceStyles = StyleSheet.create({
  CardConatinerStyle: {
    width: cardWidth,
    height: height / 6,
    marginHorizontal: 12,
    marginTop: 10,
    borderRadius: 18,
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: 'white'
  },
  imageandTitleStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    gap:12
  },

});

