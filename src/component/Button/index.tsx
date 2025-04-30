import {Text, TouchableOpacity} from 'react-native';
import {buttonInterface} from '../interface/buttonInterface';
import {TouchableRipple} from 'react-native-paper';

const Button: React.FC<buttonInterface> = ({
  title,
  onPress,
  style,
  labelStyle,
}) => {
  return (
    <TouchableRipple style={{width: "100%"}} onPress={onPress}>
      <TouchableOpacity activeOpacity={0.6} style={style} onPress={onPress}>
        <Text style={labelStyle}>{title}</Text>
      </TouchableOpacity>
    </TouchableRipple>
  );
};

export default Button;
