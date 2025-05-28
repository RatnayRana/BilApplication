export interface Data {
    item_id: number;
    item_name: string;
    iconName: string;
    screen: string;
    icon?: string;
    skipPermissionCheck: boolean;
    backgroundColor?: string;
    iconLib: string;
}
export interface FlatListCardItem {
    data: Array<Data>
    onPress?: (item: Data) => void;
    
}