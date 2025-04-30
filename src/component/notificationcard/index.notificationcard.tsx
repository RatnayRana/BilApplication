import React from 'react';
import {
  View,
  Text,
  ViewStyle,
  StyleProp,
  TextStyle,
  ImageStyle,
} from 'react-native';
import {imageInterface} from '../interface/image.interface';
import ImageComponent from '../Image/index.image';

interface NotificationCardProps extends imageInterface {
  name?: string;
  Date?: string;
  place?: string;
  message: string;
  viewStyle?: StyleProp<ViewStyle>;
  TextStyle?: StyleProp<TextStyle>;
  messageStyle?: StyleProp<TextStyle>;
  ImageStyle?: StyleProp<ImageStyle>;
  SecondView?: StyleProp<ViewStyle>;
  MessageView?: StyleProp<ViewStyle>;
  CardStyle?: StyleProp<ViewStyle>;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  name,
  ImageStyle,
  SecondView,
  message,
  place,
  viewStyle,
  TextStyle,
  imageSource,
  Date,
  MessageView,
  messageStyle,
  CardStyle,
}) => {
  return (
    <View style={CardStyle}>
      <View style={viewStyle}>
        <ImageComponent
          imageSource={imageSource}
          width={50}
          height={50}
          style={ImageStyle}
        />
        <View style={SecondView}>
          <Text style={TextStyle}>{name}</Text>
          <Text style={TextStyle}>{place}</Text>
        </View>
        <Text style={TextStyle}>{Date}</Text>
      </View>

      <View style={MessageView}>
        <Text style={messageStyle}>{message}</Text>
      </View>
    </View>
  );
};

export default NotificationCard;
