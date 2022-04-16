const getFlightDelayed = (
  estimated: Date | string,
  scheduled: Date | string,
  actual: Date | string
) => {
  return (
    new Date(estimated).getTime() > new Date(scheduled).getTime() ||
    new Date(actual).getTime() > new Date(scheduled).getTime()
  );
};

export default getFlightDelayed;
