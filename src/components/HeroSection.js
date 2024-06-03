import React, { useContext } from 'react'
import { Theme } from '../Context/ThemeContext';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const HeroSection = () => {
    const {darkmode, toggleMode} = useContext(Theme);
    const [text] = useTypewriter( {
        words : ["Insight", "Stories","Inspiration"],
        loop : 0,
        typeSpeed : 100,
        deleteSpeed : 60,
        delaySpeed : 1000 
    });

  return (
    <div className='bg-slate-700 min-h-200'>
        <div className= 'ml-10 mt-15 h-150 bg-red-400'> 
            <h1 className='text-xl'>    Welcome to 
                    <span className='font-bold text-4xl'> TechPulse,</span> <br/>
                    your daily dose of 
                    <span className='font-bold text-3xl'> {text}</span>
            </h1>
        </div>
        
            <button>
                Get Started
            </button>
        
    </div>
  )
}

export default HeroSection