import { useRef, useState } from "react"
import ToastContainer from "./ToastContainer"
import { ToastContext, type ToastType } from "./ToastContext"

export default function ToastProvider({ children }: { children: React.ReactNode }) {

    const [toasts, setToasts] = useState<ToastType[]>([])
    const timers = useRef<Record<string, number>>({})

    const addToast = (message: string, variant: "success" | "copy" | "pin" | "archive" | "unarchive" | "delete", duration = 3000) => {

        const id = crypto.randomUUID()

        const toast: ToastType = {
            id,
            message,
            variant,
            duration,
            remaining: duration,
            start: new Date().toISOString()
        }

        setToasts(prevToasts => [...prevToasts, toast])

        timers.current[id] = setTimeout(() => removeToast(id), duration)
    }

    const removeToast = (id: string) => {
        clearTimeout(timers.current[id])
        delete timers.current[id]
        
        // Mark toast as removing to trigger fade-out animation
        setToasts(prevToasts => prevToasts.map(toast => 
            toast.id === id ? { ...toast, isRemoving: true } : toast
        ))
        
        // Remove from state after animation completes
        setTimeout(() => {
            setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id))
        }, 300) // Match your CSS animation duration
    }

    const pauseToast = (id: string) => {
        // Don't pause if already removing
        if (timers.current[id] === undefined) return
        
        setToasts(prevToasts => prevToasts.map(toast => {
            if(toast.id !== id || toast.isRemoving) return toast

            const elapsed = toast.duration - (new Date().getTime() - new Date(toast.start).getTime()) 
            clearTimeout(timers.current[id])

            return {...toast, remaining: elapsed}
        }))
    }

    const resumeToast = (id: string) => {
        setToasts(prevToasts => prevToasts.map(toast => {
            if(toast.id !== id || toast.isRemoving) return toast

            timers.current[id] = setTimeout(() => removeToast(id), toast.remaining)

            return {...toast, start: new Date().toISOString()}
        }))
    }


    const value = {
        addToast
    }

    return (
        <ToastContext.Provider value={value}>
            {children}
            <ToastContainer 
                toasts={toasts} 
                removeToast={removeToast}
                pauseToast={pauseToast}
                resumeToast={resumeToast}
            />
        </ToastContext.Provider>
    )
}
