import React from 'react';
import { View, Text, TouchableOpacity, ImageSourcePropType, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { styles } from './style';

import { colors } from '../../utils/color';
import ImageComponent from '../Image/index.image';

import { iconLibraries } from '../Icon/icon';
import { useNavigation } from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export interface HeaderAddtributres {
  label?: string
  profile?: string
  iconName?: string;
  iconLib?: keyof typeof iconLibraries;
  mainContainerStyle?: StyleProp<ViewStyle>;
  imageSource?: ImageSourcePropType;
  name?: string
  width?: number
  height?: number//
  onPress?: () => void; // Optional onPress function
  // Use ImageSourcePropType for images
  TextViewStyle?: StyleProp<ViewStyle>;
  ImagedivStyle?: StyleProp<ViewStyle>;
  TextStyle?: StyleProp<TextStyle>;
  headerIcon?: string
  headersubIcon?: string
  IconStyle?: StyleProp<ViewStyle>;
  setting?: boolean;
  headerIconSublib?: string
}

const HomeHeader: React.FC<HeaderAddtributres> = ({ imageSource, name, mainContainerStyle, iconName,
  iconLib, onPress, label, headerIconSublib, TextViewStyle, ImagedivStyle, TextStyle, headerIcon, headersubIcon, profile, IconStyle, setting }) => {

  const IconComponent = iconLibraries[iconLib!] || iconLibraries.AntDesign;


  console.log(IconComponent)

  const navigation = useNavigation();
  const clearSessionData = async () => {
    try {
      await EncryptedStorage.removeItem('accessToken');
      navigation.goBack(); // Or other relevant keys
      // Remove other session-related data as needed
    } catch (error) {
      throw new Error('Failed to clear session data');
    }
  };
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (

    <View style={mainContainerStyle}>
      <View style={IconStyle}>
        <TouchableOpacity onPress={handleBackPress}>
          {headersubIcon && <FontAwesome5
            name='arrow-left' size={30} color={colors.white} />}
        </TouchableOpacity>
        <Text style={{ color: colors.white, fontSize: 20 }}>{profile}</Text>
        <TouchableOpacity onPress={clearSessionData}>
          {headerIcon && <IconComponent name={headerIcon} size={40} color={colors.white} />}
          {setting && (
            <Text style={TextStyle}>{label}</Text>

          )}

        </TouchableOpacity>
        {/*                              ^^^^^^^^^^^ Fixed typo */}
      </View>
      <View style={ImagedivStyle}>
        <ImageComponent imageSource={imageSource} width={50} height={50} style={styles.headerimage} />
      </View>
      <View style={TextViewStyle}>
        {!setting && (
          <View>
            <Text style={TextStyle}>{label}</Text>
            <Text style={TextStyle}>{name}</Text>
          </View>
        )}

      </View>
      <View style={styles.ButtonView}>
        {/* <IonIcon name="notifications"  size={34} color={colors.white}/> */}
        {/* <TouchableOpacity onPress={clearSessionData}> */}
        <TouchableOpacity onPress={onPress}  >
          <IconComponent name={iconName} size={40} color={colors.white} />

          {/* <AntDesign name="logout" size={34} color={colors.white} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
