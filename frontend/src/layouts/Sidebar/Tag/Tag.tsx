import styles from './Tag.module.css'
import Checkbox from '../../../shared/Checkbox/Checkbox'

export type TagProps = {
    name: string,
    counter: number,
    checked: boolean,
    onClick: () => void
}

export default function Tag({ name, counter, checked, onClick }: TagProps) {
    return (
        <div className={styles["tag"]}>
            <div className={styles["tag-select"]}>
                <Checkbox id={name} checked={checked} onClick={onClick} />
                <p className="text-preset-3">{name}</p>
            </div>
            <div className={styles["tag-counter"]}>
                <p className="text-preset-5">{counter}</p>
            </div>
        </div>
    )
}