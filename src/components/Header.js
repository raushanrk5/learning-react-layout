import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import ContactsIcon from '@material-ui/icons/Contacts';
import Brightness7Icon from '@material-ui/icons/Brightness7';

function Header() {
    return (
        <header className='navbar'>
            <div className='navbar__title navbar__item'>Lo<Brightness7Icon />go</div>
            <div className='navbar__item'><HomeIcon/> Home</div>
            <div className='navbar__item'><InfoIcon/> About</div>
            <div className='navbar__item'><ContactsIcon/>Contact</div>        
        </header>
    )
}

export default Header

