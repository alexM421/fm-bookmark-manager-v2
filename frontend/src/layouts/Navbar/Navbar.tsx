import styles from './Navbar.module.css'
import Button from '../../shared/Button/Button'
import IconProfile from '../../assets/IconProfile'
import TextInput from '../../shared/TextInput/TextInput'
import IconSearch from '../../assets/IconSearch'
import ProfileMenu from './ProfileMenu'
import { useRef, useState } from 'react'
import { AddModal } from '../../modals/ModalsAction'

export default function Navbar({ search, setSearch }: { search: string, setSearch: React.Dispatch<React.SetStateAction<string>> }) {

    const [profileMenuOpen, setProfileMenuOpen] = useState(false)
    const [addModalOpen, setAddModalOpen] = useState(false)
    const profileBtnRef = useRef<HTMLButtonElement>(null)
    
    return (
        <div className={styles["navbar"]}>
            <TextInput 
                nameId="search"  
                placeholder="Search" 
                required={false} 
                showAsterisk={false} 
                type="text" 
                icon={<IconSearch />}   
                controlledObject={{ value: search, onChange: (e) => setSearch(e.target.value) }}
            />
            <div className={styles["navbar-right"]}>
                <Button buttonText="+ Add Bookmark" onClick={() => setAddModalOpen(true)} />
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