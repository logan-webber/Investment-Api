import React, { useEffect, useState } from 'react'
import { getSummary } from '../api'

const App = () => {

  useEffect((
    getSummary()
  ), [])

  return (
    <>
      <h1>React development has begun!</h1>
      {/* <p>{getSummary()}</p> */}
    </>
  )
}

export default App
