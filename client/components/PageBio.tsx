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
          Weather for Worms is blah blah blah filler text blah blah blah filler
          text blah blah blah filler text blah blah blah filler text blah blah
          blah filler text blah blah blah filler text blah blah blah filler text
          blah blah blah filler text blah blah blah filler text blah blah blah
          filler text someone write in me
        </p>
      </div>
    </>
  )
}

export default PageBio
