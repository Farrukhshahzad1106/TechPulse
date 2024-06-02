import { createContext, useState, useEffect } from "react";


export const Theme = createContext();

function ThemeContext ({children})  {
    const [darkMode, setDarkMode] = useState(false);

    useEffect( () => {
        localStorage.setItem('mode', `${darkMode}`);
    },[darkMode])

    const toggleMode = () => {
        console.log(darkMode);
        setDarkMode(dark => !dark);
    }

    const value= {
        darkMode,
        toggleMode
    }

    return(
        <Theme.Provider value={value}>
            {children}
        </Theme.Provider>
    )
}

export default ThemeContext;