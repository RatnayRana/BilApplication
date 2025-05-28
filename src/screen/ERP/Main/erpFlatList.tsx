import { FlatList } from "react-native"
import PermissionCard from "../../../component/PermissionCard/permissionCard"
import { erpServiceStyles } from "./style"
import { FlatListCardItem } from "../../../component/interface/FlatListInterface/flatlist"
export const RenderFlatList = ({ data, onPress }: FlatListCardItem) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <PermissionCard item_name={item.item_name}
                iconName={item.iconName} iconLib={item.iconLib} size={0} backgroundColor={item.backgroundColor}
                onPress={() => onPress?.(item)} imageandTitleStyle={erpServiceStyles.imageandTitleStyle}
                CardConatinerStyle={erpServiceStyles.CardConatinerStyle}
            />}
            keyExtractor={item => item.item_id.toString()}
            numColumns={2} />
    )
}