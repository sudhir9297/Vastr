import React from 'react';
import '../homepage/homepage.style.scss';

import Slider from '../../components/slider/slider.component'
import Directory from '../../components/directory/directory.component';


const Homepage =() => (
    <div className='homepage'>
        <Slider/>
        <Directory/> 
    </div>
);

export default Homepage;