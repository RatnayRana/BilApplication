import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { settingItem } from '../../public/utility/data/setting';
import { colors } from '../../utils/color';

export interface EmployeeItem {
  icon: string;
  label?: string;
  value?: string;
  isLink?: boolean;
  arrowIcon?: string
  pressItem?: boolean
}

interface ComponentProps {
  Data: EmployeeItem[];
  textStyle?: StyleProp<ViewStyle>;
  color?: string;
  onPress?: (Item: settingItem) => void


}



const ContactCard: React.FC<ComponentProps> = ({ Data, textStyle, color, onPress }) => {


  return (
    <ScrollView style={styles.container}>
      {Data.map((item, index) => (
        <View key={index} style={styles.itemWrapper}>
          <Icon name={item.icon} size={20} color={color} style={styles.icon} />
          <View style={textStyle}>
            {item.arrowIcon ? (
              <View style={textStyle}>
                {/* <Text style={styles.label}>{item.label}</Text> */}
                <Text style={styles.value}>{item.value}</Text>
              </View>
            ) : (
              <View>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </View>
            )}

          </View>

          {item.arrowIcon && item.pressItem && (
            <TouchableOpacity onPress={() => onPress?.(item as settingItem)}>
              <Icon name={item.arrowIcon} size={20} color={color} style={styles.icon} />
            </TouchableOpacity >
          )}


        </View>
      ))}
    </ScrollView>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,

  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginRight: 16,
    fontSize: 32
    // marginTop: 2,
  },
  label: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  value: {
    justifyContent: 'flex-start',
    fontSize: 18,
    color: colors.primary

  },
  link: {
    color: '#0066cc',
    textDecorationLine: 'underline',
  },
});
