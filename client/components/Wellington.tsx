import { useState, useEffect } from 'react'
import { Weather } from '../models/Weather'
import { getWeather } from '../apiClient'

export default function WellingtonWeather() {
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

  const wellington = weather[0].hourly
  console.log(wellington)

  const wellyTime = wellington.time[12]

  //Welly Moisture
  const wellywetnessShallow = wellington.soil_moisture_0_to_1cm[12]
  const wellywetnessMid = wellington.soil_moisture_9_to_27cm[12]
  const wellywetnessDeep = wellington.soil_moisture_27_to_81cm[12]

  //Welly Temp
  const wellytempShallow = wellington.soil_temperature_0cm[12]
  const wellytempMid = wellington.soil_temperature_18cm[12]
  const wellytempDeep = wellington.soil_temperature_54cm[12]

  //C. logs
  console.log(wellytempShallow, wellytempMid, wellytempDeep)
  console.log(
    'Shallow',
    wellywetnessShallow,
    'Mid',
    wellywetnessMid,
    'Deep',
    wellywetnessDeep
  )
  console.log(wellyTime)

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
              <b>{wellytempShallow}</b>c
            </td>
            <td>
              <b>{wellywetnessShallow}</b>m³/m³
            </td>
          </tr>
          <tr>
            <td>Middle</td>
            <td>
              <b>{wellytempMid}</b>c
            </td>
            <td>
              <b>{wellywetnessMid}</b>m³/m³
            </td>
          </tr>
          <tr>
            <td>Deep</td>
            <td>
              <b>{wellytempDeep}</b>c
            </td>
            <td>
              <b>{wellywetnessDeep}</b>m³/m³
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}
