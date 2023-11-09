export interface Weather {
  latitude:              number;
  longitude:             number;
  generationtime_ms:     number;
  utc_offset_seconds:    number;
  timezone:              string;
  timezone_abbreviation: string;
  elevation:             number;
  hourly_units:          HourlyUnits;
  hourly:                Hourly;
}

export interface Hourly {
  time:                     string[];
  temperature_2m:           number[];
  dew_point_2m:             number[];
  rain:                     number[];
  showers:                  number[];
  soil_temperature_0cm:     number[];
  soil_temperature_6cm:     number[];
  soil_temperature_18cm:    number[];
  soil_temperature_54cm:    number[];
  soil_moisture_0_to_1cm:   number[];
  soil_moisture_1_to_3cm:   number[];
  soil_moisture_3_to_9cm:   number[];
  soil_moisture_9_to_27cm:  number[];
  soil_moisture_27_to_81cm: number[];
}

export interface HourlyUnits {
  time:                     string;
  temperature_2m:           string;
  dew_point_2m:             string;
  rain:                     string;
  showers:                  string;
  soil_temperature_0cm:     string;
  soil_temperature_6cm:     string;
  soil_temperature_18cm:    string;
  soil_temperature_54cm:    string;
  soil_moisture_0_to_1cm:   string;
  soil_moisture_1_to_3cm:   string;
  soil_moisture_3_to_9cm:   string;
  soil_moisture_9_to_27cm:  string;
  soil_moisture_27_to_81cm: string;
}
