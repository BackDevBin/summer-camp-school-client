import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const PopularInstructors = () => {

    const [classes, setClasses] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/popular')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <div>
            <SectionTitle Title="Our Popular Instructors" TitleDetails="Experienced Patience Energy Friendly"></SectionTitle>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 sm:mx-2 my-8'>
                {
                    classes.map(sport => <div key={sport._id} className="card w-auto bg-base-100 shadow-xl p-4">

                        <div className='flex items-center gap-2 '>
                            <img className='w-36 h-36 rounded-full' src={sport.instructor_image} alt="" />
                            <div>
                                <div>
                                <h2 className="card-title">
                                    {sport.instructor_name}
                                    <div className="badge badge-secondary">Popular</div>
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

export default PopularInstructors;