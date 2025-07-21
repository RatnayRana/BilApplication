import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from '../utils/color';

interface ApprovalCardPropsAttributes {
  pol_policy_number?: string;
  lob_name?: string;

  cardContainer?: StyleProp<ViewStyle>;
  lobTextStyle?: StyleProp<TextStyle>;
  policyNumberTextStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const SeachLobNameCard: React.FC<ApprovalCardPropsAttributes> = ({
  cardContainer,
  lob_name,
  pol_policy_number,
  lobTextStyle,
  policyNumberTextStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: '#fff',
          borderRadius: 12,
          padding: 16,
          marginVertical: 8,
          marginHorizontal: 16,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        },
        cardContainer,
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={[{ fontSize: 16, fontWeight: '600', color: colors.primary }, lobTextStyle]}>
            {lob_name}
          </Text>
          <Text style={[{ fontSize: 14, color: '#777' }, policyNumberTextStyle]}>
            {pol_policy_number}
          </Text>
        </View>
        <FontAwesome name="chevron-down" size={18} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

export default SeachLobNameCard;
