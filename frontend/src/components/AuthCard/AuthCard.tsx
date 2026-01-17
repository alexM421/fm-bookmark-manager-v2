//styles
import styles from './AuthCard.module.css'
//shared
import TextInput, { type TextInputProps } from '../../shared/TextInput/TextInput'
import Button from '../../shared/Button/Button'
//auth card data
import useAuthCardData from './useAuthCardData'
//react router
import { Link } from 'react-router-dom'

type AuthCardProps = {
    title: string
    description: string,
    links: {
        firstSentence: string,
        secondSentence: string,
        link: string
    }[],
    buttonText: string,
    textInputs: TextInputProps[]
}



export default function AuthCard({ title, description, textInputs, buttonText, links }: AuthCardProps) {

    const { logo, errors, action } = useAuthCardData(textInputs)

    return (
        <div className={styles["auth-card-wrapper"]}>
            <div className={styles["auth-card"]}>
                <img src={logo} alt="logo" />
                <div className={styles["auth-card-head"]}>
                    <h1 className="text-preset-1">{title}</h1>
                    <p className="text-preset-4-medium">{description}</p>
                </div>
                { textInputs.length > 0 && 
                    <form action={action} noValidate> 
                        {textInputs.map((textInput) => (
                            <TextInput
                                key={textInput.nameId}
                                nameId={textInput.nameId}
                                legend={textInput.legend}
                                placeholder={textInput.placeholder}
                                required={textInput.required}
                                showAsterisk={textInput.showAsterisk}
                                type={textInput.type}
                                error={errors[textInput.nameId] || ""}
                                minLength={textInput.minLength}
                                maxLength={textInput.maxLength}
                            />
                        ))}
                        <Button buttonText={buttonText} onClick={() => {}} />
                    </form>
                }

                { links.length > 0 && 
                <div className={styles["auth-card-links"]}>
                    {links.map((link) => (
                        <div className={styles["auth-card-link"]}>
                            <p className="text-preset-4-medium">
                                {link.firstSentence} 
                            </p>
                            <Link to={link.link} className="text-preset-4">{link.secondSentence}</Link>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    )
}