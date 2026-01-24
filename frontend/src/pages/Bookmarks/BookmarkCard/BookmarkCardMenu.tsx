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
/* Modals */
import { ArchiveModal, UnArchiveModal, DeleteModal, EditModal } from "../../../modals/ModalsAction"
/* Types */
import type { bookmark } from "../useBookmarksData"
/* Components */
import BookmarkCardMenuBtn from "./BookmarkCardMenuBtn"


export default function BookmarkCardMenu({ bookmark }: { bookmark: bookmark }) {

    const { addToast } = useToastContext()
    const { pinned, isArchived, url, title, description, tags } = bookmark

    const initialValues = {
        title,
        description,
        url,
        tags: tags.join(", ")
    }

    const [modalsDisplay, setModalsDisplay] = useState({
        archive: false,
        delete: false,
        edit: false
    })

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
        <BookmarkCardMenuBtn 
            icon={<IconCopy />}
            text="Copy URL"
            onClick={() => {
                navigator.clipboard.writeText(url)
                addToast("URL copied to clipboard", "copy")
                setIsMenuOpen(false)
            }}
        />


    //pin button
    const pin = pinned
        ?
        <BookmarkCardMenuBtn 
            icon={<IconUnpin />}
            text="Unpin"
            onClick={() => {
                //set the bookmark as unpinned
                addToast("Bookmark unpinned from top.", "pin")
                setIsMenuOpen(false)
            }}
        />
        :
        <BookmarkCardMenuBtn 
            icon={<IconPin />}
            text="Pin"
            onClick={() => {
                //set the bookmark as pinned
                addToast("Bookmark pinned to top.", "pin")
                setIsMenuOpen(false)
            }}
        />


    //edit button
    const edit = !isArchived && 
        <BookmarkCardMenuBtn 
            icon={<IconEdit />}
            text="Edit"
            onClick={() => {
                setModalsDisplay({ ...modalsDisplay, edit: true })
                setIsMenuOpen(false)
            }}
        />


    //archive button
    const archive = isArchived
        ?
        <BookmarkCardMenuBtn 
            icon={<IconUnarchive />}
            text="Unarchive"
            onClick={() => {
                //set the bookmark as unarchived
                setModalsDisplay({ ...modalsDisplay, archive: true })
                setIsMenuOpen(false)
            }}
        />
        :
        <BookmarkCardMenuBtn 
            icon={<IconArchive />}
            text="Archive"
            onClick={() => {
                //set the bookmark as archived
                setModalsDisplay({ ...modalsDisplay, archive: true })
                setIsMenuOpen(false)
            }}
        />


    //delete button
    const deleteBookmark = isArchived && 
        <BookmarkCardMenuBtn 
            icon={<IconDelete />}
            text="Delete"
            onClick={() => {
                setModalsDisplay({ ...modalsDisplay, delete: true })
                setIsMenuOpen(false)
            }}
        />


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


                {isArchived 
                    ? <UnArchiveModal 
                        modalDisplay={modalsDisplay.archive} 
                        setModalDisplay={(boolean) => setModalsDisplay({ ...modalsDisplay, archive: boolean })} 
                        onClick={() => {
                            addToast("Bookmark restored.", "unarchive")
                            setModalsDisplay({ ...modalsDisplay, archive: false })
                        }} 
                    /> 
                    : <ArchiveModal 
                        modalDisplay={modalsDisplay.archive} 
                        setModalDisplay={(boolean) => setModalsDisplay({ ...modalsDisplay, archive: boolean })} 
                        onClick={() => {
                            addToast("Bookmark archived.", "archive")
                            setModalsDisplay({ ...modalsDisplay, archive: false })
                        }} 
                />}

                <DeleteModal 
                    modalDisplay={modalsDisplay.delete} 
                    setModalDisplay={(boolean) => setModalsDisplay({ ...modalsDisplay, delete: boolean })} 
                    onClick={() => {
                        addToast("Bookmark deleted.", "delete")
                        setModalsDisplay({ ...modalsDisplay, delete: false })
                    }} 
                />

                <EditModal 
                    initialValues={initialValues} 
                    modalDisplay={modalsDisplay.edit} 
                    setModalDisplay={(boolean) => setModalsDisplay({ ...modalsDisplay, edit: boolean })} 
                    onClick={() => {
                    addToast("Bookmark edited.", "success")
                    setModalsDisplay({ ...modalsDisplay, edit: false })
                }} />

            </div>
    )
}