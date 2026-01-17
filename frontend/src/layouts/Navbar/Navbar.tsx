import styles from './Navbar.module.css'
import Button from '../../shared/Button/Button'
import IconProfile from '../../assets/IconProfile'
import TextInput from '../../shared/TextInput/TextInput'
import IconSearch from '../../assets/IconSearch'
import ProfileMenu from './ProfileMenu'
import { useState } from 'react'

export default function Navbar() {

    const [profileMenuOpen, setProfileMenuOpen] = useState(false)
    const [search, setSearch] = useState("")
    
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
                <Button buttonText="+ Add Bookmark" onClick={() => {}} />
                <div className={styles["navbar-profile"]}>
                    <button onClick={() => setProfileMenuOpen(prev => !prev)}>
                        <IconProfile />
                    </button>
                    <ProfileMenu name="John Doe" email="john.doe@example.com" profileMenuOpen={profileMenuOpen} />
                </div>
            </div>
        </div>
    )
}