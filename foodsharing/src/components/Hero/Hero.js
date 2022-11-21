import React from 'react'
import './Hero.scss'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__cta">Start helping! <br /> Share your food!</h1>
        <button className='hero__button'>How to help?</button>
      </div>
      <img className='hero__image' src='/images/hero-bag.jpg' alt='people putting food to the box' />  
    </div>
  )
}
