/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Wrapper from '../../auth';
import NavComponent from '../../../component/NavComponent/navvomponent';
import { styles } from '../../ERP/LeaveApplicationPage/style.leaveapplicationpage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackNavigatorParamsList } from '../../../component/interface/routeinterface';
import { ERPHomeData } from '../../../public/utility/data/erpHomeData';
import { RoleAndPermission } from '../../../component/home/roleAndPermission';
import { requiredPermissions } from '../../../public/utility/data/approvalPermission';
import GlobalUseEffect from '../../../public/middleware/useEffect/universalUseEffect';
import CustomDialog from '../../../component/DialogBox/dialogbox';
import { RenderFlatList } from './erpFlatList';
import {  View } from 'react-native';

import { homeStyles } from '../../Home/style';


const ERPSystem = () => {
  const tokenData = GlobalUseEffect();
  const [openStart, setOpenStart] = useState(true);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [errorMessage, seterrorMessage] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDialog, setShowDialog] = useState(false); // New state to control dialog visibility
  const [currentItem, setCurrentItem] = useState<{
    item_name: string;
    item_id: number;
  } | null>(null)
  const navigation = useNavigation<NavigationProp<RootStackNavigatorParamsList>>();

  function handleClose() {
    setOpenStart(!openStart);
    setShowDialog(false);
  }

  function handleSuccess() {

    handleClose();
    if (currentItem) {
      navigation.navigate('CardNavigation', {
        itemName: currentItem.item_name,
        username: tokenData?.employee_id,
      });
    }
  }

  const handleChange = async (

    item: {
      item_name: string;
      item_id: number;
      skipPermissionCheck: boolean;
      screen: string;
    },
    username: string | undefined,
  ) => {
    setCurrentItem(item);
    if (item.skipPermissionCheck) {
      navigation.navigate(item.screen);
      return;
    }
    let result;
    result = await RoleAndPermission({
      itemName: item.item_name,
      username,
    });
    setShowDialog(true);



    if ('permission' in result) {
      const Authenticated = requiredPermissions.some(permission =>
        result.permission.includes(permission),
      );
      setIsAuthenticated(Authenticated);
      setResultMessage(result.message);
    } else {
      seterrorMessage(result.errorMessage);
    }
  };

  return (
    <Wrapper>
      {showDialog &&
        (isAuthenticated ? (
          <CustomDialog
            message={JSON.stringify(resultMessage)}
            visible={showDialog}
            color="#0AA06E"
            iconColor="#0AA06E"
            iconName="sticker-check-outline"
            onClose={handleSuccess}
          />
        ) : (
          <CustomDialog
            visible={showDialog} // ✅ Add this
            message={JSON.stringify(errorMessage)}
            color="#D32F2F"
            iconColor="#D32F2F"
            iconName="sticker-remove-outline"
            onClose={handleClose}
          />
        ))}
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
        text="ERP Services"
      />
      <View style={homeStyles.Main}>
        <RenderFlatList data={ERPHomeData} onPress={(item) => handleChange(item, tokenData?.employee_id)} />
      </View>
    </Wrapper>
  );
};

export default ERPSystem;

