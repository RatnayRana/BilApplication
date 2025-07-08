import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/color';

const leaveApprovalStyles = StyleSheet.create({
  // mainContainer:{
  //   flex: 1,
  //   height:'100%', // Takes up entire screen hei
  // },
  // HeaderStyle
  text: {
    color: colors.black,
    fontSize: 28,
  },
  image: {
    width: 24,
    height: 24,
  },
  headercontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5%',
    gap: '16%',
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
  // scrollViewStyle: {
  //   flex: 1, // Takes remaining space after header
  //   height: '100%', // Ensures ScrollView has a height context
  // },

  // cardStyle
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,

    padding: 9,
    marginVertical: 10,  // Increased from 5 to 10 for more space between cards
    marginHorizontal: 12,
    // height:'100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between', // ➡️ This will push left and right items apart nicely
  },
  infoContainer: {
    flex: 1,
    gap: '2%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
  leaveContainer: {
    flex: 1,
  },
  leaveType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  durationStyle: {
    fontSize: 14,
    color: '#008000', // Green color for status
    fontWeight: 'bold',
  },
  actionButton: {
    marginLeft: 10,
  },
  ImageStyle: {
    width: 30,
    height: 30,
  },
  container1: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal: 10, // Add some padding for spacing
  },
  statusStyle: {
    marginRight:16,
    fontSize: 14,
    color: '#008000', // Green color for status
    fontWeight: 'bold',
  },
});

export default leaveApprovalStyles;
