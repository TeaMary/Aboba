import React from 'react';

//css
import './Profile.css';

//imgs
import avatar from './assets/img/avatar.png'

const Profile = () => {
	return (
		<div className='profile__container'>
			<img src={avatar} alt='Loading..' className='avatar'/>
			<div className='profile__text'>
				<p>Евгений Васильевич Струганков</p>
				<div className='info__container'>
					<p>Энергетик</p>
					<p>Рабочий цех</p>
					<p>Странный завод</p>
				</div>
			</div>
		</div>
	)
}

export default Profile;