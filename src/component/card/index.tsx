import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {colors} from '../../utils/color';
import { iconLibraries } from '../Icon/icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface CardProps {
  iconName: string;
  iconLib: string;
  CardConatinerStyle?: StyleProp<ViewStyle>;
  Textstyle?: StyleProp<TextStyle>;
  name?: string;
  size: number;
  onPress: () => void;
}
const Card: React.FC<CardProps & {onPress: () => void}> = ({
  iconName,
  size,
  iconLib,
  name,
  onPress,
  CardConatinerStyle,
  Textstyle,
 
}) => {
  const IconComponent = iconLibraries[iconLib] || MaterialCommunityIcons; // fallback
  return (
    <TouchableOpacity style={CardConatinerStyle} onPress={onPress}>
      <IconComponent name={iconName} size={size} color={colors.primary} />
      <Text style={Textstyle}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Card;
