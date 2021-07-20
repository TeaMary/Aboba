import React, {useState} from 'react';

//styles
import './Login.css';

//imgs
import Logo from './assets/img/Logo.png';

const Login = () => {
	const [canView, setCanView] = useState(false)
	const onClickEye = () => {
		setCanView(!canView)
	}
	return(
		<div className='login__screen'>
			<img src={Logo} className='logo' alt='Loading...'/>
			<h1 className='login__header'>Вход</h1>
			<div className='login__box'>
				<input className='login__id' placeholder='ID'/>
				<input className='login__password' placeholder='Пароль' type={canView ? 'text':'password'}/>
			</div>
			<button className='login__button'>
				Вход
			</button>
		</div>
	)
}

export default Login; 