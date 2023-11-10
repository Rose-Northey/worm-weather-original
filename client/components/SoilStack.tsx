import React from 'react'
import interpretMoisture from '../function'

function SoilStack(shallow, middle, deep) {
  const shallowMoisture = interpretMoisture(shallow)
  const middleMoisture = interpretMoisture(middle)
  const deepMoisture = interpretMoisture(deep)

  return (
    <>
      <div>
        <div className="soil">
          <img src={shallowMoisture.image} alt="" />
          <img src={middleMoisture.image} alt="" />
          <img src={deepMoisture.image} alt="" />
        </div>
      </div>
    </>
  )
}

export default SoilStack
