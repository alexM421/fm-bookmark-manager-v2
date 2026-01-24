import Sidebar from '../Sidebar/Sidebar'
import styles from './HomeLayout.module.css'
import Navbar from '../Navbar/Navbar'
import Bookmarks from '../../pages/Bookmarks/Bookmarks'
import { useState } from 'react'

export type TagType = {
    name: string
    counter: number
    checked: boolean
}

export default function HomeLayout() {

    //handle the sidebar
    const [sidebarOpen, setSidebarOpen] = useState(false)

    //handle the search
    const [search, setSearch] = useState("")

    //handle the tags
    const [tags, setTags] = useState<TagType[]>([{
        name: 'tag-001',
        counter: 10,
        checked: false,
    }])

    
    return (
        <div className={styles["home-layout"]}>
            <Sidebar tags={tags} setTags={setTags} setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            <div>
                <Navbar search={search} setSearch={setSearch} setSidebarOpen={setSidebarOpen} />
                <Bookmarks search={search} tags={tags} />
            </div>
        </div>
    )
}