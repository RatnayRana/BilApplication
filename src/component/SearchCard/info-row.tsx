import { StyleProp, Text, TextStyle, View } from "react-native";
import TextCompoment from "../TextComponent/index.text";

const InfoRow = ({
  label,
  value,
  style,
}: {
  label: string;
  value?: string | number;
  style?: StyleProp<TextStyle>;
}) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 2 }}>
      <TextCompoment text={label} />
      <Text style={style}>{value}</Text>
    </View>
  );
};

export default InfoRow
