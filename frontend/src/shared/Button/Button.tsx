import styles from './Button.module.css'

type ButtonProps = {
    onClick: () => void,
    buttonText: string,
    variant?: "cancel"
}

export default function Button({ onClick, buttonText, variant }: ButtonProps) {
    return (
        <button className={`${styles["button"]} ${variant ? styles[variant] : ""} text-preset-3`} onClick={onClick}>
            {buttonText}
        </button>
    )
}