import React from 'react';

const SectionTitle = ({Title, TitleDetails }) => {

    return (
        <div className='border-b border-t w-fit mx-auto text-center p-4 pb-1'>
            <h3 className='text-3xl font-semibold'>{Title}</h3>
            <p className='text-sm text-orange-500 p-1'>--- {TitleDetails} ---</p>
        </div>
    );
};

export default SectionTitle;