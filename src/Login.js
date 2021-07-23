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

	const [username, setUsername] = useState(false)
	const [password, setPassword] = useState(false)

	const [authorized, setAuthorized] = useState(false)

	const auth = (username, password) => {
		if (!username){
			console.log("Haven't username")
		} else if (!password){
			console.log("Haven't password")
		} else {
			fetch("http://tl.h30.ru/api/login",
				{method: "POST",
					headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
					body: encodeURI('username=' + username + '&password=' + password )})
				.then((data) => setAuthorized(data.status === 200))
				.catch((e) => console.log(e))
		}
	}

	return(
	<div>
		<svg className='login_sticks_right' width="492" height="1080" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="12" height="562" rx="6" transform="matrix(-1 0 0 1 327 396)" fill="url(#paint0_linear)" fill-opacity=".3"/><rect width="14" height="563" rx="7" transform="matrix(-1 0 0 1 469 455)" fill="url(#paint1_linear)" fill-opacity=".3"/><rect width="14" height="562" rx="7" transform="matrix(-1 0 0 1 14 583)" fill="url(#paint2_linear)" fill-opacity=".3"/><rect width="11" height="562" rx="5.5" transform="matrix(-1 0 0 1 250 156)" fill="url(#paint3_linear)" fill-opacity=".3"/><rect width="13" height="563" rx="6.5" transform="matrix(-1 0 0 1 413 98)" fill="url(#paint4_linear)" fill-opacity=".3"/><rect width="13" height="563" rx="6.5" transform="matrix(-1 0 0 1 363 -108)" fill="url(#paint5_linear)" fill-opacity=".3"/><rect width="14" height="562" rx="7" transform="matrix(-1 0 0 1 492 -101)" fill="url(#paint6_linear)" fill-opacity=".3"/><rect width="12" height="563" rx="6" transform="matrix(-1 0 0 1 58 200)" fill="url(#paint7_linear)" fill-opacity=".3"/><rect width="11" height="564" rx="5.5" transform="matrix(-1 0 0 1 184 -20)" fill="url(#paint8_linear)" fill-opacity=".3"/><rect width="11" height="564" rx="5.5" transform="matrix(-1 0 0 1 202 658)" fill="url(#paint9_linear)" fill-opacity=".3"/><rect width="14" height="563" rx="7" transform="matrix(-1 0 0 1 377 601)" fill="url(#paint10_linear)" fill-opacity=".3"/><rect width="14" height="563" rx="7" transform="matrix(-1 0 0 1 120 326)" fill="url(#paint11_linear)" fill-opacity=".3"/><defs><linearGradient id="paint0_linear" x1="6" y1="0" x2="6" y2="562" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear" x1="7" y1="0" x2="7" y2="563" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint2_linear" x1="7" y1="0" x2="7" y2="562" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint3_linear" x1="5.5" y1="0" x2="5.5" y2="562" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint4_linear" x1="6.5" y1="0" x2="6.5" y2="563" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint5_linear" x1="6.5" y1="0" x2="6.5" y2="563" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint6_linear" x1="7" y1="0" x2="7" y2="562" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint7_linear" x1="6" y1="0" x2="6" y2="563" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint8_linear" x1="5.5" y1="0" x2="5.5" y2="564" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint9_linear" x1="5.5" y1="0" x2="5.5" y2="564" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint10_linear" x1="7" y1="0" x2="7" y2="563" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint11_linear" x1="7" y1="0" x2="7" y2="563" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs></svg>
		<svg className='login_sticks_left'  width="492" height="1080" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="12" height="562" rx="6" transform="matrix(-1 0 0 1 327 396)" fill="url(#paint0_linear)" fill-opacity=".3"/><rect width="14" height="563" rx="7" transform="matrix(-1 0 0 1 469 455)" fill="url(#paint1_linear)" fill-opacity=".3"/><rect width="14" height="562" rx="7" transform="matrix(-1 0 0 1 14 583)" fill="url(#paint2_linear)" fill-opacity=".3"/><rect width="11" height="562" rx="5.5" transform="matrix(-1 0 0 1 250 156)" fill="url(#paint3_linear)" fill-opacity=".3"/><rect width="13" height="563" rx="6.5" transform="matrix(-1 0 0 1 413 98)" fill="url(#paint4_linear)" fill-opacity=".3"/><rect width="13" height="563" rx="6.5" transform="matrix(-1 0 0 1 363 -108)" fill="url(#paint5_linear)" fill-opacity=".3"/><rect width="14" height="562" rx="7" transform="matrix(-1 0 0 1 492 -101)" fill="url(#paint6_linear)" fill-opacity=".3"/><rect width="12" height="563" rx="6" transform="matrix(-1 0 0 1 58 200)" fill="url(#paint7_linear)" fill-opacity=".3"/><rect width="11" height="564" rx="5.5" transform="matrix(-1 0 0 1 184 -20)" fill="url(#paint8_linear)" fill-opacity=".3"/><rect width="11" height="564" rx="5.5" transform="matrix(-1 0 0 1 202 658)" fill="url(#paint9_linear)" fill-opacity=".3"/><rect width="14" height="563" rx="7" transform="matrix(-1 0 0 1 377 601)" fill="url(#paint10_linear)" fill-opacity=".3"/><rect width="14" height="563" rx="7" transform="matrix(-1 0 0 1 120 326)" fill="url(#paint11_linear)" fill-opacity=".3"/><defs><linearGradient id="paint0_linear" x1="6" y1="0" x2="6" y2="562" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear" x1="7" y1="0" x2="7" y2="563" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint2_linear" x1="7" y1="0" x2="7" y2="562" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint3_linear" x1="5.5" y1="0" x2="5.5" y2="562" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint4_linear" x1="6.5" y1="0" x2="6.5" y2="563" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint5_linear" x1="6.5" y1="0" x2="6.5" y2="563" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint6_linear" x1="7" y1="0" x2="7" y2="562" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint7_linear" x1="6" y1="0" x2="6" y2="563" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint8_linear" x1="5.5" y1="0" x2="5.5" y2="564" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint9_linear" x1="5.5" y1="0" x2="5.5" y2="564" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint10_linear" x1="7" y1="0" x2="7" y2="563" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="paint11_linear" x1="7" y1="0" x2="7" y2="563" gradientUnits="userSpaceOnUse"><stop stop-color="#0094FF"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs></svg>
		{authorized ? (<div>Вы авторизованны</div>) : (
			<div className='login__screen'>
				<img src={Logo} className='logo' alt='Loading...'/>
					<h1 className='login__header'>Вход</h1>
					<div className='login__box'>
						<div className='input__box'>
							<input className='login__id' placeholder='ID'
								   onChange={(t) => setUsername(t.target.value)}/>
							<svg className='input_icon' width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.958 21.125c2.528-1.083 4.153-1.986 4.875-2.708 1.084-1.084-2.166-1.084-2.166-6.5C8.667 8.306 10.11 6.5 13 6.5c2.889 0 4.333 1.806 4.333 5.417 0 5.416-3.25 5.416-2.166 6.5.722.722 2.347 1.625 4.875 2.708" stroke="#898989" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 23.833c5.983 0 10.833-4.85 10.833-10.833 0-5.983-4.85-10.833-10.833-10.833C7.017 2.167 2.167 7.017 2.167 13c0 5.983 4.85 10.833 10.833 10.833z" stroke="#898989" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</div>
						<div className='input__box'>
							<input className='login__password'
								   onChange={(t) => setPassword(t.target.value)}
								   placeholder='Пароль' type={canView ? 'text':'password'}/>
							<svg onClick={onClickEye} className='input_icon-show' width="27" height="27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.719 13.5a4.219 4.219 0 11-8.438 0 4.219 4.219 0 018.438 0z" fill="#898989"/><path d="M0 13.5s5.063-9.281 13.5-9.281C21.938 4.219 27 13.5 27 13.5s-5.063 9.281-13.5 9.281C5.062 22.781 0 13.5 0 13.5zm13.5 5.906a5.906 5.906 0 100-11.812 5.906 5.906 0 000 11.812z" fill="#898989"/></svg>
							<svg className='input_icon' width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.583 11.917H5.417V22.75h15.166V11.917zM13 3.25a5.417 5.417 0 015.417 5.417v3.25H7.583v-3.25A5.417 5.417 0 0113 3.25z" stroke="#898989" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</div>
						<div className='buttons'>
							<button className='login__button' onClick={() => auth(username, password)}>Вход</button>
							<a href='/' className='forgot__button'>Забыли пароль?</a>
						</div>
					</div>
				</div>)
		}
		</div>
	)
}

export default Login;