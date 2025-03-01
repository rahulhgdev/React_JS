import { useState } from 'react'
import Fruits from './components/Fruits'
import FruitDetails from './components/FruitDetails'
import FruitContextProvider from './context/FruitContextProvider'

function App() {
  return(
    <FruitContextProvider>
      <h1>Context API</h1>
      <Fruits />
      <FruitDetails />
    </FruitContextProvider>
  )
}

export default App
