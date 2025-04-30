import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  headercontainer: {
    height: 180,

    // backgroundColor: colors.special_backgroundcolor,
    backgroundColor: "rgb(37, 99, 235)",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    gap: 5,
    marginBottom: 10,
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
  headerimage: {
    width: '100%',
    height: '100%',
  },
  TextView: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 8,
  },
  Text: {
    fontSize: 20,
    color: "white",
    fontWeight: 600
  },
  ButtonView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    gap: 20,
    padding: 10,
  },
});
