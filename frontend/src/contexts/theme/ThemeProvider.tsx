import { useCallback, useEffect, useState } from "react";
import type { ThemeType} from "./ThemeContext.tsx";
import { ThemeContext } from "./ThemeContext.tsx";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState<ThemeType>(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        if (mediaQuery.matches) return "dark";
        return "light";
    })

    const toggleTheme = useCallback(() => setTheme(prevTheme => prevTheme==="light"? "dark":"light"), [setTheme])



    useEffect(() => {
        document.body.className = theme === "light" ? "light-mode" : "dark-mode"
    }, [theme])

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}

