import React from 'react';
import Slider from './Slider/Slider';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import OurStory from './OurStory/OurStory';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
            <OurStory></OurStory>
        </div>
    );
};

export default Home;