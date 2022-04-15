import { useQuery } from "react-query";
import { getFlights } from "../../api/flightApi";
import {
  DepartureContainer,
  DepartureFilters,
  DepartureList,
  DepartureSection,
  DepartureTitle,
} from "./DeparturePage.styled";

const DeparturePage = () => {
  const { isLoading, data } = useQuery("flightList", getFlights);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <DepartureContainer>
      <DepartureTitle>departure</DepartureTitle>

      <DepartureSection>
        <DepartureFilters>filters...</DepartureFilters>

        <DepartureList>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
            <h1 key={item}>{item}</h1>
          ))}
        </DepartureList>
      </DepartureSection>
    </DepartureContainer>
  );
};

export default DeparturePage;
