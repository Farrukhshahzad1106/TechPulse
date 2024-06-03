import React, { useContext } from 'react'
import { Theme } from '../Context/ThemeContext'

const HeroSection = () => {
    const {darkmode, toggleMode} = useContext(Theme);
  return (
    <div>
        <div>
            <h1>Wellcome to <span>TechPulse</span> , your daily dose of </h1>
        </div>
    </div>
  )
}

export default HeroSection