import React, { useState } from 'react';
import { View } from 'react-native';
import DatePicker, { DateType } from 'react-native-ui-datepicker';

// For multiple dates selection:
interface MultiDatePickerProps {
  onChange?: (date: DateType) => void;  // Changed from Date to DateType
  initialDate: DateType;
}

const MultiDatePicker: React.FC<MultiDatePickerProps> = ({ onChange, initialDate }) => {
  const [selectedDate, setSelectedDate] = useState<DateType>(initialDate || new Date());

  const handleDateChange = (params: { date: DateType }) => {  // Changed signature
    setSelectedDate(params.date);
    onChange?.(params.date);
  };

  return (
    <View>
      <DatePicker
        date={selectedDate}
        onChange={handleDateChange}
        mode="single"
        locale="en"
        selectedItemColor="#2196F3"
      />
    </View>
  );
};

export default MultiDatePicker;
