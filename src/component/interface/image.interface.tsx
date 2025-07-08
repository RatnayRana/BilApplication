import { ImageSourcePropType } from 'react-native';

export interface imageInterface {
    imageSource?: ImageSourcePropType;
    name ?: string
    width ?: number
    height?:number//
    onPress?: () => void; // Optional onPress function
    // Use ImageSourcePropType for images

}
