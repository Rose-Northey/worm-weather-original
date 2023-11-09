import { useState, useEffect } from 'react'
import { Weather } from '../models/Weather'
import { getWeather } from '../apiClient'

export default function TodaysWeather() {
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

  const thing = weather[0]
  console.log(thing)
  const focus = thing.hourly.soil_moisture_3_to_9cm

  return (
    <>
      <pre>{JSON.stringify(focus, null, 2)}</pre>
      {/* {weather.map((today) => (
        <li key={today.HourlyUnits.time}></li>
      ))} */}
    </>
  )
}
