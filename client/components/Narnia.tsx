import { useState, useEffect } from 'react'
import { Weather } from '../models/Weather'
import { getWeather } from '../apiClient'
import SoilStack from './SoilStack'
import interpretMoisture from '../function'

export default function NarniaWeather() {
  //narnia Moisture
  const narniawetnessShallow = 0.156
  const narniawetnessMid = 0.247
  const narniawetnessDeep = 0.356

  //narnia Temp
  const narniatempShallow = 15.2
  const narniatempMid = 11.7
  const narniatempDeep = 6.8

  //C. logs
  console.log(narniatempShallow, narniatempMid, narniatempDeep)
  console.log(
    'Shallow',
    narniawetnessShallow,
    'Mid',
    narniawetnessMid,
    'Deep',
    narniawetnessDeep
  )

  //Return
  return (
    <>
      <div>
        <h4> Weather Report for Narnia: </h4>
        <table>
          <tr>
            <th>Depth</th>
            <th>Temperature</th>
            <th>Moisture</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Shallow</td>
            <td>
              <b>{narniatempShallow}</b>c
            </td>
            <td>
              <b>{narniawetnessShallow}</b>m³/m³
            </td>
            <td>
              <b>{interpretMoisture(narniawetnessShallow).words}</b>
            </td>
          </tr>
          <tr>
            <td>Middle</td>
            <td>
              <b>{narniatempMid}</b>c
            </td>
            <td>
              <b>{narniawetnessMid}</b>m³/m³
            </td>
            <td>
              <b>{interpretMoisture(narniawetnessMid).words}</b>
            </td>
          </tr>
          <tr>
            <td>Deep</td>
            <td>
              <b>{narniatempDeep}</b>c
            </td>
            <td>
              <b>{narniawetnessDeep}</b>m³/m³
            </td>
            <td>
              <b>{interpretMoisture(narniawetnessDeep).words}</b>
            </td>
          </tr>
        </table>
      </div>
      {SoilStack(narniawetnessShallow, narniawetnessMid, narniawetnessDeep)}
    </>
  )
}
