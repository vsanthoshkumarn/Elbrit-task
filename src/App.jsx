import React from 'react'
import Navbar from './components/navbar'
import Productsection from './components/Productsection'
import Herosection from './components/herosection'
import Header from './components/header'
import Footersection from './components/footersection'
import Last from './components/Last'

const App = () => {
  return (
    <div>
      <Navbar />
      <Productsection />
      <Herosection/>
      <Header/>
      <Last/>
      <Footersection/>
    </div>
  )
}

export default App