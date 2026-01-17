import { useThemeContext } from "../../contexts/theme/ThemeContext"
import { useActionState, useCallback, useMemo } from "react"
import type { TextInputProps } from "../../shared/TextInput/TextInput"

type Errors = Record<string, string>

export default function useAuthCardData(textInputs: TextInputProps[]) {

    //gets the theme
    const { theme } = useThemeContext()

    const logo = useMemo(() => theme === "light" ? "./assets/images/logo-light-theme.svg" : "./assets/images/logo-dark-theme.svg", [theme])

    //handles the form action
    const initialErrors = useMemo<Errors>(() => {
        const errors: Errors = {}
        for (const input of textInputs) {
          errors[input.nameId] = ""
        }
        return errors
      }, [textInputs])
        
    const handleFormAction = useCallback((previousState: Errors, formData: FormData): Errors => {

        const errors: Errors = {}
        
        for(const textInput of textInputs){
        
            const textInputValue =  String(formData.get(textInput.nameId)) || ""
            
            //checks for required validation
            if(!textInputValue && textInput.required){
                errors[textInput.nameId] = `${textInput.legend} is required`
            }
            
            //checks for email validation
            else if(textInput.type === "email"){
                if(!textInputValue.includes("@") || !textInputValue.includes(".")){
                    errors[textInput.nameId] = "Invalid email address"
                }
            }

            //checks for length validation
            else if(textInput.minLength !== undefined && textInputValue.length < (textInput.minLength)){
                errors[textInput.nameId] = `${textInput.legend} must be at least ${textInput.minLength} characters long`
            }else if(textInput?.maxLength !== undefined && textInputValue.length > (textInput.maxLength)){
                errors[textInput.nameId] = `${textInput.legend} must be less than ${textInput.maxLength} characters long`
            }
            
            //if no errors, set the error to an empty string
            else errors[textInput.nameId] = ""
        }

        return errors
    }, [textInputs])

    const [errors, action] = useActionState(handleFormAction, initialErrors)
    

    return { 
        logo, 
        errors, action 
    }
}