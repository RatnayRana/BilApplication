import { View, Text, Pressable, LayoutChangeEvent } from 'react-native'
import React, { useState } from 'react'
import TextCompoment from '../TextComponent/index.text';
export type TabButtonType = {
    title: string;
};
type TabButtonProps = {
    buttons: TabButtonType[];
    selectedTab: number;
    setSelectedTab: (index: number) => void;
};
const TabButton = ({ buttons, selectedTab, setSelectedTab }: TabButtonProps) => {
    const [dimensions, setDimensions] = useState({ width: 100, height: 20 });
    const buttonWidth = dimensions.width / buttons.length;

    const onTabbarLayout = (event: LayoutChangeEvent) => {
        setDimensions({
            height: event.nativeEvent.layout.height,
            width: event.nativeEvent.layout.width
        })
    }
    const handlePress = (index: number) => {
        setSelectedTab(index);
    }


    return (
        <View style={{ backgroundColor: '#c333cc', borderRadius: 20, justifyContent: 'center', width: '98%', marginRight: 10, marginLeft: 5 }}>
            <View style={{ position: 'absolute', backgroundColor: '#fff', borderRadius: 15, marginHorizontal: 5, height: dimensions.height - 10, width: buttonWidth - 10, left: (selectedTab * buttonWidth) + 5, }} />
            <View onLayout={onTabbarLayout} style={{ flexDirection: 'row' }}>
                {buttons.map((button, index) => {
                    const color = selectedTab === index ? '#c333cc' : '#fff';


                    // '#c333cc' : '#fff';
                    return (
                        <Pressable key={index}
                            style={{ flex: 1, paddingVertical: 20 }} onPress={() => handlePress(index)}>
                            <TextCompoment text={button.title} style={{ color: color, alignSelf: 'center', fontWeight: '600', fontSize: 14 }} />

                        </Pressable>
                    )

                })}
            </View>

        </View>
    )
}

export default TabButton