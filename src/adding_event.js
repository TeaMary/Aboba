import React, {useState} from 'react';

//styles
import './adding_event.css';

//imgs
import Logo from './assets/img/Logo.png';

const AddingEvent = () => {
	return(
        
		<div className='adding_event__screen'>
			
			<h1 className='adding_event__header'>Добавление мероприятия</h1>
			<div className='adding_event__box'>
				<input className='adding_event__1' placeholder='Название мероприятия'/>
				<input className='adding_event__2' placeholder='Вид мероприятия' />
                <input className='adding_event__3' placeholder='ЭП'/>
                <input className='adding_event__4' placeholder='ТЭР'/>
                <input className='adding_event__5' placeholder='Описание'/>
			</div>
			
			<button className='adding_event__button'>
                Добавить мероприятие
			</button>
			
		</div>
	)
}

export default AddingEvent;