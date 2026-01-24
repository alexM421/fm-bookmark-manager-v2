import styles from './Navbar.module.css'
import Button from '../../shared/Button/Button'
import IconProfile from '../../assets/IconProfile'
import TextInput from '../../shared/TextInput/TextInput'
import IconSearch from '../../assets/IconSearch'
import ProfileMenu from './ProfileMenu'
import { useRef, useState } from 'react'
import { AddModal } from '../../modals/ModalsAction'
import { useWindowResizeListener } from '../../hooks/useWIndowResizeListener'
import IconMenuHamburger from '../../assets/IconMenuHamburger'

export default function Navbar({ search, setSearch, setSidebarOpen }: { 
    search: string, 
    setSearch: React.Dispatch<React.SetStateAction<string>>, 
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    const [profileMenuOpen, setProfileMenuOpen] = useState(false)
    const [addModalOpen, setAddModalOpen] = useState(false)
    const profileBtnRef = useRef<HTMLButtonElement>(null)
    const { windowWidth } = useWindowResizeListener()
    
    return (
        <div className={styles["navbar"]}>
            <div className={styles["navbar-left"]}>

                {windowWidth < 1440 && (
                    <button className={styles["navbar-sidebar-button"]} onClick={() => setSidebarOpen(prev => !prev)}>
                        <IconMenuHamburger />
                    </button>
                )}
                <TextInput 
                    nameId="search"  
                    placeholder="Search" 
                    required={false} 
                    showAsterisk={false} 
                    type="text" 
                    icon={<IconSearch />}   
                    controlledObject={{ value: search, onChange: (e) => setSearch(e.target.value) }}
                />

            </div>
            <div className={styles["navbar-right"]}>
                <Button buttonText={windowWidth < 768 ? "+" : "+ Add Bookmark"} onClick={() => setAddModalOpen(true)} />
                <div className={styles["navbar-profile"]}>
                    <button ref={profileBtnRef} onClick={() => setProfileMenuOpen(prev => !prev)}>
                        <IconProfile />
                    </button>
                    <ProfileMenu name="John Doe" email="john.doe@example.com" profileMenuOpen={profileMenuOpen} profileBtnRef={profileBtnRef} setProfileMenuOpen={setProfileMenuOpen}/>
                </div>
            </div>
            <AddModal modalDisplay={addModalOpen} setModalDisplay={setAddModalOpen} onClick={() => {
                setAddModalOpen(false)
            }} />
        </div>
    )
}