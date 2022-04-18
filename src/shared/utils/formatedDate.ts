import moment from "moment";

export const getDateAsHour = (date: Date | string) => {
  return moment(date).utc().format("HH:mm:ss");
};

export const getFullDate = () => {
  return moment().format("MMMM Do YYYY, HH:mm:ss");
};
