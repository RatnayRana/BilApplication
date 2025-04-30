import { StyleProp, Text, TextStyle, View } from 'react-native';
interface HeaderIProps{
    text: string;
    style?:StyleProp<TextStyle>

   }
const TextCompoment:React.FC<HeaderIProps> = ({text,style}) => {
    return(
        <View>
            <Text style={style}>{text}</Text>
        </View>
    );
};

export default TextCompoment;
