import styles from './Checkbox.module.css'
import IconCheck from '../../assets/IconCheck'

type CheckboxProps = {
    id: string,
    checked: boolean,
    onClick: () => void
}

export default function Checkbox({ id, checked, onClick }: CheckboxProps) {
    return (
        <label className={styles["checkbox"]} htmlFor={id}>
            <IconCheck />
            <input type="checkbox" id={id} checked={checked} onChange={onClick} />
        </label>
    )
}