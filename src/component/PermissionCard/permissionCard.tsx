import React from 'react';
import { View, TouchableOpacity, ViewStyle, StyleProp, TextStyle, ImageStyle } from 'react-native';
import TextCompoment from '../TextComponent/index.text';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../utils/color';
import { iconLibraries } from '../Icon/icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface CardProps {
    item_name: string;
    iconName: string;
    iconLib: string;
    CardConatinerStyle?: StyleProp<ViewStyle>;
   
    imageandTitleStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    CardStyle?: StyleProp<ViewStyle>;
    imagecardStyle?: StyleProp<ImageStyle>;
    imagecomponentStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    SubmitStyle?: StyleProp<ViewStyle>;
    SubmitTextStyle?: StyleProp<TextStyle>;
    name?: string;
    size: number;
    onPress: () => void;
}
const PermissionCard: React.FC<CardProps> = ({
    imageandTitleStyle,
    item_name,
    iconName,
    titleStyle,
    size,
    iconLib,
    name,
    onPress,
    CardConatinerStyle,
  
}) => {
    const IconComponent = iconLibraries[iconLib] || MaterialCommunityIcons;


    // fallback


    return (
        <TouchableOpacity

            onPress={onPress}
        >
            <View style={imageandTitleStyle}>
                <IconComponent name={iconName} size={40} color={colors.primary} />
                <TextCompoment
                    text={item_name}
                    style={[titleStyle, { color: colors.primary, fontWeight: '600' }]}
                />

                <View>
                    <Icon name="chevron-forward" size={24} color={colors.primary} />
                </View>

            </View>
            <View
                style={{
                    borderBottomWidth: 1,
                    borderColor: '#ccc',
                    marginVertical: 5,
                }}
            />
        </TouchableOpacity>
    );


};

export default PermissionCard;