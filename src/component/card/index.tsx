import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { colors } from '../../utils/color';
import { iconLibraries } from '../Icon/icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



interface CardProps {
  iconName: string;
  iconLib: string;
  CardConatinerStyle?: StyleProp<ViewStyle>;
  Textstyle?: StyleProp<TextStyle>;
  name?: string;
  size: number;
  backgroundColor?: string
  paragraph?: string
  onPress: () => void;
}
const Card: React.FC<CardProps & { onPress: () => void }> = ({
  iconName,
  size,
  iconLib,
  name,
  onPress,
  CardConatinerStyle,
  Textstyle,
  backgroundColor,
  paragraph

}) => {
  const IconComponent = iconLibraries[iconLib] || MaterialCommunityIcons; // fallback
  return (

    <TouchableOpacity style={[CardConatinerStyle, { backgroundColor: backgroundColor }]} onPress={onPress} >
      <IconComponent name={iconName} size={size} color={colors.primary} />
      <Text style={Textstyle}>{name}</Text>
      <Text style={{ fontWeight: 400 }}>{paragraph}</Text>
    </TouchableOpacity>

  );
};

export default Card;
