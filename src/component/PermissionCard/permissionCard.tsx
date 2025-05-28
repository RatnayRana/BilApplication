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
    backgroundColor?: string

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
    onPress?: () => void;
}
const PermissionCard: React.FC<CardProps> = ({
    imageandTitleStyle,
    item_name,
    iconName,
    titleStyle,
    iconLib,
    onPress,
    CardConatinerStyle,
    backgroundColor

}) => {
    const IconComponent = iconLibraries[iconLib] || MaterialCommunityIcons;

    return (
        <TouchableOpacity onPress={onPress} style={[CardConatinerStyle, { backgroundColor: backgroundColor }]}>
            <View style={imageandTitleStyle}>
                <IconComponent name={iconName} size={40} color={colors.primary} />
                <TextCompoment
                    text={item_name}
                    style={[titleStyle, { color: colors.primary, fontWeight: '600' }]}
                />
            </View>
        </TouchableOpacity>
    );
};

export default PermissionCard;