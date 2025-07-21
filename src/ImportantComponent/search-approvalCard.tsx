import { View, Text, ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";
import { colors } from "../utils/color";

interface ApprovaSearchProps {
    LabelPartyname?: string
    CidLabel?: string
    Pol_policy_numberlabel?: string
    Lob_name_label?: string
    Product_namelabel?: string
    Coverlabel?: string
    Total_premiumlabel?: string
    Start_datelabel?: string
    Expiry_datelabel?: string
    Thram_nolabek?: string
    Plot_nolabel?: string
    House_nolabel?: string
    Exact_locationlabel?: string
    Exact_location?: string
    vehicle_makelabel?: string
    VechileNOlabel?: string
    getVehicleNo?: string
    Enginenolabel?: string
    getEngineNo?: string
    chasis_nolabel?: string
    chasis_number?: string
    Contactlabel?: string

    //   value
    PartyName?: string
    getCid_no?: string
    getlob_name?: string
    getProduct_nam?: string
    getCoverNam?: string
    getTotalPremium?: string
    getStartDat?: string
    getEndDat?: string
    getThram_no?: string
    getPlot_no?: string
    getHouse_no?: string
    getvehicle_mak?: string

    cardContainer?: StyleProp<ViewStyle>;
    actionButton?: StyleProp<ViewStyle>;
    infoContainer?: StyleProp<ViewStyle>;
    leaveContainer?: StyleProp<ViewStyle>;
    nameStyle?: StyleProp<TextStyle>;
    details?: StyleProp<TextStyle>;
    leaveType?: StyleProp<TextStyle>;
    durationStyle?: StyleProp<TextStyle>;
    statusStyle?: StyleProp<TextStyle>;
    imageViewStyle?: StyleProp<ImageStyle>;
    iconname: string;
    iconSize: number;
    Cid_noPartyName?: string
    pol_policy_numberPartyName?: string
    lob_namePartyName?: string
    Product_namPartyName?: string
    CoverNamPartyName?: string
    TotalPremiumPartyName?: string
    StartDatPartyName?: string
    EndDatPartyName?: string
    Thram_noPartyName?: string
    Plot_noPartyName?: string
    House_noPartyName?: string
    vehicle_makPartyName?: string
    Exact_locationPartyName?: string // Added missing prop for exact location

    //claim

    claimNumber?: string
    claimNumberlabel?: string
    claimStatuslabel?: string,
    claimstatus?: string
    vechilemodel?: string,
    vechilemodelLabel?: string,


}

// Helper component to render a row only if both label and value exist
const DataRow: React.FC<{
    label?: string | boolean;
    value?: string;
    labelStyle?: StyleProp<TextStyle>;
    valueStyle?: StyleProp<TextStyle>;
}> = ({ label, value, labelStyle, valueStyle }) => {

    if (value === null || value === undefined || value === " " || value === '0' || value.trim() === '' || value.length > 25 || value === 'true' || value === 'false') {
        return null;
    }

    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20%' }}>
            <Text style={[{ color: colors.primary }, labelStyle]}>{label}</Text>
            <Text style={valueStyle}>{value}</Text>
        </View>
    );
};

const SearchDataCard: React.FC<ApprovaSearchProps> = ({
    cardContainer,
    infoContainer,
    statusStyle,
    LabelPartyname,
    CidLabel,
    Pol_policy_numberlabel,
    Lob_name_label,
    Product_namelabel,
    Coverlabel,
    Total_premiumlabel,
    Start_datelabel,
    Expiry_datelabel,
    Thram_nolabek,
    Plot_nolabel,
    House_nolabel,
    Exact_locationlabel,
    Exact_location,
    vehicle_makelabel,
    VechileNOlabel,
    getVehicleNo,
    Enginenolabel,
    getEngineNo,
    chasis_nolabel,
    chasis_number,
    Contactlabel,

    PartyName,
    Cid_noPartyName,
    pol_policy_numberPartyName,
    lob_namePartyName,
    Product_namPartyName,
    CoverNamPartyName,
    TotalPremiumPartyName,
    StartDatPartyName,
    EndDatPartyName,
    Thram_noPartyName,
    Plot_noPartyName,
    House_noPartyName,
    vehicle_makPartyName,

    claimNumber,
    claimNumberlabel,
    claimStatuslabel,
    claimstatus,

    vechilemodel,
    vechilemodelLabel
}) => {
    return (
        <View style={cardContainer}>
            <View style={{ marginLeft: 12 }}>

                <DataRow
                    label={LabelPartyname}
                    value={PartyName}
                // labelStyle={{}} 
                // valueStyle={statusStyle} 
                />

                <DataRow
                    label={CidLabel}
                    value={Cid_noPartyName}
                // labelStyle={{}} 
                // valueStyle={statusStyle} 
                />

                <DataRow
                    label={Pol_policy_numberlabel}
                    value={pol_policy_numberPartyName}
                // labelStyle={{}} 
                // valueStyle={statusStyle} 
                />

                <DataRow
                    label={Lob_name_label}
                    value={lob_namePartyName}
                // labelStyle={{}} 
                // valueStyle={statusStyle} 
                />

                <DataRow
                    label={Product_namelabel}
                    value={Product_namPartyName}
                // labelStyle={{}} 
                // valueStyle={statusStyle} 
                />

                <DataRow
                    label={Coverlabel}
                    value={CoverNamPartyName}
                // labelStyle={{}} 
                // valueStyle={statusStyle} 
                />

                <DataRow
                    label={Total_premiumlabel}
                    value={TotalPremiumPartyName}
                // labelStyle={{}} 
                // valueStyle={statusStyle} 
                />

                <DataRow
                    label={Start_datelabel}
                    value={StartDatPartyName}
                // labelStyle={{}} 
                // valueStyle={statusStyle} 
                />

                <DataRow
                    label={Expiry_datelabel}
                    value={EndDatPartyName}
                // labelStyle={{}} 
                // valueStyle={statusStyle} 
                />

                <DataRow
                    label={Thram_nolabek}
                    value={Thram_noPartyName}
                // labelStyle={{}} 
                // valueStyle={statusStyle} 
                />

                <DataRow
                    label={Plot_nolabel}
                    value={Plot_noPartyName}
                // labelStyle={{}} 
                // valueStyle={statusStyle} 
                />

                <DataRow
                    label={House_nolabel}
                    value={House_noPartyName}
                // labelStyle={{}} 
                // valueStyle={statusStyle} 
                />

                <DataRow
                    label={Exact_locationlabel}
                    value={Exact_location} // This seems wrong - you might want to add a proper exact location value
                // labelStyle={{}} 
                // valueStyle={statusStyle} 
                />

                <DataRow
                    label={vehicle_makelabel}
                    value={vehicle_makPartyName}
                // labelStyle={{}} 
                // valueStyle={statusStyle} 
                />
                <DataRow
                    label={claimNumberlabel}
                    value={claimNumber}
                // labelStyle={{}} 
                // valueStyle={statusStyle} 
                />
                <DataRow
                    label={claimStatuslabel}
                    value={claimstatus}
                // labelStyle={{}} 
                // valueStyle={statusStyle} 
                />
                <DataRow
                    label={vechilemodelLabel}
                    value={vechilemodel
                    }
                // labelStyle={{}} 
                // valueStyle={statusStyle} 
                />
                <DataRow
                    label={chasis_nolabel}
                    value={chasis_number}
                />
                <DataRow
                    label={Enginenolabel}
                    value={getEngineNo}
                />


                <DataRow
                    label={VechileNOlabel}
                    value={getVehicleNo}
                />
            </View>
        </View>
    );
};

export default SearchDataCard;