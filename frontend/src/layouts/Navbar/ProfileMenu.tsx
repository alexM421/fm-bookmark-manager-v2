import styles from './Navbar.module.css'
import IconProfile from '../../assets/IconProfile'
import IconTheme from '../../assets/IconTheme'
import IconLogout from '../../assets/IconLogout'
import ThemeToggle from '../../contexts/theme/ThemeToggle/ThemeToggle'
import { useRef } from 'react'
import useHandleClickOutside from '../../hooks/useHandleClickOutside'

type ProfileMenuProps = {
    name: string,
    email: string,
    profileMenuOpen: boolean,
    profileBtnRef: React.RefObject<HTMLButtonElement | null>,
    setProfileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ProfileMenu({ profileMenuOpen, name, email, profileBtnRef, setProfileMenuOpen }: ProfileMenuProps) {

    
    const profileRef = useRef<HTMLDivElement>(null)

    useHandleClickOutside(profileRef, () => setProfileMenuOpen(false), profileBtnRef)

    return (
        <div ref={profileRef} className={`${styles["profile-menu"]} ${profileMenuOpen ? styles["profile-menu-open"] : ""}`}>
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