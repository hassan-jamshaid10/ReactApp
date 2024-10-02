// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import FeaturesPage from './Components/FeaturesPage';
import Pricing from './Components/Pricing/index';
import Faq from './Components/Faq/index';
import Testimonials from './Components/Testimonials';
const App = () => {
  return (
    <main className='overflow-hidden'>
    <Header/>
    <LandingPage/>
    <FeaturesPage/>
    <Pricing/>
    <Faq/>
    <Testimonials/>
    </main>
  )
}

export default App
