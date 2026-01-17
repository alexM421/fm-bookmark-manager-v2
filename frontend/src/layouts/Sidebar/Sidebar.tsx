import styles from './Sidebar.module.css'
import { useThemeContext } from '../../contexts/theme/ThemeContext'
import { Link, useLocation } from 'react-router-dom'
import IconHome from '../../assets/IconHome'
import IconArchive from '../../assets/IconArchive'
import { useState } from 'react'
import Tag, { type TagProps } from './Tag/Tag'

export default function Sidebar() {

    const { theme } = useThemeContext()
    const [tags, setTags] = useState<TagProps[]>([{
        name: 'tag-001',
        counter: 10,
        checked: false,
        onClick: () => {
            console.log('clicked')
            setTags(prevTags => prevTags.map(tag => tag.name === 'tag-001' ? { ...tag, checked: !tag.checked } : tag))
        }
    }])

    const { pathname } = useLocation()
    
    return (
        <div className={styles["sidebar"]}>
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
                            <Tag key={tag.name} {...tag} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}