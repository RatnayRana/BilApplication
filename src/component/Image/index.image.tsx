import React from 'react';
import { View, Image, StyleProp, ImageStyle } from 'react-native';
import { imageInterface } from '../interface/image.interface';
import { styles } from './style.image';

interface userinterface extends imageInterface{
    style?: StyleProp<ImageStyle>;
}

const ImageComponent:React.FC<userinterface> = ({imageSource,width,height,style}) => {
    return (
        <View >
            <Image
                source={imageSource}
                style={[styles.image,style]}
                width={width}
                height={height}

            />
        </View>
    );
};


export default ImageComponent;
