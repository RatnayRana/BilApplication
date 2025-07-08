import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import HomeHeader from '../../component/HomeHeader';
import Card from '../../component/card';
import { HomeItem } from '../../public/utility/data/homeItem';
import { Wrapper } from './wrapper';
import { WrapperHeader } from '../../component/HomeHeader/WrapperHeader';
import { RootStackNavigatorParamsList } from '../../component/interface/routeinterface';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import GlobalUseEffect from '../../public/middleware/useEffect/universalUseEffect';
import { colors } from '../../utils/color';
import Label from '../../component/Label/index.label';
import { Dimensions } from 'react-native';
import { homeStyles } from './style';
import { CardFlatList } from '../../component/card/CardFlatList/CardList';
import { TokenAttributes, tokenMiddleware } from '../../public/middleware/token.middleware';
const { height, width } = Dimensions.get('window');

const Home = () => {
  
  const tokenData = GlobalUseEffect();
  console.log(tokenData, 'tokenData');
  

  function handleButton(screen: string) {

    navigation.navigate('HomeNavigator', {
      screen: screen
    });

  }
  const navigation =
    useNavigation<NavigationProp<RootStackNavigatorParamsList>>();


  return (
    <Wrapper>
      <WrapperHeader>
        <HomeHeader
          imageSource={require('../../assets/profileimage.jpg')}
          name={tokenData?.name}
        />
      </WrapperHeader>
      <Label
        text="Services"
        style={[
          homeStyles.text1,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            color: colors.primary,
            fontWeight: 600,
            width: '100%',
          },
        ]}
      />
      <View style={{
        backgroundColor: colors.white, justifyContent: 'center', width: width, height: height, alignItems: 'center'
      }}>
        <CardFlatList data={HomeItem} onPressItem={(item) => handleButton(item.screen)} />

      </View>
    </Wrapper>
  );
};

export default Home;
