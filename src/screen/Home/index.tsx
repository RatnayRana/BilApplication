import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import HomeHeader from '../../component/HomeHeader';
import Card from '../../component/card';
import {styles} from './style';
import {HomeItem} from '../../public/utility/data/homeItem';
import {Wrapper} from './wrapper';
import {WrapperHeader} from '../../component/HomeHeader/WrapperHeader';
import {RootStackNavigatorParamsList} from '../../component/interface/routeinterface';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RoleAndPermission} from '../../component/home/roleAndPermission';
import GlobalUseEffect from '../../public/middleware/useEffect/universalUseEffect';
import {requiredPermissions} from '../../public/utility/data/approvalPermission';
import CustomDialog from '../../component/DialogBox/dialogbox';
import {colors} from '../../utils/color';
import Label from '../../component/Label/index.label';

const Home = () => {
  const tokenData = GlobalUseEffect();
  const [openStart, setOpenStart] = useState(true);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [errorMessage, seterrorMessage] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDialog, setShowDialog] = useState(false); // New state to control dialog visibility
  const [currentItem, setCurrentItem] = useState<{
    item_name: string;
    item_id: number;
  } | null>(null);

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
  const navigation =
    useNavigation<NavigationProp<RootStackNavigatorParamsList>>();

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
      // Skip the permission check and navigate directly
      navigation.navigate('Application');
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
      <View style={{backgroundColor: colors.white, justifyContent: 'center'}}>
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
              color="#000"
              iconColor="#D32F2F"
              iconName="sticker-remove-outline"
              onClose={handleClose}
            />
          ))}
        <WrapperHeader>
          <HomeHeader
            imageSource={require('../../assets/profileimage.jpg')}
            name={tokenData?.name}
          />
        </WrapperHeader>

        <ScrollView
          style={{}}
          contentContainerStyle={styles.CardContainer}
          nestedScrollEnabled={true}>
          <Label
            text="Services"
            style={[
              styles.text1,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                color: colors.primary,
                fontWeight: 600,
                width: '100%',
              },
            ]}
          />
          {HomeItem.map((item, index) => (
            <Card
              iconLib={item.iconLib}
              CardConatinerStyle={styles.Card}
              key={index}
              iconName={item.homeIcon}
              size={30}
              name={item.item_name}
              Textstyle={styles.cardTextStyle}
              onPress={() => handleChange(item, tokenData?.employee_id)}
            />
          ))}
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Home;
