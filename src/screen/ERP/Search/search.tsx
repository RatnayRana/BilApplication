/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Wrapper from '../../auth';
import { colors } from '../../../utils/color';
import NavComponent from '../../../component/NavComponent/navvomponent';
import { styles } from '../../ERP/LeaveApplicationPage/style.leaveapplicationpage';

const SearchApplication = () => {

  return (
    <Wrapper >
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
        text="ERP Search"
      />

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 23 }}>
        <Text style={{ color: colors.black }}>hy</Text>

      </View>

    </Wrapper>
  );
};

export default SearchApplication;

