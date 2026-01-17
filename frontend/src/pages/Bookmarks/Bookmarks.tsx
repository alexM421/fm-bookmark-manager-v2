import styles from "./Bookmarks.module.css"
import IconSort from "../../assets/IconSort"
import { useRef, useState } from "react"
import IconCheck from "../../assets/IconCheck"
import useHandleClickOutside from "../../hooks/useHandleClickOutside"
import BookmarkCard from "./BookmarkCard/BookmarkCard"
import data from "../../../data.json"

export default function Bookmarks() {

    const { bookmarks } = data

    const [sortBy, setSortBy] = useState<string>("most-recent")
    const [showSortOptions, setShowSortOptions] = useState<boolean>(false)


    const sortOptionsRef = useRef<HTMLDivElement>(null)
    const sortButtonRef = useRef<HTMLButtonElement>(null)
    useHandleClickOutside(sortOptionsRef, () => setShowSortOptions(false), sortButtonRef)

    const handleOptionClick = (option: string) => {
        setSortBy(option)
        setShowSortOptions(false)
    }

    return (    
        <div className={styles["bookmarks"]}>
            <div className={styles["bookmarks-header"]}>
                <h1 className="text-preset-1">All Bookmarks</h1>
                <div className={styles["bookmarks-header-sort"]}>
                    <button ref={sortButtonRef} onClick={() => setShowSortOptions(prev => !prev)}>
                        <IconSort />
                        <p className="text-preset-3">Sort by</p>
                    </button>
                    <div className={`${styles["bookmarks-header-sort-options"]} ${showSortOptions ? styles["show"] : ""}`} ref={sortOptionsRef}>
                        <button className={styles["bookmarks-header-sort-options-item"]} onClick={() => handleOptionClick("most-recent")}>
                            <p className="text-preset-3">Most Recent</p>
                            {sortBy === "most-recent" && <IconCheck />}
                        </button>
                        <button className={styles["bookmarks-header-sort-options-item"]} onClick={() => handleOptionClick("recently-visited")}>
                            <p className="text-preset-3">Recently Visited</p>
                            {sortBy === "recently-visited" && <IconCheck />}
                        </button>
                        <button className={styles["bookmarks-header-sort-options-item"]} onClick={() => handleOptionClick("most-visited")}>
                            <p className="text-preset-3">Most Visited</p>
                            {sortBy === "most-visited" && <IconCheck />}
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles["bookmarks-grid"]}>
                {bookmarks.map((bookmark) => (
                    <BookmarkCard key={bookmark.id} bookmark={bookmark} />
                ))}
            </div>
        </div>
    )
}