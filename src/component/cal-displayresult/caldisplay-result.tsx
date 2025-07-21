import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface CalDisplayResultProps {
  maincontainerStyle?: StyleProp<ViewStyle>;
  subContainerStyle?: StyleProp<ViewStyle>;
  emi: number;
  totalPayment: number;
  principal: number;
  emiLabelstyle?: StyleProp<TextStyle>;
  emiTextstyle?: StyleProp<TextStyle>;
}

export const CalDisplayResult = ({
  maincontainerStyle,
  subContainerStyle,
  emi,
  totalPayment,
  principal,
  emiLabelstyle,
  emiTextstyle,
}: CalDisplayResultProps) => {
  const formatNumber = (value: number) =>
    `Nu. ${value.toLocaleString('en-IN')}`;

  const renderItem = (label: string, value: number) => (
    <View style={[styles.subContainer, subContainerStyle]}>
      <Text style={[styles.label, emiLabelstyle]}>{label}</Text>
      <Text style={[styles.value, emiTextstyle]}>{formatNumber(value)}</Text>
    </View>
  );

  return (
    <View style={[styles.mainContainer, maincontainerStyle]}>
      {renderItem('EMI Amount', emi)}
      {renderItem('Total Amount Payable', totalPayment)}
      {renderItem('Principal Amount', principal)}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    margin: 16,
  },
  subContainer: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    color: '#555',
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    color: '#008000',
    fontWeight: '600',
  },
});
