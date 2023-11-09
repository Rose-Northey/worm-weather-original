import request from 'superagent'

import { Weather } from './models/Weather'

export async function getWeather(): Promise<Weather[]> {
  const response = await request.get(
    `https://api.open-meteo.com/v1/forecast?latitude=-41.2866,-35.2835&longitude=174.7756,149.1281&hourly=temperature_2m,dew_point_2m,rain,showers,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm&forecast_days=1`
  )
  console.log(response)
  // const tidyResponse = Object.entries(response)
  return response.body
  console.log(response.body)
}
