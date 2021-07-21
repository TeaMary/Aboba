import React from 'react';

//css
import './Header.css'

//imgs
import logo from './assets/img/Logo.png';

//components
import Profile from './Profile';

const Header = () => {
	return (
		<div className='header__container'>
			<img src={logo} alt='Loading...' className='header__logo'/>
			<Profile/>
		</div>
	)
}

export default Header;