import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { colors } from '../../utils/color';
import Wrapper from '../auth';
import NavComponent from '../../component/NavComponent/navvomponent';
import { styles } from '../ERP/LeaveApplicationPage/style.leaveapplicationpage';
import { useState } from 'react';
import TabButton, { TabButtonType } from '../../component/tabs/tab-button';
import TextCompoment from '../../component/TextComponent/index.text';
// import { styles } from "./style"
export enum CustomTab {
  Tab1 = 0,
  Tab2 = 1
}
const Calculator = () => {
  // const [selecctedTab, setSelectedTab] = useState<CustomTab>(CustomTab.Tab2);
  // const buttons: TabButtonType[] = [{ title: "Tab1" }, { title: "Tab2" }];
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
        text="Calculator"
      />
      {/* <TabButton buttons={buttons} selectedTab={selecctedTab} setSelectedTab={setSelectedTab} /> */}

      <View>
        {/* {selecctedTab=== CustomTab.Tab1 ? (
          <Text style={{ color: colors.primary, fontSize: 20, textAlign: 'center', marginTop: 20 }}>
            This is Tab 1
          </Text>
        ):( <Text style={{ color: colors.primary, fontSize: 20, textAlign: 'center', marginTop: 20 }}>
            This is Tab 2
          </Text>)} */}
          <TextCompoment text='Coming UP'/>
      </View>
    </Wrapper>
  );
};
export default Calculator;
