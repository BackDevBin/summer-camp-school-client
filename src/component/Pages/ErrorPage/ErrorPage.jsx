import React from 'react';
import errorLogo from '../../../assets/error.png'
import { Link } from 'react-router-dom';
import { JackInTheBox } from 'react-awesome-reveal';


const ErrorPage = () => {

    
    
    return (
        <div className='h-screen w-full relative'>
            <div className='text-center space-y-5 absolute bottom-28 left-20 right-20'>
              <JackInTheBox> <img className='w-96 mx-auto' src={errorLogo} alt="" /></JackInTheBox>
               <h3 className='text-4xl'>Page not found</h3>
               <p className='text-gray-500'>The Page you are looking for doesn't exist or an error occurred. Please <Link to='/'><span className='text-xl text-green-600 font-semibold'>Go Back</span></Link>  </p>
            </div>
        </div>
    );
};

export default ErrorPage;