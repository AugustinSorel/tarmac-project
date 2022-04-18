import CurrentDate from "../../shared/components/UIElements/CurrentDate";
import DepartureList from "./DepartureList";

import { DepartureContainer, DepartureTitle } from "./DeparturePage.styled";

const DeparturePage = () => {
  return (
    <DepartureContainer>
      <DepartureTitle>today departures</DepartureTitle>
      <CurrentDate />

      <DepartureList />
    </DepartureContainer>
  );
};

export default DeparturePage;
