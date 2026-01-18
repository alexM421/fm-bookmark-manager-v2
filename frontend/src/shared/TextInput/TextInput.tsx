import { useState } from 'react'
import styles from './TextInput.module.css'
import IconHidePassword from '../../assets/IconHidePassword'
import IconShowPassword from '../../assets/IconShowPassword'

export type TextInputProps = {
    nameId: string,
    legend?: string,
    placeholder?: string,
    required: boolean,
    showAsterisk: boolean,
    error?: string,
    message?: string,
    type?: "text" | "email" | "password" | "url",
    minLength?: number,
    maxLength?: number,
    icon?: React.ReactNode,
    controlledObject?: {
        value: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }
}

export default function TextInput({ nameId, legend, placeholder, required, showAsterisk, error, message, type, minLength, maxLength, icon, controlledObject }: TextInputProps) {

    const [showPassword, setShowPassword] = useState(false)
    
    const toggleShowPassword = () => setShowPassword(prev => !prev)

    return (
        <div className={styles["text-input"]}>
            {legend && <label 
                htmlFor={nameId}
                className="text-preset-4"
            >{`${legend}`} {required && showAsterisk? <span style={{ color: "var(--asterik-color)" }}>*</span> : ""}</label>}
            <div>
                {icon && <div className={styles["icon"]}>{icon}</div>}
                <input 
                    type={type === "password" && showPassword ? "text" : type || "text"} 
                    id={nameId} 
                    name={nameId}
                    placeholder={placeholder || ""} 
                    className={`text-preset-4-medium ${error ? styles["error"] : ""}`}
                    autoComplete="off"
                    minLength={minLength}
                    maxLength={maxLength}
                    style={{ paddingLeft: icon ? "40px" : "12px" }}
                    value={controlledObject?.value}
                    onChange={controlledObject?.onChange}
                />
                {type === "password" && 
                    <button 
                        type="button" 
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? <IconHidePassword /> : <IconShowPassword />}
                    </button>
                }
            </div>
            {message && !error && <p className="text-preset-4-medium">{message}</p>}
            {error && <p className="text-preset-4-medium" style={{ color: "var(--error-color)" }}>{error}</p>}
        </div>
    )
}