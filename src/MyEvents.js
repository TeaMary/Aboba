import React from 'react';

//css
import './MyEvents.css';

//components
import Header from './Header';
import Filter from './Filter';

//libs
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const MyEvents = () => {
	var data = [
		{id: 1, name: 'Gob', value: '2'},
		{id: 2, name: 'Buster', value: '5'},
		{id: 3, name: 'George Michael', value: '4'}
	];
	return(
		<div>
			<Header/>
			<div className='myevents__container'>
				<div className='myevents__header'>
					<h1>Мои мероприятия</h1>
					<div className='myevents__buttons'>
						<Filter/>
						<button className='add__event__button'>
							<svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 1.167C6.913 1.167 1.167 6.912 1.167 14c0 7.087 5.746 12.833 12.833 12.833 7.088 0 12.833-5.745 12.833-12.833S21.088 1.167 14 1.167zm1.167 17.5a1.167 1.167 0 11-2.334 0v-3.5h-3.5a1.167 1.167 0 010-2.334h3.5v-3.5a1.167 1.167 0 112.334 0v3.5h3.5a1.167 1.167 0 110 2.334h-3.5v3.5z" fill="#fff"/></svg>
							<p>Добавить мероприятие</p>
						</button>
					</div>
				</div>

				{/* <table>
					<tr>
						<td>1</td>
						<td>2</td>
						<td>3</td>
					</tr>
					<tr>
						<td>1</td>
						<td>2</td>
						<td>3</td>
					</tr>
				</table> */}
			</div>
		</div>
	)
}

export default MyEvents;