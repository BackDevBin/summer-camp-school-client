import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const PopularClass = () => {

    const [classes, setClasses] = useState([]);


    useEffect(() => {
        fetch('https://summer-camp-server-rho-woad.vercel.app/popular')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])


    return (
        <div>
            <SectionTitle TitleDetails="Effective, Proven Training Methods" Title="Popular Classes"></SectionTitle>
            <div className='grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 sm:mx-2 my-8'>
                {
                    classes.map(sport => <div key={sport._id} className="card w-auto bg-base-100 shadow-xl">
                        <figure><img className='md:h-60 rounded-t-lg' src={sport.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {sport.class_name}
                                <div className="badge badge-secondary">Popular</div>
                            </h2>
                            <p>{sport.description}</p>

                            <div className="card-actions">
                                <div className="badge badge-outline text-xs">Total Student: {sport.total_students} </div>
                                <div className="badge badge-outline text-xs">{sport.available_seats} Seats Available</div>
                            </div>
                        </div>
                    </div>)
                }


            </div>


        </div>
    );
};

export default PopularClass;