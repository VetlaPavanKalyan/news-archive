import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";

import { convertDate } from "../utils/formatDate";

const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDatePick = (date) => {
    setSelectedDate(date);

    const formattedDate = convertDate(date.toLocaleDateString("en-US"));

    navigate(`/news/${formattedDate}`);
  };

  return (
    <div>
      <Calendar
        value={selectedDate}
        onChange={handleDatePick}
        showNavigation={true}
      />
    </div>
  );
};

export default CustomCalendar;
