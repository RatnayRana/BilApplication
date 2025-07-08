import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Wrapper from '../../auth';
import { colors } from '../../../utils/color';
import NavComponent from '../../../component/NavComponent/navvomponent';
import { ERPHomeData } from '../../../public/utility/data/erpHomeData';
import { styles } from '../../ERP/LeaveApplicationPage/style.leaveapplicationpage';
import { RenderFlatList } from '../../ERP/Main/erpFlatList';
import { homeStyles } from '../../Home/style';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import { RoleAndPermission } from '../../../component/home/roleAndPermission';
import { RootStackNavigatorParamsList } from '../../../component/interface/routeinterface';
import { requiredPermissions } from '../../../public/utility/data/approvalPermission';
import { LMSHomeData } from '../../../public/utility/lms/lms-home-data';
const LMS_Screen = () => {
  const navigation = useNavigation<NavigationProp<RootStackNavigatorParamsList>>();

  const handleChange = async (
    item: {
      item_name: string;
      item_id: number;
      skipPermissionCheck: boolean;
      screen: string;
    },

  ) => {

    // ✅ Case 1: Skip permission check entirely
    if (item.skipPermissionCheck) {
      navigation.navigate(item.screen);
      return;
    }


    // ✅ Case 2: Special handling for "Leave Encashment"


  };

  return (
    <Wrapper>

      <NavComponent
        size={35}
        container1Style={styles.container1}
        headercontainerStyle={styles.headercontainer}
        subcontainerStyle={{}}
        width={24}
        backIcon={'chevron-back-sharp'}
        height={24}
        imageStyle={styles.imagev}
        textSytle={styles.text}
        text="LMS Services"
      />
      <View style={homeStyles.Main}>
        <RenderFlatList data={LMSHomeData} onPress={(item) => handleChange(item)} />
      </View>
    </Wrapper>
  );
};

export default LMS_Screen;

