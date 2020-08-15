import React from 'react'
import Header from './Header'
import Footer from './Footer'
import About from './About'


const Intro = () => {
  return (
    <>
      <Header />
      <div className='intro-container'>
      <h1 className='intro-hi'>HI</h1>
      <h2 className='intro-welcome'>Welcome to Shubham's World</h2>
      </div>
      <About />
      <Footer />
    </>
  )
}

export default Intro
