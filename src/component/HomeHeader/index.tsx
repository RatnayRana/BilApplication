import React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { imageInterface } from '../interface/image.interface';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../utils/color';
import ImageComponent from '../Image/index.image';
import EncryptedStorage from 'react-native-encrypted-storage';

import { useNavigation } from '@react-navigation/native';

const HomeHeader: React.FC<imageInterface> = ({imageSource, name}) => {
  const navigation = useNavigation();

  const clearSessionData = async () => {
    try {
      await EncryptedStorage.removeItem('accessToken');
      navigation.goBack(); // Or other relevant keys
      // Remove other session-related data as needed
    } catch (error) {
      console.error('Error clearing session data:', error);
    }
  };

  return (
    <View style={styles.headercontainer}>
        <View style={styles.Imagediv}>
            <ImageComponent imageSource={imageSource} width={50} height={50} style={styles.headerimage}/>
        </View>
        <View style={styles.TextView}>
            <Text style={styles.Text}>Welcome,</Text>
            <Text style={styles.Text}>{name}</Text>
        </View>
        <View style={styles.ButtonView}>
            {/* <IonIcon name="notifications"  size={34} color={colors.white}/> */}
            <TouchableOpacity onPress={clearSessionData}>
              <AntDesign name="logout"  size={34} color={colors.white}/>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default HomeHeader;
