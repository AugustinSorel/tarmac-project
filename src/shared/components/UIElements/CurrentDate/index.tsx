import { useEffect, useState } from "react";
import { getFullDate } from "../../../utils/formatedDate";
import { CurrentDateText } from "./CurrentDate.styled";

const CurrentDate = () => {
  const [date, setDate] = useState(getFullDate());

  useEffect(() => {
    setInterval(() => {
      setDate(getFullDate());
    }, 1000);
  }, []);

  return <CurrentDateText>{date}</CurrentDateText>;
};

export default CurrentDate;
