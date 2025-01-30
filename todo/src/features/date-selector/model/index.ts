import { useState } from "react";
import { format } from "date-fns";

export const useDateSelector = () => {
  const [selectedDate, setSelectedDate] = useState<string>(
    format(new Date(), "yyyy-MM-dd")
  );

  return {
    selectedDate,
    setSelectedDate,
  };
};