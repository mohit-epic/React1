import { createContext, useState } from "react";

const Global = createContext();

export const GlobalProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark':'light');

    return(
        <Global.Provider value={{theme, toggleTheme}}>
            {children}
        </Global.Provider>
    );
};