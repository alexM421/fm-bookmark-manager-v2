import type { ReactNode } from "react"
import styles from "./BookmarkCard.module.css"

type BookmarkCardMenuBtnProps = {
    icon: ReactNode,
    text: string,
    onClick: () => void
}

export default function BookmarkCardMenuBtn({ icon, text, onClick }: BookmarkCardMenuBtnProps) {
    return (
        <button 
            className={styles["bookmark-card-main-header-menu-options-item"]} 
            onClick={onClick}
        >
            {icon}
            <p className="text-preset-5">{text}</p>
        </button>
    )
}
