import request from 'superagent'

// import WeatherData from './models/Weather.ts'

// const serverURL =

export async function getGreeting(): Promise<string> {
  const res = await request.get('/api/v1/greeting')
  return res.body.greeting
}
