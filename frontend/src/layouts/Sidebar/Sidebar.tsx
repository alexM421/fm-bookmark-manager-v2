import styles from './Sidebar.module.css'
import { useThemeContext } from '../../contexts/theme/ThemeContext'
import { Link, useLocation } from 'react-router-dom'
import IconHome from '../../assets/IconHome'
import IconArchive from '../../assets/IconArchive'
import Tag from './Tag/Tag'
import type { TagType } from '../HomeLayout/HomeLayout'
import IconClose from '../../assets/IconClose'
import { useWindowResizeListener } from '../../hooks/useWIndowResizeListener'
import useHandleClickOutside from '../../hooks/useHandleClickOutside'
import { useRef } from 'react'

type SidebarProps = {
    tags: TagType[]
    setTags: React.Dispatch<React.SetStateAction<TagType[]>>
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
    sidebarOpen: boolean
}

export default function Sidebar({ tags, setTags, setSidebarOpen, sidebarOpen }: SidebarProps) {

    const { theme } = useThemeContext()

    const { windowWidth } = useWindowResizeListener()

    const handleTagClick = (tagName: string) => {
        setTags(prevTags => prevTags.map(tagObject => tagObject.name === tagName ? { ...tagObject, checked: !tagObject.checked } : tagObject))
    }

    const { pathname } = useLocation()

    //handle the click outside for screen size less than 1440px
    const sidebarRef = useRef<HTMLDivElement>(null)
    useHandleClickOutside(sidebarRef, () => setSidebarOpen(false))
    
    return (
        <>
            {windowWidth < 1440 && sidebarOpen && (
                <div className={styles["sidebar-background"]} onClick={() => setSidebarOpen(false)}></div>
            )}
            <div ref={sidebarRef} className={`${styles["sidebar"]} ${sidebarOpen ? styles["sidebar-open"] : ""}`}>
                {windowWidth < 1440 && 
                    <button className={styles["sidebar-close-button"]} onClick={() => setSidebarOpen(false)}>
                        <IconClose />
                    </button>
                }
                <img src={theme === "light" ? "/assets/images/logo-light-theme.svg" : "/assets/images/logo-dark-theme.svg"} alt="logo" />
                <div className={styles["sidebar-content"]}>
                    <div className={styles["sidebar-categories"]}>
                        <Link to="/" className={pathname === "/" ? styles["sidebar-category-active"] : ""}>
                            <IconHome />
                            <p className="text-preset-3">Home</p>
                        </Link>
                        <Link to ="/archived" className={pathname === "/archived" ? styles["sidebar-category-active"] : ""}>
                            <IconArchive />
                            <p className="text-preset-3">Archived</p>
                        </Link>
                    </div>
                    <div className={styles["sidebar-tags"]}>
                        <h2 className="text-preset-5">TAGS</h2>
                        <div className={styles["sidebar-tags-list"]}>
                            {tags.map((tag) => (
                                <Tag key={tag.name} {...tag} onClick={() => handleTagClick(tag.name)} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}