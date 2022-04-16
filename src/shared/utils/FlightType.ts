export interface Departure {
  airport: string;
  timezone: string;
  iata: string;
  icao: string;
  terminal: string;
  gate: string;
  delay: number;
  scheduled: Date | string;
  estimated: Date | string;
  actual: Date | string;
  estimated_runway: Date | string;
  actual_runway: Date | string;
}

export interface Arrival {
  airport: string;
  timezone: string;
  iata: string;
  icao: string;
  terminal: string;
  gate: string;
  baggage: string;
  delay: number;
  scheduled: Date | string;
  estimated: Date | string;
  actual?: any;
  estimated_runway?: any;
  actual_runway?: any;
}

export interface Airline {
  name: string;
  iata: string;
  icao: string;
}

export interface FlightData {
  number: string;
  iata: string;
  icao: string;
  codeshared?: any;
}

export interface Aircraft {
  registration: string;
  iata: string;
  icao: string;
  icao24: string;
}

export interface Live {
  updated: Date | string;
  latitude: number;
  longitude: number;
  altitude: number;
  direction: number;
  speed_horizontal: number;
  speed_vertical: number;
  is_ground: boolean;
}

export interface Flight {
  flight_date: string;
  flight_status: string;
  departure: Departure;
  arrival: Arrival;
  airline: Airline;
  flight: FlightData;
  aircraft: Aircraft;
  live: Live;
}
