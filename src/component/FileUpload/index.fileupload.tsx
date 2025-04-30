import React from 'react';
import { View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import styles from './style.fileupload';
import ImageComponent from '../Image/index.image';
import Label from '../Label/index.label';

interface uploadInterface{
    containerStyle?:StyleProp<ViewStyle>
    uploadbuttonStyle?:StyleProp<ViewStyle>
}
const FileUpload: React.FC<uploadInterface> = ({
    containerStyle,
    uploadbuttonStyle,
}) => {
    return (
        <View style={[styles.container,containerStyle]}>
            <ImageComponent imageSource={require('../../assets/fileupload.png')} width={24} height={24} style={styles.image}/>
            <Label text="doc.pdf" style={styles.text}/>

            <TouchableOpacity style={[styles.uploadbutton,uploadbuttonStyle]}>
                <Label text="Upload" style={styles.text} />
            </TouchableOpacity>
        </View>
    );
};


export default FileUpload;
