import Sidebar from '../Sidebar/Sidebar'
import styles from './HomeLayout.module.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function HomeLayout() {
    return (
        <div className={styles["home-layout"]}>
            <Sidebar />
            <div>
                <Navbar />
                <Outlet/>
            </div>
        </div>
    )
}