// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './Components/Header'
import LandingPage from './Components/LandingPage'
import FeaturesPage from './Components/FeaturesPage'
const App = () => {
  return (
    <main className='overflow-hidden'>
    <Header/>
    <LandingPage/>
    <FeaturesPage/>
    </main>
  )
}

export default App
