import { FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';
import GlobalUseEffect from '../../public/middleware/useEffect/universalUseEffect';
import Wrapper from '../auth';
import HomeHeader from '../../component/HomeHeader';
import { WrapperHeader } from '../../component/HomeHeader/WrapperHeader';
import { AboutStyles } from './aboutustyle';
import { object } from 'yup';
import React from 'react';
import { Item } from '../../component/interface/card.interface';
import aprrovalStyles from '../CardNavigation/style.cardnavigation';
// import { styles } from "./style"
import TextCard from '../../component/TextCard/index.text';
import ContactCard, { EmployeeItem } from './about-uscard';

const Aboutus = () => {
  const tokenData = GlobalUseEffect();

  const EmployeeDetails: EmployeeItem[] = [
    { icon: 'account', label: 'Name', value: tokenData?.name },
    { icon: 'email-outline', label: 'Email', value: tokenData?.email },
    { icon: 'cellphone', label: 'Employee Code', value: tokenData?.employee_code },
    { icon: 'braille', label: 'Employee ID', value: tokenData?.employee_id },
  ];

  return (
    <Wrapper>
      <WrapperHeader>
        <HomeHeader mainContainerStyle={AboutStyles.headercontainer}
          imageSource={require('../../assets/profileimage.jpg')}
          label={tokenData?.name}
          headerIcon='poweroff'
          headersubIcon="arrow-left"

          iconLib="AntDesign"
          profile='Profile'
          IconStyle={AboutStyles.IconStyle}
          ImagedivStyle={AboutStyles.ImagedivStyle}
          TextViewStyle={AboutStyles.TextView}
          TextStyle={AboutStyles.TextStyle}
          name={tokenData?.email}

        />
      </WrapperHeader>
      <ContactCard Data={EmployeeDetails} />

    </Wrapper>
  );
};
export default Aboutus;
