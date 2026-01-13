import { createContext, useContext } from "react"

export type ThemeType = "light" | "dark"
export type ThemeContextType = {
    theme: ThemeType,
    toggleTheme: React.SetStateAction<React.Dispatch<ThemeType>>
}

export const ThemeContext = createContext<undefined | ThemeContextType>(undefined)

export const useThemeContext = () => {

    const context = useContext(ThemeContext)

    if(context === undefined){
        throw new Error("Outisde of ThemeContext range")
    }

    return context
}