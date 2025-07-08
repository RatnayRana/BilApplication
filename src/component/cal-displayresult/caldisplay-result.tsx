import { FlatList, StyleProp, Text, TextStyle, View, ViewStyle } from "react-native"
interface CalDisplayResultProps {
    maincontainerStyle?: StyleProp<ViewStyle>;
    subContainerStyle?: StyleProp<ViewStyle>;
    emi: number

    totalPayment: number;
    principal: number;
    emiLabelstyle?: StyleProp<TextStyle>
    emiTextstyle?: StyleProp<TextStyle>
}
export const CalDisplayResukt = ({ maincontainerStyle, subContainerStyle, emi, totalPayment, principal, emiLabelstyle, emiTextstyle }: CalDisplayResultProps) => {
    return (
        <View style={maincontainerStyle}>
            <View style={subContainerStyle}>
                <Text style={emiLabelstyle}>EMI Amount:</Text>
                <Text style={emiTextstyle}>Nu {emi}</Text>

            </View>


            <View style={subContainerStyle}>
                {/* <Text style={lmsandisStyles.totalText}>Total Amount: Nu {totalPayment}</Text>
                                    <Text>Principal Amount: Nu {totalPayment}</Text>
                                    <Text>Total Interest: Nu {totalInterest}</Text> */}
                <Text style={emiLabelstyle}>Total Amount:</Text>
                <Text style={emiTextstyle}>Nu {totalPayment}</Text>
            </View>

            <View style={subContainerStyle}>
                {/* <Text style={lmsandisStyles.totalText}>Total Amount: Nu {totalPayment}</Text>
                                    <Text>Principal Amount: Nu {totalPayment}</Text>
                                    <Text>Total Interest: Nu {totalInterest}</Text> */}
                <Text style={emiLabelstyle}>Principal Amount:</Text>
                <Text style={emiTextstyle}>Nu {principal}</Text>
            </View>
        </View>
    )
}