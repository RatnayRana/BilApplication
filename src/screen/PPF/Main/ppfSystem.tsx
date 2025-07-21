import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Wrapper from '../../auth';
import { colors } from '../../../utils/color';
import NavComponent from '../../../component/NavComponent/navvomponent';
import { styles } from '../../ERP/LeaveApplicationPage/style.leaveapplicationpage';
import TextCompoment from '../../../component/TextComponent/index.text';
const PPF_Screen = () => {


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
        text="PPF System"
      />

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextCompoment text='Coming Up' style={{ color: colors.primary, fontSize: 20, textAlign: 'center', marginTop: 20 }} />
      </View>

    </Wrapper>
  );
};

export default PPF_Screen;

