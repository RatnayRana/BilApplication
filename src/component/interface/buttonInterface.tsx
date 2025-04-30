import { StyleProp, TextStyle, ViewStyle } from 'react-native';

// In '../interface/buttonInterface.ts'
export interface buttonInterface {
  labelStyle?:StyleProp<TextStyle>
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}
