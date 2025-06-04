import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../utils/color';

interface ApprovalCardProps {
  name?: string;
  EmployeeID?: string;
  LeaveType?: string;
  Duration?: number|string;
  Branch?: string;
  cardContainer?: StyleProp<ViewStyle>;
  actionButton?: StyleProp<ViewStyle>;
  infoContainer?: StyleProp<ViewStyle>;
  leaveContainer?: StyleProp<ViewStyle>;
  nameStyle?: StyleProp<TextStyle>;
  details?: StyleProp<TextStyle>;
  leaveType?: StyleProp<TextStyle>;
  durationStyle?: StyleProp<TextStyle>;
  imageViewStyle?: StyleProp<ImageStyle>;
  onPress?: () => void;
  iconname: string;
  iconSize: number;
}

const ApprovalCard: React.FC<ApprovalCardProps> = ({
  cardContainer,
  infoContainer,
  onPress,
  name,
  EmployeeID,
  LeaveType,
  Branch,
  Duration,
  iconname,
  iconSize,
  nameStyle,
  leaveContainer,
  details,
  leaveType,
  durationStyle,
  actionButton,
}) => {
  return (
    <View style={cardContainer}>
      <View>
        <View style={infoContainer}>
          <Text style={nameStyle}>{name}</Text>
          <Text style={details}>ID: {EmployeeID}</Text>
          <Text style={details}>Branch: {Branch}</Text>
        </View>

        <View style={leaveContainer}>
          <Text style={leaveType}>{LeaveType}</Text>
          <Text style={durationStyle}>{Duration} </Text>
        </View>
      </View>

      <TouchableOpacity onPress={onPress} style={actionButton}>
        <Feather name={iconname} size={iconSize} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default ApprovalCard;
