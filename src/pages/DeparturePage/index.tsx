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

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <DepartureContainer>
      <DepartureTitle>departure</DepartureTitle>

      <DepartureSection>
        <DepartureFilters>filters...</DepartureFilters>

        <DepartureList>
          {data.map((flight, index) => {
            return <div key={index}>{flight.flight.number}</div>;
          })}
        </DepartureList>
      </DepartureSection>
    </DepartureContainer>
  );
};

export default DeparturePage;
