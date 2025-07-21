import { FlatList } from "react-native";
import SearchDataCard from "../../ImportantComponent/search-approvalCard";
import leaveApprovalStyles from "../../screen/Approval/ERP/LeaveApproval/style";

interface CardListData<T> {
  data: T[];

  // Getter functions for labels
  getLabelPartyname?: (item: T) => string;
  getCidLabel?: (item: T) => string;
  getLob_name_label?: (item: T) => string;
  getProduct_namelabel?: (item: T) => string;
  getCoverlabel?: (item: T) => string;
  getTotal_premiumlabel?: (item: T) => string;
  getStart_datelabel?: (item: T) => string;
  getExpiry_datelabel?: (item: T) => string;
  getThram_nolabek?: (item: T) => string;
  getPlot_nolabel?: (item: T) => string;
  getHouse_nolabel?: (item: T) => string;
  getExact_locationlabel?: (item: T) => string;
  getvehicle_makelabel?: (item: T) => string;
  getVechileNOlabel?: (item: T) => string;
  geEnginenolabel?: (item: T) => string;
  chasis_nolabel?: (item: T) => string;
  getContactlabel?: (item: T) => string;

  // Getter functions for values
  getPartyName: (item: T) => string;
  getCid_no: (item: T) => string;
  getlob_name?: (item: T) => string;
  getProduct_name?: (item: T) => string;
  getCoverName?: (item: T) => string;
  getTotalPremium?: (item: T) => string;
  getStartDate?: (item: T) => string;
  getEndDate?: (item: T) => string;
  getThram_no?: (item: T) => string;
  getPlot_no?: (item: T) => string;
  getHouse_no?: (item: T) => string;
  getExact_location?: (item: T) => string;
  getvehicle_make?: (item: T) => string;
  getVehicleNo?: (item: T) => string;
  getEngineNo?: (item: T) => string;
  getChassisNo?: (item: T) => string;
  getContactNo?: (item: T) => string;

  // Key
  getKey: (item: T) => string;

  //claom
  getVechilemodel?:(item: T) => string;
  getVechilemodelLabel?:(item: T) => string;
  getClaimNumber?:(item: T) => string;

  getClaimNumberLabel?:(item: T) => string;

  getClaimstatus?:(item: T) => string;

  getClaimstatusLabel?:(item: T) => string;

}

export const SearchCardFlatList = <T,>({
  data,
  getLabelPartyname,
  getPartyName,
  getCidLabel,
  getCid_no,

  getLob_name_label,
  getlob_name,
  getProduct_namelabel,
  getProduct_name,
  getCoverlabel,
  getCoverName,
  getTotal_premiumlabel,
  getTotalPremium,
  getStart_datelabel,
  getStartDate,
  getExpiry_datelabel,
  getEndDate,
  getThram_nolabek,
  getThram_no,
  getPlot_nolabel,
  getPlot_no,
  getHouse_nolabel,
  getHouse_no,
  getExact_locationlabel,
  getExact_location,
  getvehicle_makelabel,
  getvehicle_make,
  getVechileNOlabel,
  getVehicleNo,
  geEnginenolabel,
  getEngineNo,
  chasis_nolabel,
  getChassisNo,
  getContactlabel,
  getContactNo,
  getKey,

  //claim
getClaimNumberLabel,
  getClaimNumber,
  getClaimstatus,
  getClaimstatusLabel,
  getVechilemodel,
    getVechilemodelLabel
}: CardListData<T>) => {
  return (
    
    <FlatList
      data={data}
      
      renderItem={({ item }) => (
        <SearchDataCard
        
          // Labels
          LabelPartyname={getLabelPartyname?.(item)}
          CidLabel={getCidLabel?.(item)}
          Lob_name_label={getLob_name_label?.(item)}
          Product_namelabel={getProduct_namelabel?.(item)}
          Coverlabel={getCoverlabel?.(item)}
          Total_premiumlabel={getTotal_premiumlabel?.(item)}
          Start_datelabel={getStart_datelabel?.(item)}
          Expiry_datelabel={getExpiry_datelabel?.(item)}
          Thram_nolabek={getThram_nolabek?.(item)}
          Plot_nolabel={getPlot_nolabel?.(item)}
          House_nolabel={getHouse_nolabel?.(item)}
          Exact_locationlabel={getExact_locationlabel?.(item)}
          Exact_location={getExact_location?.(item)}
          vehicle_makelabel={getvehicle_makelabel?.(item)}
          VechileNOlabel={getVechileNOlabel?.(item)}
           getVehicleNo={getVehicleNo?.(item)}
          Enginenolabel={geEnginenolabel?.(item)}
           getEngineNo={getEngineNo?.(item)}
          chasis_nolabel={chasis_nolabel?.(item)}
          Contactlabel={getContactlabel?.(item)}
          chasis_number={getChassisNo?.(item)}
          //claim
          claimNumber={getClaimNumber?.(item)}
          claimStatuslabel={getClaimstatusLabel?.(item)}
          claimNumberlabel={getClaimNumberLabel?.(item)}
          claimstatus={getClaimstatus?.(item)}
          vechilemodel = {getVechilemodel?.(item)}
          vechilemodelLabel={getVechilemodelLabel?.(item)}

          // claimvalue
          // Values
          PartyName={getPartyName(item)}
          Cid_noPartyName={getCid_no(item)}
          lob_namePartyName={getlob_name?.(item)}
          Product_namPartyName={getProduct_name?.(item)}
          CoverNamPartyName={getCoverName?.(item)}
          TotalPremiumPartyName={getTotalPremium?.(item)}
          StartDatPartyName={getStartDate?.(item)}
          EndDatPartyName={getEndDate?.(item)}
          Thram_noPartyName={getThram_no?.(item)}
          Plot_noPartyName={getPlot_no?.(item)}
          House_noPartyName={getHouse_no?.(item)}
          vehicle_makPartyName={getvehicle_make?.(item)}
        //   ChassisNoPartyName={getChassisNo?.(item)}
        //   ContactNoPartyName={getContactNo?.(item)}

        //claim
      

          // Styles & icons
          cardContainer={leaveApprovalStyles.cardContainer}
          infoContainer={leaveApprovalStyles.infoContainer}
          nameStyle={leaveApprovalStyles.name}
          details={leaveApprovalStyles.details}
          leaveContainer={leaveApprovalStyles.leaveContainer}
          leaveType={leaveApprovalStyles.leaveType}
          durationStyle={leaveApprovalStyles.durationStyle}
          actionButton={leaveApprovalStyles.actionButton}
          imageViewStyle={leaveApprovalStyles.ImageStyle}
          statusStyle={leaveApprovalStyles.statusStyle}
          iconSize={35}
          iconname="edit"
        />
      )}
      keyExtractor={(item) => getKey(item)}
      numColumns={1}
    />
  );
};
