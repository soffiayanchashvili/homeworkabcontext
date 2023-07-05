import { createContext } from 'react';
import { useState } from 'react';

const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    }
}

export const MyContext = createContext("");

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState (false)
    const theme = isDark ? themes.dark : themes.light;
    const toggleTheme = () => {
        setIsDark(!isDark)
    }
    return (
        <MyContext.Provider value={[{theme, isDark}, toggleTheme]}>{children}</MyContext.Provider>
    )
}