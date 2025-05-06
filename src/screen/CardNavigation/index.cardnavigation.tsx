/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackNavigatorParamsList } from '../../component/interface/routeinterface';
import TextCard from '../../component/TextCard/index.text';
import { ERPApprovalOption } from '../../public/utility/data/homeItem';
import { ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { RoleAndPermission } from '../../component/home/roleAndPermission';
import { useEffect, useState } from 'react';
import NavComponent from '../../component/NavComponent/navvomponent';
import { styles } from '../ERP/LeaveApplicationPage/style.leaveapplicationpage';
import aprrovalStyles from './style.cardnavigation';
type RolePermission = {
  permission: string;
  // other properties here
};

type CardDetails = {
  item_id: number;
  item_name: string;
  iconName?: string;
  permission: string;
  iconLib?: string;
  icon: string
  screen: string;
};
type CardNavigationProps = NativeStackScreenProps<
  RootStackNavigatorParamsList,
  'CardNavigation'
>;

const CardNavigation: React.FC<CardNavigationProps> = ({ route }) => {
  const [permissions, setPermission] = useState<RolePermission[] | null>(null);
  const [approveOptions, setApproveOptions] = useState<CardDetails[]>();
  const navigation =
    useNavigation<NavigationProp<RootStackNavigatorParamsList>>();

  const { itemName } = route.params;

  const fetchRoleAndPermission = async () => {
    try {
      const result = await RoleAndPermission({
        itemName: route.params.itemName,
        username: route.params.username,
      });
      if ('permission' in result) {
        const permissionData = result.permission.map(perm => ({
          permission: perm,
        }));
        setPermission(permissionData);
      }
      return result;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {

    fetchRoleAndPermission();
  }, []);

  useEffect(() => {
    if (permissions) {
      const permissionValue = Object.values(permissions).map(
        item => item.permission,
      );

      const SelectedItem = ERPApprovalOption.filter(option =>
        permissionValue.includes(option.permission),
      );
      setApproveOptions(SelectedItem);
    }
  }, [permissions]);

  switch (itemName) {
    case 'Approved Application':
      return (
        <>
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
            text="Approval"
          />
          <ScrollView style={{ marginTop: 5, padding: 16 }}>
            <TextCard
              item={approveOptions}
              imageandTitleStyle={aprrovalStyles.imageandTitleStyle}
              CardStyle={aprrovalStyles.CardStyle}
              imagecardStyle={aprrovalStyles.imageStyle}
              titleStyle={aprrovalStyles.textStyle}
              SubmitStyle={aprrovalStyles.submitStyle}
              SubmitTextStyle={aprrovalStyles.SubmitTextStyle}
              onPress={() => {
                navigation.navigate('ApprovalNavigator', {
                  screen: 'ApprovalScreen',
                });
              }}
            />
          </ScrollView>
        </>
      );
    default:
      return null;
  }
};

export default CardNavigation;
