import styles from "./BookmarkCard.module.css"
/* Icons */
import IconCopy from "../../../assets/IconCopy"
import IconUnpin from "../../../assets/IconUnpin"
import IconPin from "../../../assets/IconPin"
import IconEdit from "../../../assets/IconEdit"
import IconUnarchive from "../../../assets/IconUnarchive"
import IconArchive from "../../../assets/IconArchive"
import IconDelete from "../../../assets/IconDelete"
import IconVisit from "../../../assets/IconVisit"
import IconMenuBookmark from "../../../assets/IconMenuBookmark"
/* React */
import { useRef, useState } from "react"
/* Hooks */
import useHandleClickOutside from "../../../hooks/useHandleClickOutside"
/* Contexts */
import { useToastContext } from "../../../contexts/toast/ToastContext"


export default function BookmarkCardMenu({ pinned, isArchived, url }: { pinned: boolean, isArchived: boolean, url: string }) {

    const { addToast } = useToastContext()

    //handle the menu click outside
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const menuButtonRef = useRef<HTMLButtonElement>(null)

    useHandleClickOutside(menuRef, () => setIsMenuOpen(false), menuButtonRef)

    //visit button
    const visit = <a href={url} target="_blank" className={styles["bookmark-card-main-header-menu-options-item"]}>
                <IconVisit />
                <p className="text-preset-5">Visit</p>
            </a>
     

    //copy URL button
    const copyURL = 
    <button 
        className={styles["bookmark-card-main-header-menu-options-item"]}
        onClick={() => {
            navigator.clipboard.writeText(url)
            console.log("URL copied to clipboard")
            addToast("URL copied to clipboard", "success")
        }}
    >
        <IconCopy />
        <p className="text-preset-5">Copy URL</p>
    </button>


    //pin button
    const pin = pinned
        ?
        <button className={styles["bookmark-card-main-header-menu-options-item"]}>
            <IconUnpin/>
            <p className="text-preset-5">Unpin</p>
        </button>
        :
        <button className={styles["bookmark-card-main-header-menu-options-item"]}>
            <IconPin/>
            <p className="text-preset-5">Pin</p>
        </button>


    //edit button
    const edit = !isArchived && <button className={styles["bookmark-card-main-header-menu-options-item"]}>
        <IconEdit />
        <p className="text-preset-5">Edit</p>
    </button>


    //archive button
    const archive = isArchived
        ?
        <button className={styles["bookmark-card-main-header-menu-options-item"]}>
            <IconUnarchive/>
            <p className="text-preset-5">Unarchive</p>
        </button>
        :
        <button className={styles["bookmark-card-main-header-menu-options-item"]}>
            <IconArchive/>
            <p className="text-preset-5">Archive</p>
        </button>


    //delete button
    const deleteBookmark = isArchived && 
        <button className={styles["bookmark-card-main-header-menu-options-item"]}>
            <IconDelete />
            <p className="text-preset-5">Delete</p>
        </button>


    return (
        <div className={styles["bookmark-card-main-header-menu-container"]}>

                <button className={styles["bookmark-card-main-header-menu"]} onClick={() => setIsMenuOpen(!isMenuOpen)} ref={menuButtonRef}>
                    <IconMenuBookmark />
                </button>

                <div className={`${styles["bookmark-card-main-header-menu-options"]} ${isMenuOpen ? styles["visible"] : ""}`} ref={menuRef}>
                    {visit}
                    {copyURL}
                    {pin}
                    {edit}
                    {archive}
                    {deleteBookmark}        
                </div>
            </div>
    )
}