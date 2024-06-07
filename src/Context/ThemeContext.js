import { createContext, useState, useEffect } from "react";


export const Theme = createContext();

function ThemeContext ({children})  {
   
    //the theme will be dark when darkMode value is true
    const storedMode = localStorage.getItem('mode');
    // console.log(JSON.parse(storedMode));
    const initialMode = storedMode !== null ? JSON.parse(storedMode) : false;
    const [darkMode, setDarkMode] = useState(initialMode);
    // console.log(typeof darkMode);

    useEffect( () => {
        localStorage.setItem('mode', darkMode);
        console.log(darkMode);
    },[darkMode])

    const toggleMode = () => {
        setDarkMode(prev => !prev);
        // console.log(darkMode);
    }

    return(
        <Theme.Provider value={{darkMode, toggleMode}}>
            {children}
        </Theme.Provider>
    )
}

export default ThemeContext;