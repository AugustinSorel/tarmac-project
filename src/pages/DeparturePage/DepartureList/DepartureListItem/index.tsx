import moment from "moment";
import { FC } from "react";
import { getAirlineLogo } from "../../../../api/flightApi";
import {
  flightEnterAnimate,
  flightEnterInitial,
} from "../../../../shared/framerMotion/flightEnterVariants";
import { Flight } from "../../../../shared/utils/FlightType";
import getFlightDelayed from "../../../../shared/utils/getFlightDelayed";
import {
  DepartureFlightItem,
  DepartureFlightItemText,
  ImageIATA,
} from "./DepartureListItem.styled";

interface Props {
  flight: Flight;
  index: number;
}

const DepartureListItem: FC<Props> = ({ flight, index }) => {
  return (
    <DepartureFlightItem
      key={flight.flight.number}
      initial={flightEnterInitial}
      animate={flightEnterAnimate(index)}
    >
      <DepartureFlightItemText>
        Nº: {flight.flight.number || "N/A"}
      </DepartureFlightItemText>

      <DepartureFlightItemText>
        Depart:{" "}
        {moment(flight.departure.scheduled).utc().format("HH:mm:ss a") || "N/A"}
      </DepartureFlightItemText>

      <DepartureFlightItemText>
        Status: {flight.flight_status || "N/A"}
      </DepartureFlightItemText>

      <DepartureFlightItemText>
        gate: {flight.departure.gate || "N/A"}
      </DepartureFlightItemText>

      <DepartureFlightItemText>
        delayed:{" "}
        {getFlightDelayed(
          flight.departure.estimated,
          flight.departure.scheduled,
          flight.departure.actual
        )
          ? "yes"
          : "no"}
      </DepartureFlightItemText>

      <ImageIATA
        src={getAirlineLogo(flight.airline.iata)}
        alt={flight.airline.iata}
      />
    </DepartureFlightItem>
  );
};

export default DepartureListItem;
