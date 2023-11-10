import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient.ts'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <h1>Weather 4 Worms</h1>
      <Link to="/cities/wellington">
        <button>
          <img
            className="cityButton"
            src="client/Media/wellington.jpg"
            alt="Welly"
          />
        </button>
      </Link>

      <Link to="/cities/canberra">
        <button>
          <img className="cityButton" src="client/Media/aus.png" alt="Aus" />
        </button>
      </Link>
    </>
  )
}

export default Header
