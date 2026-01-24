import styles from "./Bookmarks.module.css"
import IconSort from "../../assets/IconSort"
import IconCheck from "../../assets/IconCheck"
import BookmarkCard from "./BookmarkCard/BookmarkCard"
import useBookmarksData from "./useBookmarksData"
import type { TagType } from "../../layouts/HomeLayout/HomeLayout"

export default function Bookmarks({ search, tags }: { search: string, tags: TagType[] }) {

    const { 
        showSortOptions, setShowSortOptions, 
        sortButtonRef, sortOptionsRef, 
        handleOptionClick, 
        sortBy, filteredBookmarks 
    } = useBookmarksData({ search, tags })

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
                {filteredBookmarks.map((bookmark) => (
                    <BookmarkCard key={bookmark.id} bookmark={bookmark} />
                ))}
            </div>
        </div>
    )
}