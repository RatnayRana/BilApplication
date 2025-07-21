
import HomeHeader from '../../component/HomeHeader';
import { WrapperHeader } from '../../component/HomeHeader/WrapperHeader';

import { colors } from '../../utils/color';
import Wrapper from '../auth';
import { seetingStyles } from './style';
import ContactCard from '../aboutus/about-uscard';
import { settingData, settingItem, Terms_and_Condition } from '../../public/utility/data/setting';
import React from 'react';
// import { styles } from "./style"
import { RootStackNavigatorParamsList } from '../../component/interface/routeinterface';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import EncryptedStorage from 'react-native-encrypted-storage';


const Favourite = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackNavigatorParamsList>>();
  const handleCardPress = async (item: settingItem) => {
   if (item.value === 'Logout') {
    try {
      await EncryptedStorage.removeItem('accessToken');
      console.log("User logged out successfully");
      navigation.goBack(); 
      navigation.goBack()
    } catch (error) {
      console.error("Failed to logout:", error);
    }
    return;
  }

    const Data = Terms_and_Condition
    console.log('hhygyh', item.value)
    navigation.navigate('SettingDisplayScreem', { screen: item.value, setting: Data });
  };
  return (
    <Wrapper>
      <WrapperHeader>
        <HomeHeader
          TextStyle={seetingStyles.TextStyle}
          IconStyle={seetingStyles.iconStyle}
          setting={true}
          headersubIcon="chevron-back"
          iconLib="Ionicons"
          label='Setting'
          mainContainerStyle={seetingStyles.headercontainer}
        />
      </WrapperHeader>

      <ContactCard Data={settingData} textStyle={seetingStyles.textStyle} color={colors.primary} onPress={handleCardPress} />


    </Wrapper>
  );
};
export default Favourite;
