  const getWeekendDeduction = (startDate: any, endDate: any, valuef: any) => {
    let currentDate = new Date(startDate);
    let deduction = 0;

    while (currentDate <= new Date(endDate)) {
      const day = currentDate.getDay(); // 0 = Sunday, 6 = Saturday

      if (day === 0) {
        deduction += 1; // Sunday
      } else if (day === 6 || valuef === 'Y') {
        deduction += 0.5; // Saturday
      }

      currentDate.setDate(currentDate.getDate() + 1); // Move to next day
    }

    return deduction;
  };

  export default getWeekendDeduction