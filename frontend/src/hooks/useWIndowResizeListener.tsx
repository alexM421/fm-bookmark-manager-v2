import { useEffect, useState } from "react"

export const useWindowResizeListener = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth))

        return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
    }, [])

    return { windowWidth }
}