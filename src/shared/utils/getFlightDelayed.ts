const getFlightDelayed = (estimated: Date, scheduled: Date, actual: Date) => {
  return (
    new Date(estimated).getTime() > new Date(scheduled).getTime() ||
    new Date(actual).getTime() > new Date(scheduled).getTime()
  );
};

export default getFlightDelayed;
