

import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/color';

export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    marginHorizontal: '15%',
    marginVertical: '15%',
    borderRadius: 20,
  },
  titleStyle: {
    fontSize: 22,
    marginBottom: 5

  },

  viewStyle: {
    marginLeft: '2%',
    gap: 10,
  },
  contentStyle: {
    fontSize: 18,
    marginBottom: 18
  },
  labelStyle: {
    fontSize: 16,
  },
  placeholder: {
    fontSize: 14,
    color:'black',
  },
  inputstyle: {
    // justifyContent:'space-between',
    padding: 1,
  },
  buttonStyle: {
    color: colors.white,
    marginVertical: '3%',
    alignItems: 'center',
    backgroundColor: colors.homepageheadercolor,
    width: 300,
    height: 50,
    borderRadius: 10,
  },
  labelButtonstyle:{
    color:colors.white,
    textAlign:'center',
    fontWeight:'bold',
    fontSize:16,
    marginVertical:'3%',
  },
});
