import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const ClassesPage = () => {
    const classes = useLoaderData();
    return (
        <div className='mt-5'>
            <SectionTitle TitleDetails="Effective, Proven Training Methods" Title="Our All Class"></SectionTitle>
            <div className='grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 sm:mx-2 my-8'>
                {
                    classes.map(sport => <div key={sport._id} className={sport.available_seats ===0 ? "card w-auto bg-red-700  shadow-xl": "card w-auto bg-base-100  shadow-xl"}>
                        <figure><img className='md:h-60 rounded-t-lg' src={sport.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {sport.class_name}
                                <div className="badge badge-secondary">${sport.price}</div>
                            </h2>
                            <p><span className='font-semibold'>Instructor:</span>  {sport.instructor_name}</p>
                            <div className="badge badge-outline text-xs">{sport.available_seats} Seats Available</div>
                            <button className="btn btn-outline text-xs mt-2">Select class</button>
                        </div>
                    </div>)
                }


            </div>


        </div>
    );
};

export default ClassesPage;