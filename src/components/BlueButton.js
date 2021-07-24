import React from 'react';
import classes from './BlueButton.module.css';

const blueButton = ({buttonContent, onClick, width, height, radius}) => {
    return (
        <button className={classes.blueButton} onClick={onClick} style={{width, height, borderRadius: radius}}>
            {buttonContent}
        </button>
    )
}

export default blueButton;
