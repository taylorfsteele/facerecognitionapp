import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.svg'
import './Logo.css';

const Logo = () => {
    return (
        <div className='pa3'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 5 }} style={{ height: 150, width: 150 }} >
                <div className='Tilt-inner pa3'>
                    <img style={{ paddingTop: '5px' }} src={brain} alt='Credit to Darius Dan' />
                </div>
            </Tilt>

        </div>
    );
}

export default Logo;