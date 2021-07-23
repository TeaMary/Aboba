import React, {useState} from 'react';
import { TextField } from '@material-ui/core';

//styles
import './ChangeEvent.css';

//components
import Header from './Header';

const ChangeEvent = () => {
	const [EPcount, setEPcount] = useState(1)
	const onClickEP = () => {
		setEPcount(EPcount+1)
	}
	const renderEP = () => {
		return(
			<div>
				<TextField 
					label="ЭП" 
					id="EP"
					variant="outlined"
					className='changeEvent__input'
				/>
				<svg onClick={onClickEP} className='changeEvent__plus' width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5.5a1.063 1.063 0 011.063 1.063v9.874h9.874a1.062 1.062 0 110 2.126h-9.875v9.874a1.062 1.062 0 11-2.124 0v-9.875H1.562a1.062 1.062 0 110-2.124h9.876V1.562A1.062 1.062 0 0112.5.5z" fill="#0094FF" stroke="#0094FF"/></svg>
			</div>
		)
	}

	const [FERcount, setFERcount] = useState(1)
	const onClickFER = () => {
		setFERcount(FERcount+1)
	}
	const renderFER = () => {
		return(
			<div>
				<TextField 
					label="ТЭР" 
					id="FER"
					variant="outlined"
					className='changeEvent__input'
				/>
				<svg onClick={onClickFER} className='changeEvent__plus' width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5.5a1.063 1.063 0 011.063 1.063v9.874h9.874a1.062 1.062 0 110 2.126h-9.875v9.874a1.062 1.062 0 11-2.124 0v-9.875H1.562a1.062 1.062 0 110-2.124h9.876V1.562A1.062 1.062 0 0112.5.5z" fill="#0094FF" stroke="#0094FF"/></svg>
			</div>
		)
	}
	return(
		<div>
			<Header/>
			<div className='changeEvent__screen'>
				<div className='changeEvent_text'>
					<svg width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.75 6.333L11.083 19 23.75 31.667" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
					<h1>Изменение мероприятия</h1>
				</div>
				
				<TextField 
					label="Название мероприятия" 
					className='changeEvent__input'
					id="name"
					variant="outlined"
				/>
				<TextField 
					label="Вид мероприятия" 
					id="type"
					variant="outlined"
					className='changeEvent__input'
				/>
				{[...Array(EPcount)].map(() => renderEP())}
				{[...Array(FERcount)].map(() => renderFER())}
				<TextField 
					label="Описание" 
					id="description"
					variant="outlined"
					className='changeEvent__input'
				/>

				<button onClick={console.log('fafa')} className='changeEvent__button'>
					Добавить мероприятие
				</button>
			</div>
		</div>
	)
}

export default ChangeEvent;