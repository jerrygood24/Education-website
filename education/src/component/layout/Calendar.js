import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Calendar
      </Typography>
      
    </Container>
  );
};

export default Calendar;
