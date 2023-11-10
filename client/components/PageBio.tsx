import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient.ts'
import { Link } from 'react-router-dom'

function PageBio() {
  return (
    <>
      <div className="pageBio">
        <h3>About W4W</h3>
        <p>
          {' '}
          Welcome to Weather for Worms! The wiggliest Weather Website you've
          ever witnessed, willing to Wow by welcoming the wonderfully wacky
          weather to your worm workplace.
        </p>
      </div>
    </>
  )
}

export default PageBio
