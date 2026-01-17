import styles from './Navbar.module.css'
import IconProfile from '../../assets/IconProfile'
import IconTheme from '../../assets/IconTheme'
import IconLogout from '../../assets/IconLogout'
import ThemeToggle from '../../contexts/theme/ThemeToggle/ThemeToggle'

type ProfileMenuProps = {
    name: string,
    email: string,
    profileMenuOpen: boolean
}

export default function ProfileMenu({ profileMenuOpen, name, email }: ProfileMenuProps) {


    return (
        <div className={`${styles["profile-menu"]} ${profileMenuOpen ? styles["profile-menu-open"] : ""}`}>
            <div className={styles["profile-menu-head"]}>
                <IconProfile />
                <div className={styles["profile-menu-head-info"]}>
                    <h2 className="text-preset-4">{name}</h2>
                    <p className="text-preset-4-medium">{email}</p>
                </div>
            </div>
            <div className={styles["profile-menu-theme"]}>
                <div className={styles["profile-menu-theme-legend"]}>
                    <IconTheme/>
                    <p className="text-preset-4">Theme</p>
                </div>
                <ThemeToggle />
            </div>
            <div className={styles["profile-menu-logout"]}>
                <button onClick={() => {}} >
                    <IconLogout/>
                    <p className="text-preset-4">Logout</p>
                </button>
            </div>
        </div>
    )   
}