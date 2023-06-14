import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import slider1 from '../../../../assets/slider1.jpg'
import slider2 from '../../../../assets/slider2.jpeg'
import slider3 from '../../../../assets/slider3.jpeg'
import slider4 from '../../../../assets/slider4.jpg'
import slider5 from '../../../../assets/slider5.jpg'
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <Carousel className='text-center'>
                <div>
                    <img src={slider1} />
                    
                </div>
                <div>
                    <img src={slider2} />
                    
                </div>
                <div>
                    <img src={slider3} />
                    
                </div>
                <div>
                    <img src={slider4} />
                   
                </div>
                <div>
                    <img src={slider5} />
                    
                </div>
              
            </Carousel>
    );
};

export default Slider;