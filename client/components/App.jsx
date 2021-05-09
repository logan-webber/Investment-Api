import React from 'react'
import { getSummary } from '../api'

const App = () => {
  return (
    <>
      <h1>React development has begun!</h1>
      <p>{getSummary()}</p>
    </>
  )
}

export default App
