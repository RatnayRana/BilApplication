import {
  GestureResponderEvent,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface Item {

  item_name: string;
  iconName?: string;
  iconLib?: string;
  icon: string;
  screen: string;
  item_id?: number;  skipPermissionCheck?: boolean; 
}

// Define the props for the Card component
export interface CardProps {
  imageandTitleStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  CardStyle?: StyleProp<ViewStyle>;
  imagecardStyle?: StyleProp<ImageStyle>;
  imagecomponentStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  SubmitStyle?: StyleProp<ViewStyle>;
  SubmitTextStyle?: StyleProp<TextStyle>;
  item?: Item[];
  title?: string;
  onPress: (event: GestureResponderEvent, item: Item) => void;
}
