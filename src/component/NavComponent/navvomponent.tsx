import {
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import TextCompoment from '../TextComponent/index.text';
import {StyleProp} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // ✅ Use the correct icon set
import { colors } from '../../utils/color';

interface navComponent {
  container1Style?: StyleProp<ViewStyle>;
  headercontainerStyle?: StyleProp<ViewStyle>;
  subcontainerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  textSytle?: StyleProp<TextStyle>;
  imageSource?: any;
  width?: number;
  height?: number;
  text: string;
  backIcon: string;
  size:number
}

const NavComponent = ({
  container1Style,
  headercontainerStyle,
  subcontainerStyle,
  textSytle,
  backIcon,
  text,
}: navComponent) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={container1Style}>
      <View style={headercontainerStyle}>
        <TouchableOpacity style={subcontainerStyle} onPress={handleBackPress}>
          <Ionicons name={backIcon} size={35} color={colors.white} />
        </TouchableOpacity>
        <TextCompoment text={text} style={textSytle} />
        <View></View>
      </View>
    </View>
  );
};

export default NavComponent;
