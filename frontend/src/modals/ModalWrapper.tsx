import { createPortal } from "react-dom"
import ModalCard from "./ModalCard/ModalCard"
import styles from "./ModalCard/ModalCard.module.css"

type ModalWrapperProps = {
    modalDisplay: boolean
    setModalDisplay: (modalDisplay: boolean) => void
    title: string
    description: string
    buttonText: string
    variant?: "small"
    onClick: () => void
    initialValues?: {
        title: string
        description: string
        url: string
        tags: string
    }
}

export default function ModalWrapper({
    modalDisplay,
    setModalDisplay,
    title,
    description,
    buttonText,
    variant,
    onClick,
    initialValues
}: ModalWrapperProps) {
    if (!modalDisplay) return null

    return createPortal(
        <>
            <ModalCard 
                title={title}
                description={description}
                buttonText={buttonText}
                variant={variant}
                onClick={onClick}
                setModalDisplay={setModalDisplay}
                initialValues={initialValues}
            />
            <div className={styles["modal-background"]}></div>
        </>,
        document.body
    )
}
