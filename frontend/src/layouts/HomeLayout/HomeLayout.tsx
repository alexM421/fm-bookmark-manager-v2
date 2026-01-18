import Sidebar from '../Sidebar/Sidebar'
import styles from './HomeLayout.module.css'
import Navbar from '../Navbar/Navbar'
import Bookmarks from '../../pages/Bookmarks/Bookmarks'
import { useState } from 'react'

export default function HomeLayout() {


    //handle the search
    const [search, setSearch] = useState("")

    
    return (
        <div className={styles["home-layout"]}>
            <Sidebar />
            <div>
                <Navbar search={search} setSearch={setSearch} />
                <Bookmarks search={search} />
            </div>
        </div>
    )
}