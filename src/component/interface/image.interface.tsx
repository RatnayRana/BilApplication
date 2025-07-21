import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';

export interface imageInterface {
    iconName?: string;
    iconLib?: string;
    mainContainerStyle?: StyleProp<ViewStyle>;
    imageSource?: ImageSourcePropType;
    name?: string
    width?: number
    height?: number//
    onPress?: () => void; // Optional onPress function
    // Use ImageSourcePropType for images

}
