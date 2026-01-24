import { createContext, useContext } from "react"

export type ToastType = {
    id: string,
    message: string,
    variant: "success" | "copy" | "pin" | "archive" | "unarchive" | "delete",
    duration: number,
    remaining: number,
    start: string,
    isRemoving?: boolean
}

export type ToastContextType = {
    addToast: (message: string, variant: "success" | "copy" | "pin" | "archive" | "unarchive" | "delete", duration?: number) => void
}

export const ToastContext = createContext<undefined | ToastContextType>(undefined)

export const useToastContext = () => {

    const context = useContext(ToastContext)

    if(context === undefined){
        throw new Error("Outside of ToastContext range")
    }

    return context
}