import { useState } from 'react'
import Hero from './components/Hero.jsx';
import Header from './components/Header.jsx';
import ServiceBox from './components/ServiceBoxes.jsx';
import CollectionHeader from './components/CollectionHeader.jsx';
import StudioSection from './components/StudioSection.jsx';
import './App.css'
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
      <Header/>
      <div className='flex flex-col gap-6 items-center justify-center'>
        <Hero/>
        <ServiceBox/>
        <CollectionHeader/>
        <StudioSection/>
        <Footer/>
      </div>
    </>
  )
}

export default App
