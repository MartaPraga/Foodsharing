import React from 'react'
import { Hero } from '../../components/Hero/Hero'
import { AboutSection } from '../../components/AboutSection/AboutSection'
import { Features } from '../../components/Features/Features'

export function Home() {
  return (
    <div className='Home'>
      <Hero />
      <AboutSection />
      <Features />

    </div>
  )
}
