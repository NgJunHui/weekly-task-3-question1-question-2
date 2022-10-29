import React from 'react';
import ColorHOC from './ColorHOC';
import './App.css'

const colorChangeTwo = () => {
    return (
        <div className='bg-random'>

            <h2>Component 2: Refresh page to change background color</h2>

        </div>
    )
}

export default ColorHOC(colorChangeTwo);