import styles from './BookmarkCard.module.css'
import IconCreatedAt from '../../../assets/IconCreatedAt'
import IconViews from '../../../assets/IconViews'
import IconLastVisited from '../../../assets/IconLastVisited'
import IconPin from '../../../assets/IconPin'
import IconMenuBookmark from '../../../assets/IconMenuBookmark'

type Bookmark = {
    id: string
    title: string
    url: string
    favicon: string
    description: string
    tags: string[]
    pinned: boolean
    isArchived: boolean
    visitCount: number
    createdAt: string
    lastVisited: string | null
}

export default function BookmarkCard({ bookmark }: { bookmark: Bookmark }) {

    const { title, url, favicon, description, tags, pinned, visitCount, createdAt, lastVisited } = bookmark



    return (
        <div className={styles["bookmark-card"]}>

            <div className={styles["bookmark-card-main"]}>
                <div className={styles["bookmark-card-main-header"]}>
                    <img src={favicon} alt={title} />
                    
                    <div className={styles["bookmark-card-main-header-details"]}>
                        <h3 className="text-preset-2">{title}</h3>
                        <p className="text-preset-5">{url}</p>
                    </div>
                    
                    <button className={styles["bookmark-card-main-header-menu"]}>
                        <IconMenuBookmark />
                    </button>
                </div>
                
                <hr />
                
                <p className="text-preset-4-medium">{description}</p>
                
                <div className={styles["bookmark-card-main-tags"]}>
                    {tags.map((tag) => (
                        <span key={tag} className="text-preset-5">{tag}</span>
                    ))}
                </div>
            </div>
            
            <div className={styles["bookmark-card-footer"]}>
                
                <div className={styles["bookmark-card-footer-left"]}>
                    <div className={styles["bookmark-card-footer-item"]}>
                        <IconViews />
                        <p className="text-preset-5">{visitCount}</p>
                    </div>
                    <div className={styles["bookmark-card-footer-item"]}>
                        <IconLastVisited />
                        <p className="text-preset-5">{lastVisited}</p>
                    </div>
                    <div className={styles["bookmark-card-footer-item"]}>
                        <IconCreatedAt />
                        <p className="text-preset-5">{createdAt}</p>
                    </div>
                </div>  
                {pinned && <IconPin />}
            </div>
        </div>
    )
}