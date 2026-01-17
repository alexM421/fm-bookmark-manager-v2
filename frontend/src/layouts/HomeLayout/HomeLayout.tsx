import Sidebar from '../Sidebar/Sidebar'
import styles from './HomeLayout.module.css'
import Navbar from '../Navbar/Navbar'
import Bookmarks from '../../pages/Bookmarks/Bookmarks'

export default function HomeLayout() {
    return (
        <div className={styles["home-layout"]}>
            <Sidebar />
            <div>
                <Navbar />
                <Bookmarks />
            </div>
        </div>
    )
}