import React from 'react';

//css
import './Profile.css';

//imgs
import avatar from './assets/img/avatar.png'

const Profile = () => {
	return (
		<div className='profile__container'>
			<p className='profile__text'>Струганков Е.В.</p>
			<img src={avatar} alt='Loading..' className='avatar'/>
		</div>
	)
}

export default Profile;