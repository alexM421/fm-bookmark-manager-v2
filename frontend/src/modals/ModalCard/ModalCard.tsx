import { useRef, useEffect, useState } from "react";
import IconClose from "../../assets/IconClose";
import Button from "../../shared/Button/Button";
import styles from "./ModalCard.module.css";
import useHandleClickOutside from "../../hooks/useHandleClickOutside";
import ModalCardForm from "./ModalCardForm";

type ModalCardProps = {
    title: string;
    description: string;
    buttonText: string;
    variant?: "small";
    onClick: () => void;
    setModalDisplay: (modalDisplay: boolean) => void;
    initialValues?: {
        title: string;
        description: string;
        url: string;
        tags: string;
    }
}

export default function ModalCard({ title, description, buttonText, variant, onClick, setModalDisplay, initialValues}: ModalCardProps) {


    const [inputValues, setInputValues] = useState(initialValues || {
        title: "",
        description: "",
        url: "",
        tags: ""
    })
    
    //handle modal accessibility
    useEffect(() => {
        const app = document.querySelector<HTMLElement>("#app");
        const modal = modalRef.current;

        if (app) {
            app.setAttribute("inert", "true");
        }
        if (modal) {
            modal.removeAttribute("inert");
        }

        return () => {
            if (app) {
                app.removeAttribute("inert");
            }
        };
    }, []);

    //handle modal click outside
    const modalRef = useRef<HTMLDivElement>(null)
    useHandleClickOutside(modalRef, () => setModalDisplay(false))

    return (
        <div className={`${styles["modal-card"]} ${variant ? styles[variant] : ""}`} ref={modalRef}>
            <button className={styles["modal-card-close"]} onClick={() => setModalDisplay(false)}>
                <IconClose />
            </button>

            <div className={styles["modal-card-header"]}>
                <h2 className="text-preset-1">{title}</h2>
                <p className="text-preset-4-medium">{description}</p>
            </div>

            {!variant && 
                <ModalCardForm 
                    inputValues={inputValues}
                    setInputValues={setInputValues}
                />
            }

            <div className={styles["modal-card-footer"]}>
                <Button buttonText="Cancel" onClick={() => setModalDisplay(false)} variant="cancel" />    
                <Button buttonText={buttonText} onClick={onClick} />    
            </div>
        </div>
    )
}