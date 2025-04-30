import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StyleProp, TextStyle } from 'react-native';

interface IconProps {
  library: 'AntDesign' | 'MaterialIcons' | 'FontAwesome'; // Add more as needed
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}

const Icon: React.FC<IconProps> = ({ library, name, size = 24, color = 'black',style }) => {
  const renderIcon = () => {
    switch (library) {
      case 'AntDesign':
        return <AntDesign name={name} size={size} color={color} style={style} />;
      case 'MaterialIcons':
        return <MaterialIcons name={name} size={size} color={color} style={style} />;
      case 'FontAwesome':
        return <FontAwesome name={name} size={size} color={color} style={style} />;
      default:
        console.warn(`Unsupported library: ${library}`);
        return null;
    }
  };

  return renderIcon();
};

export default Icon;
