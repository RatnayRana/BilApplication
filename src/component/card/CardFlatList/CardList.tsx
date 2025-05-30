import { FlatList } from "react-native"
import Card from '../../../component/card';
import { CardListData, } from "../../../component/interface/FlatListInterface/flatlist"
import { homeStyles } from "../../../screen/Home/style";
export const CardFlatList = ({ data, onPressItem }: CardListData) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Card paragraph={item.Paragraph}
                iconLib={item.iconLib}
                CardConatinerStyle={homeStyles.Card}
                size={40}
                name={item.item_name}
                Textstyle={homeStyles.cardTextStyle}
                onPress={() => onPressItem(item)}
                backgroundColor={item.backgroundColor} iconName={item.homeIcon} />}
            keyExtractor={item => item.item_id.toString()}
            numColumns={2}
            columnWrapperStyle={{ gap:12}}

        />
    )
}