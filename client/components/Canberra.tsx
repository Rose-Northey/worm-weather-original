import { useState, useEffect } from 'react'
import { Weather } from '../models/Weather'
import { getWeather } from '../apiClient'

export default function CanberraWeather() {
  const [weather, setWeather] = useState([] as Weather[])

  useEffect(() => {
    async function updateWeather() {
      const weatherData = await getWeather()
      setWeather(weatherData)
      console.log(weatherData[0])
    }
    updateWeather()
  }, [])

  if (weather.length == 0) {
    return <>worm</>
  }

  const canberra = weather[1].hourly
  console.log(canberra)

  const canberraTime = canberra.time[12]

  //canberra Moisture
  const canberrawetnessShallow = canberra.soil_moisture_0_to_1cm[12]
  const canberrawetnessMid = canberra.soil_moisture_9_to_27cm[12]
  const canberrawetnessDeep = canberra.soil_moisture_27_to_81cm[12]

  //canberra Temp
  const canberratempShallow = canberra.soil_temperature_0cm[12]
  const canberratempMid = canberra.soil_temperature_18cm[12]
  const canberratempDeep = canberra.soil_temperature_54cm[12]

  //C. logs
  console.log(canberratempShallow, canberratempMid, canberratempDeep)
  console.log(
    'Shallow',
    canberrawetnessShallow,
    'Mid',
    canberrawetnessMid,
    'Deep',
    canberrawetnessDeep
  )
  console.log(canberraTime)

  //Return
  return (
    <>
      <div>
        <table>
          <tr>
            <th>Depth</th>
            <th>Temperature</th>
            <th>Moisture</th>
          </tr>
          <tr>
            <td>Shallow</td>
            <td>
              <b>{canberratempShallow}</b>c
            </td>
            <td>
              <b>{canberrawetnessShallow}</b>m³/m³
            </td>
          </tr>
          <tr>
            <td>Middle</td>
            <td>
              <b>{canberratempMid}</b>c
            </td>
            <td>
              <b>{canberrawetnessMid}</b>m³/m³
            </td>
          </tr>
          <tr>
            <td>Deep</td>
            <td>
              <b>{canberratempDeep}</b>c
            </td>
            <td>
              <b>{canberrawetnessDeep}</b>m³/m³
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}
