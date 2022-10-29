import React from 'react';
import ColorHOC from './ColorHOC';
import './App.css'

const colorChange = () => {
    return (
        <div className='bg-random'>
            <h2>1st Component: Refresh page to change background color</h2>
        </div>
    )
}

export default ColorHOC(colorChange);