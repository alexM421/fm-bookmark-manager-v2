import { useEffect, type RefObject } from "react"


export default function useHandleClickOutside (
        containerRef: RefObject<HTMLDivElement | null>, 
        closeModal: () => void,
        containerButtonRef?: RefObject<HTMLButtonElement | null>, 
    ) {

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            
            const target = e.target as Node

            const isOutsideContainer = containerRef.current && !containerRef.current.contains(target)
            const isOutsideButton = !containerButtonRef?.current || !containerButtonRef.current.contains(target)
        
            if (isOutsideContainer && isOutsideButton) closeModal()
        }
    
        window.addEventListener("mousedown", handleClickOutside)
        return () => window.removeEventListener("mousedown", handleClickOutside)

    }, [containerRef, containerButtonRef, closeModal])

}
