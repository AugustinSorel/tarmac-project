import moment from "moment";
import DepartureList from "./DepartureList";

import {
  DepartureContainer,
  DepartureDate,
  DepartureTitle,
} from "./DeparturePage.styled";

const DeparturePage = () => {
  return (
    <DepartureContainer>
      <DepartureTitle>today departures</DepartureTitle>
      <DepartureDate>{moment().format("MMMM Do YYYY")}</DepartureDate>

      <DepartureList />
    </DepartureContainer>
  );
};

export default DeparturePage;
