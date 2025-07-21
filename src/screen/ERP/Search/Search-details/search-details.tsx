/* eslint-disable quotes */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { RootStackNavigatorParamsList } from '../../../../component/interface/routeinterface';
import SeachLobNameCard from '../../../../ImportantComponent/search-lob-name';
import { SearchCardFlatList } from '../../../../component/SearchCard/search-card';
import Wrapper from '../../../auth';
import NavComponent from '../../../../component/NavComponent/navvomponent';
import { styles } from '../../../ERP/LeaveApplicationPage/style.leaveapplicationpage';

type approvedScreen = NativeStackScreenProps<
    RootStackNavigatorParamsList,
    'SearchDetailedScreen'
>;

const SearchDetailedScreen: React.FC<approvedScreen> = ({ route }) => {
    const { approvedData } = route.params;
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleCardPress = (index: number) => {
        setExpandedIndex(prev => prev === index ? null : index)
    };

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
                text="Search Details"
            />

            <View>
                {approvedData?.map((item, index) => (
                    <View
                        key={index}

                    >
                        {/* Touchable Card Header */}

                        <SeachLobNameCard
                            onPress={() => { console.log("yyuy"); handleCardPress(index) }}
                            lob_name={item.lob_name || item.lobname}
                            pol_policy_number={item.pol_policy_number || item.policy_number}
                        />

                        {/* Expanded Content */}
                        {expandedIndex === index &&(
                            <View

                            >
                                <SearchCardFlatList
                                    data={[item]}
                                    getPartyName={(item) => item?.party_name || item?.partyname || ""}
                                    getCid_no={(item) => item.cid_no || item.cidno || ''}
                                    getKey={(item) => item.pol_policy_number}
                                    getLabelPartyname={() => "Party Name"}
                                    getCidLabel={() => "CID"}
                                    getProduct_namelabel={() => "Product Name"}
                                    getCoverlabel={() => "Cover Name"}
                                    getTotal_premiumlabel={() => "Total Premium"}
                                    getStart_datelabel={() => "Start Date"}
                                    getExpiry_datelabel={() => "Expiry Date"}
                                    getThram_nolabek={() => "Thram No"}
                                    getPlot_nolabel={() => "Plot No"}
                                    getHouse_nolabel={() => "House No"}
                                    getExact_locationlabel={() => "Exact Location"}
                                    getvehicle_makelabel={() => "Vehicle Make"}
                                    getVechileNOlabel={() => "Vehicle No"}
                                    geEnginenolabel={() => "Engine No"}
                                    chasis_nolabel={() => "Chassis No"}
                                    getContactlabel={() => "Contact"}
                                    getClaimNumberLabel={() => "Claim Nummber"}
                                    getClaimstatusLabel={() => 'Claim Status'}
                                    getVechilemodelLabel={() => "Vechile Model"}
                                    getVechilemodel={(item) => item.vehicle_model || item.vehmodel || ''}
                                    getClaimstatus={(item) => item.claimstatus ?? ''}
                                    getProduct_name={(item) => item.product_name ?? ''}
                                    getCoverName={(item) => item.cover_name ?? ''}
                                    getTotalPremium={(item) => item.total_premium ?? ''}
                                    getStartDate={(item) => item.start_date ?? ''}
                                    getEndDate={(item) => item.expiry_date ?? ''}
                                    getThram_no={(item) => item.thram_no ?? ''}
                                    getPlot_no={(item) => item.plot_no ?? ''}
                                    getHouse_no={(item) => item.house_no ?? ''}
                                    getExact_location={(item) => item.exact_location ?? ''}
                                    getvehicle_make={(item) => item.vehicle_make || item.vehmake || ''}
                                    getVehicleNo={(item) => item.vehicle_no || item.vehregnumber || ''}
                                    getEngineNo={(item) => item.engine_no || item.vehengnumber || ''}
                                    getChassisNo={(item) => item.chassis_no || item.vehchasnumber || ''}
                                    getContactNo={(item) => item.contact_no ?? ''}
                                    getClaimNumber={(item) => item.claimnumber ?? ''}
                                />
                            </View>
                        )}

                    </View>
                ))}
            </View>
        </Wrapper>
    );
};

export default SearchDetailedScreen;
