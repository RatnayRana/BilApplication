import {
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './style.header';
import TextCompoment from '../TextComponent/index.text';
interface HeaderIProps {
  title: string;
  textStyle?: StyleProp<TextStyle>; // Optional style for the TextComponent
  iconStyle?: StyleProp<ViewStyle>; // Optional style for the Icon
}
const Header: React.FC<HeaderIProps> = ({title, textStyle}) => {
  return (
    <View style={styles.container}>
      <TextCompoment text={title} style={[styles.Text, textStyle]} />

    </View>
  );
};

export default Header;
