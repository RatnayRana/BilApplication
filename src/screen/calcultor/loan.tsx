import React, { useState } from 'react';
import { ScrollView, Text, View, Dimensions } from 'react-native';
import { Formik } from 'formik';
import Wrapper from '../auth';
import { renderField } from '../../public/customfields/custom.fields';
import { calculatorLoanSchema } from '../auth/validation/signIn.validation';
import { initialValues, LoanConfig } from '../../utils/calculator/loan';
import { styles } from '../ERP/LeaveApplicationPage/style.leaveapplicationpage';
import lmsandisStyles from './listyle';
import NavComponent from '../../component/NavComponent/navvomponent';
import Button from '../../component/Button';
import { CalDisplayResukt } from '../../component/cal-displayresult/caldisplay-result';
interface LoanData {
    loanAmount: string,
    interestRate: string,
    tenureYears: string,
}

export function LoanScreem() {
    const [emi, setEmi] = useState(0);

    const [totalInterest, setTotalInterest] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [principal, setPrincipal] = useState(0);

    function handleSubmit(values: LoanData) {


        const P = Number(values.loanAmount);
        // console.log(
        //     "P", P
        // )
        const R = Number(values.interestRate) / 12 / 100;
        const N = Number(values.tenureYears) * 12;

        console.log(P, R, N);



        const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        const roundedEmi = Math.round(emiValue);

        const totalPay = roundedEmi * N;
        const interest = totalPay - P;

        setPrincipal(P);
        setEmi(roundedEmi);
        setTotalInterest(Math.round(interest));
        setTotalPayment(Math.round(totalPay));
    }
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
                text="Loan Calculator"
            />

            <ScrollView style={{ paddingHorizontal: 16, flexGrow: 1 }} >
                <Formik
                    initialValues={initialValues}
                    validationSchema={calculatorLoanSchema}
                    onSubmit={handleSubmit}
                >
                    {({ handleSubmit, values, setFieldValue, errors, touched }) => (
                        <View>
                            {LoanConfig().map((fieldConfig: any, index: number) => (
                                <View key={index}>
                                    {renderField({
                                        fieldConfig,
                                        values,
                                        setFieldValue: (name, value) => setFieldValue(name, value),
                                        touched,
                                        errors,
                                        reasonTextStyle: lmsandisStyles.reasonStyle,
                                        inputContainer: styles.containerInput,
                                        textInputStyle: styles.textInputStyle,
                                        placeholderStyle: styles.placeHolderStyle,
                                    })}
                                </View>
                            ))}

                            <View style={styles.buttonContainer}>
                                <Button
                                    labelStyle={styles.buttonTextStyle}
                                    title="Calculate"
                                    onPress={() => (handleSubmit())}
                                    style={styles.ButtonStyle}
                                />
                            </View>

                            <CalDisplayResukt subContainerStyle={lmsandisStyles.subConstainerStyle} emiTextstyle={lmsandisStyles.emiText} totalPayment={totalPayment} principal={principal} emi={emi!} maincontainerStyle={lmsandisStyles.maincontainerStyle} emiLabelstyle={lmsandisStyles.emiLabel} />
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </Wrapper>
    );
}

export default LoanScreem;