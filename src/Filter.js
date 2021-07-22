import React from 'react';

//css
import './Filter.css';

const Filter = () => {
	return(
		<div className='filter__box'>
			<p>Фильтр</p>
			<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.447 20.905A.988.988 0 0014 20.02V14.7c0-.262.105-.514.293-.7l6.121-6.054a1.97 1.97 0 00.586-1.4V3.99A.993.993 0 0020 3H4c-.553 0-1 .442-1 .99v2.556c0 .525.211 1.029.586 1.4L9.707 14a.984.984 0 01.293.7v6.31c0 .735.782 1.213 1.447.884l2-.989z" fill="#000"/></svg>
		</div>
	)
}

export default Filter;