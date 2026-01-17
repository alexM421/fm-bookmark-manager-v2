import { useState } from 'react'
import styles from './TextInput.module.css'

export type TextInputProps = {
    nameId: string,
    legend: string,
    placeholder: string,
    required: boolean,
    showAsterisk: boolean,
    error?: string,
    message?: string,
    type?: "text" | "email" | "password",
    minLength?: number,
    maxLength?: number
}

export default function TextInput({ nameId, legend, placeholder, required, showAsterisk, error, message, type, minLength, maxLength }: TextInputProps) {

    const [showPassword, setShowPassword] = useState(false)
    
    const toggleShowPassword = () => setShowPassword(prev => !prev)

    return (
        <div className={styles["text-input"]}>
            <label 
                htmlFor={nameId}
                className="text-preset-4"
            >{`${legend}`} {required && showAsterisk? <span style={{ color: "var(--asterik-color)" }}>*</span> : ""}</label>
            <div>
                <input 
                    type={type === "password" && showPassword ? "text" : type || "text"} 
                    id={nameId} 
                    name={nameId}
                    placeholder={placeholder} 
                    className={`text-preset-4-medium ${error ? styles["error"] : ""}`}
                    autoComplete="off"
                    minLength={minLength}
                    maxLength={maxLength}
                />
                {type === "password" && 
                    <button 
                        type="button" 
                        onClick={toggleShowPassword}
                    >
                        <img
                            src={showPassword ? "/assets/images/icon-hide-password.png" : "/assets/images/icon-show-password.png"}
                            alt={showPassword ? "Hide password" : "Show password"}
                        />
                    </button>
                }
            </div>
            {message && !error && <p className="text-preset-4-medium">{message}</p>}
            {error && <p className="text-preset-4-medium" style={{ color: "var(--error-color)" }}>{error}</p>}
        </div>
    )
}