import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Instructors = () => {
    const classes = useLoaderData();
    return (
        <div>
            <SectionTitle Title="Meet Our Instructors" TitleDetails="Experienced Patience Energy Friendly"></SectionTitle>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 sm:mx-2 my-8'>
                {
                    classes.map(sport => <div key={sport._id} className="card w-auto bg-base-100 shadow-xl p-4">

                        <div className='flex items-center justify-between '>
                            <img className='w-36 h-36 rounded-full' src={sport.instructor_image} alt="" />
                            <div>
                                <div>
                                    <h2 className="card-title">
                                        {sport.instructor_name}
                                    </h2>
                                    <div className="card-actions">
                                        <div className="badge badge-outline text-xs">{sport.class_name} </div>
                                    </div>
                                </div>
                                <p className='mt-3'>Total Student: {sport.total_students} </p>
                                <p>Email: {sport.instructor_email}</p>
                            </div>
                        </div>


                    </div>)
                }
            </div>


        </div>
    );
};

export default Instructors;