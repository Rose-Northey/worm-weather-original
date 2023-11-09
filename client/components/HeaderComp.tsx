import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient.ts'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <h1>Weather 4 Worms</h1>
    </>
  )
}

export default Header
