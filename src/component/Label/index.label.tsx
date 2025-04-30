import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

interface LabelProps {
    text: string;
    style:StyleProp<TextStyle>;
}

const Label: React.FC<LabelProps> = ({ text,style }) => {
    return (
        <Text style={style}>
            {text}
        </Text>
    );
};

export default Label;
