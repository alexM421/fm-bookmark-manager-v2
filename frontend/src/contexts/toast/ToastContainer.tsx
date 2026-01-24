/* Styles */
import styles from "./ToastContainer.module.css"
/* Types */
import type { ToastType } from "./ToastContext"
/* Icons */
import IconClose from "../../assets/IconClose"
import IconCopy from "../../assets/IconCopy"
import IconPin from "../../assets/IconPin"
import IconArchive from "../../assets/IconArchive"
import IconUnarchive from "../../assets/IconUnarchive"
import IconDelete from "../../assets/IconDelete"
import IconCheck from "../../assets/IconCheck"

type ToastContainerProps = {
    toasts: ToastType[],
    removeToast: (id: string) => void,
    pauseToast: (id: string) => void,
    resumeToast: (id: string) => void
}

export default function ToastContainer({ toasts, removeToast, pauseToast, resumeToast }: ToastContainerProps) {

    const toastIcons = {
        success: <IconCheck />,
        copy: <IconCopy />,
        pin: <IconPin />,
        archive: <IconArchive />,
        unarchive: <IconUnarchive />,
        delete: <IconDelete />,
    }

    

    return (
        <div className={styles["toast-container"]}>
            {toasts.map((toast, index) => {

                const topOffset = (toasts.length - 1 - index) * (41 + 20)

                return (
                    <div 
                    className={`${styles["toast"]} ${toast.isRemoving ? styles["fade-out"] : ""}`}
                    key={toast.id}
                    onMouseEnter={() => !toast.isRemoving && pauseToast(toast.id)}
                    onMouseLeave={() => !toast.isRemoving && resumeToast(toast.id)}
                    style={{ top: topOffset }}
                    >
                        <div className={styles["toast-content"]}>
                            {toastIcons[toast.variant]}
                            <p>{toast.message}</p>
                        </div>
                        <button onClick={() => removeToast(toast.id)}>
                            <IconClose />
                        </button>
                    </div>
                )
            })}
        </div>
    )
}