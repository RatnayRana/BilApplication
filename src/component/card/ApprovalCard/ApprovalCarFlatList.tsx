import { FlatList } from "react-native"

import ApprovalCard from "../../../ImportantComponent/ApprovalCard";
import leaveApprovalStyles from "../../../screen/Approval/ERP/LeaveApproval/style";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";



interface CardListData<T> {
    data: T[],
    onPress: (item: T) => void
    // getter function to display the name form different component÷
    getName: (item: T) => string;
    getEmployeeNumber: (item: T) => string;
    getBranch: (item: T) => string;
    getDuration: (item: T) => string;
    getKey: (item: T) => string;
    getAmount?:(item:T)=>string
    getStatus?: (item: T) => string;
}
export const ApprovalCardFlatList = <T,>({ data, onPress, getName,
    getEmployeeNumber,
    getBranch,
    getDuration,
    getStatus,
    getKey, }: CardListData<T>) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <ApprovalCard
                onPress={() => onPress(item)}
                cardContainer={leaveApprovalStyles.cardContainer}
                infoContainer={leaveApprovalStyles.infoContainer}
                name={getName(item)}
                EmployeeID={getEmployeeNumber(item)}
                Branch={getBranch(item)}
                status_name={getStatus?.(item)}
                nameStyle={leaveApprovalStyles.name}
                details={leaveApprovalStyles.details}
                leaveContainer={leaveApprovalStyles.leaveContainer}
                leaveType={leaveApprovalStyles.leaveType}
                durationStyle={leaveApprovalStyles.durationStyle}
                actionButton={leaveApprovalStyles.actionButton}
                imageViewStyle={leaveApprovalStyles.ImageStyle}
                statusStyle={leaveApprovalStyles.statusStyle}
                Duration={getDuration(item)}
                iconSize={35}
                iconname='edit'
            />}
            keyExtractor={item => getKey(item)}
            numColumns={1}

        />
    )
}