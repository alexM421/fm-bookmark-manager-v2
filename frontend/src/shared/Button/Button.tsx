import './Button.module.css'

type ButtonProps = {
    onClick: () => void,
    buttonText: string
}

export default function Button({ onClick, buttonText }: ButtonProps) {
    return (
        <button className="text-preset-3" onClick={onClick}>
            {buttonText}
        </button>
    )
}