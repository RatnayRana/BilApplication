export interface Data {
    item_id: number;
    item_name: string;
    iconName: string;
    screen: string;
    icon?: string;
    homeIcon?: string
    skipPermissionCheck: boolean;
    backgroundColor?: string;
    iconLib: string;
    Paragraph?: string
}
export interface FlatListCardItem {
    data: Array<Data>
    onPress?: (item: Data) => void;

}
export interface HomeItemInterface {
    item_id: number;
    item_name: string;
    homeIcon: string;
    iconLib: string;
    screen: string;
    skipPermissionCheck: boolean;
    backgroundColor: string;
    Paragraph: string;
}

export interface CardListData {
    data: Array<HomeItemInterface>
    onPressItem: (item: HomeItemInterface) => void;
}