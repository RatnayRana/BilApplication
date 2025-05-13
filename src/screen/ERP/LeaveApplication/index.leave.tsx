import React from 'react';
import {View, ScrollView} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import TextCard from '../../../component/TextCard/index.text';

import {leaveItem} from '../../../public/utility/data/leaveItem';
import {RootStackNavigatorParamsList} from '../../../component/interface/routeinterface';
import NavComponent from '../../../component/NavComponent/navvomponent';
import {Item} from '../../../component/interface/card.interface';
import applicationStyles from './style.leave';

const LeaveApplication = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackNavigatorParamsList>>();

  const handleCardPress = (item: Item) => {
    navigation.navigate('NestedNavigatorName', {screen: item.screen});
  };
  return (
    <View style={applicationStyles.container}>
      <NavComponent
        size={35}
        container1Style={applicationStyles.container1}
        headercontainerStyle={applicationStyles.headercontainer}
        subcontainerStyle={{}}
        width={24}
        backIcon={'chevron-back-sharp'}
        height={24}
        imageStyle={applicationStyles.imagev}
        textSytle={applicationStyles.text}
        text="Application"
      />

      <ScrollView style={applicationStyles.scrollview}>
        <TextCard
          imagecardStyle={applicationStyles.imageStyle}
          imageandTitleStyle={applicationStyles.imageandTitleStyle}
          titleStyle={applicationStyles.textStyle}
          SubmitStyle={applicationStyles.submitStyle}
          SubmitTextStyle={applicationStyles.SubmitTextStyle}
          onPress={(item) => {
            handleCardPress(item);
          }}
          item={leaveItem}
        />
      </ScrollView>
    </View>
  );
};

export default LeaveApplication;
