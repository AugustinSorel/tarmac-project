import { FC } from "react";
import { Flight } from "../../../../shared/utils/FlightType";
import DepartureListItem from "../DepartureListItem";
import { DepartureFlightListContainer } from "./DepartureFlightList.styled";

interface Props {
  currentFlights: Flight[];
}

const DepartureFlightList: FC<Props> = ({ currentFlights }) => {
  return (
    <DepartureFlightListContainer>
      {currentFlights.map((flight, index) => (
        <DepartureListItem key={index} index={index} flight={flight} />
      ))}
    </DepartureFlightListContainer>
  );
};

export default DepartureFlightList;
