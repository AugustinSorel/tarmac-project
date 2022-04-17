import moment from "moment";

export const getDateAsHour = (date: Date | string) => {
  return moment(date).utc().format("HH:mm:ss");
};
