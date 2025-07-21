/* eslint-disable quotes */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { RootStackNavigatorParamsList } from '../../component/interface/routeinterface';
import NavComponent from '../../component/NavComponent/navvomponent';
import Wrapper from '../auth';
import { styles } from '../ERP/LeaveApplicationPage/style.leaveapplicationpage';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


type SeetingScreen = NativeStackScreenProps<
    RootStackNavigatorParamsList,
    'SettingDisplayScreem'
>;



const SettingDisplayScreem: React.FC<SeetingScreen> = ({ route }) => {
    // SettingDisplayScreem
    const { screen, setting } = route.params;
    console.log('ggg', setting[0].heading)


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
                text={screen}
            />
            <ScrollView style={settingDisplaystyles.container}>
               {
                setting.map((item,index)=>(
                <View key={index}>
                         <Text style={settingDisplaystyles.title}>{item.heading}</Text>
                <Text style={settingDisplaystyles.body}>{item.subHeading}</Text>
                <Text style={settingDisplaystyles.body}>{item.content}</Text>
                </View>
                ))
               }
            </ScrollView>

        </Wrapper>
    );
};

export default SettingDisplayScreem;

const settingDisplaystyles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16
    },
    body: {
        fontSize: 14,
        lineHeight: 22,
        color: '#333'
    }
});