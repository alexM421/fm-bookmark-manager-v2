import IconLightTheme from "../../../assets/IconLightTheme"
import IconDarkTheme from "../../../assets/IconDarkTheme"
import styles from "./ThemeToggle.module.css"
import { useThemeContext } from "../ThemeContext"

export default function ThemeToggle() {

    const { theme, toggleTheme } = useThemeContext()

    return (
        <label className={styles["theme-toggle"]} htmlFor="theme-toggle">
            <div className={styles["theme-toggle-icons-container"]}>
                <IconLightTheme />
                <IconDarkTheme />
                <div className={`${styles["theme-toggle-slider"]} ${theme === "dark" ? styles["theme-toggle-slider-toggled"] : ""}`}></div>
            </div>
            <input type="checkbox" id="theme-toggle" checked={theme === "dark"} onChange={() => toggleTheme()} />
        </label>
    )
}