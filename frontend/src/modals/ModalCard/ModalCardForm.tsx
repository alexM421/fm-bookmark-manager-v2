import TextInput from "../../shared/TextInput/TextInput"
import styles from "./ModalCard.module.css"

type ModalCardFormProps = {
    inputValues: { 
        title: string
        description: string
        url: string
        tags: string
    }
    setInputValues: React.Dispatch<React.SetStateAction<{ 
        title: string
        description: string
        url: string
        tags: string
    }>>
}

export default function ModalCardForm({ inputValues, setInputValues }: ModalCardFormProps) {

    return (
        <form>
            <TextInput 
                nameId="title"
                required={true}
                showAsterisk={true}
                type="text" 
                legend="Title"
                controlledObject={{
                    value: inputValues.title,
                    onChange: (e) => setInputValues({ ...inputValues, title: e.target.value })
                }}
            />
            <div className={styles["modal-card-form-textarea"]}>
                <label>Description <span style={{ color: "var(--asterik-color)" }}>*</span></label>
                <textarea 
                    value={inputValues.description} 
                    onChange={(e) => setInputValues({ ...inputValues, description: e.target.value })}
                />
                <p 
                    className="text-preset-5" 
                    style={{ 
                        color: inputValues.description.length > 280 
                            ? "var(--error-color)" 
                            : "var(--text-input-secondary-color)" 
                    }}
                >
                    {`${inputValues.description.length}/280`}
                </p>
            </div>
            <TextInput 
                nameId="url" 
                required={true} 
                showAsterisk={true} 
                type="url" 
                legend="Website URL" 
                controlledObject={{
                    value: inputValues.url,
                    onChange: (e) => setInputValues({ ...inputValues, url: e.target.value })
                }}
            />
            <TextInput 
                nameId="tags" 
                required={true} 
                showAsterisk={true} 
                type="text" 
                legend="Tags"
                placeholder="e.g. Design, Learning, Tools"
                controlledObject={{
                    value: inputValues.tags,
                    onChange: (e) => setInputValues({ ...inputValues, tags: e.target.value })
                }}
            />
        </form>
    )
}
