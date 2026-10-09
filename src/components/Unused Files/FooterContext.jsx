import React from 'react'
import Footer from '../Footer'

export default function FooterContext() {
  return (
    <div 
      className='relative h-[700px] lg:h-[400px] w-full'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-auto w-full'>
        <Footer />
      </div>
    </div>
  )
}