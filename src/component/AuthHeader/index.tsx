import React from 'react';
import {
  ImageStyle,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import ImageComponent from '../Image/index.image';

interface AuthHeaderProps {
  title: string;
  content: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  headerImage?: StyleProp<ImageStyle>;
  contentStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
}

const AuthHeader = ({
  title,
  contentStyle,
  content,
  style,
  headerImage,
  titleStyle,
  viewStyle,
}: AuthHeaderProps) => {
  return (
    <View style={style}>
      <ImageComponent
        imageSource={require('../../assets/billogo.png')}
        width={200}
        height={200}
        style={[headerImage,{alignItems:'center'}]}
      />

      {/* Title Positioned Differently */}
      <View style={viewStyle}>
        <Text style={[titleStyle,{textAlign:'center'}]}>{title}</Text>

        <Text style={[contentStyle,{textAlign: 'center'}]}>{content}</Text>
      </View>
    </View>
  );
};

export default AuthHeader;
