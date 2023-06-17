import React, { useContext } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const ClassesPage = () => {
    const { user } = useContext(AuthContext);
    const classes = useLoaderData();

    const navigate = useNavigate();
    let location = useLocation();

    const HandleSelectBtn = (items) => {
        const { class_name, image, instructor_name, price,_id, available_seats,instructor_email } = items;
        if (user && user.email) {

           const selectClass = {selectClassId: _id,class_name, image, instructor_name,available_seats,instructor_email, price,email: user.email}

            fetch('https://summer-camp-server-rho-woad.vercel.app/class', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added into your dashboard',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })


        }else{
            Swal.fire({
                title: 'Please Login to select the class!',
                text: "You won't be able to Select without login!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state:{from: location}});
                }
              })
        }


    }


    return (
        <div className='mt-5'>
            <SectionTitle TitleDetails="Effective, Proven Training Methods" Title="Our All Class"></SectionTitle>
            <div className='grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 sm:mx-2 my-8'>
                {
                    classes.map(sport => <div key={sport._id} className={sport.available_seats === 0 ? "card w-auto bg-red-700  shadow-xl" : "card w-auto bg-base-100  shadow-xl"}>
                        <figure><img className='md:h-60 rounded-t-lg' src={sport.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {sport.class_name}
                                <div className="badge badge-secondary">${sport.price}</div>
                            </h2>
                            <p><span className='font-semibold'>Instructor:</span>  {sport.instructor_name}</p>
                            <div className="badge badge-outline text-xs">{sport.available_seats} Seats Available</div>
                            <button onClick={() => HandleSelectBtn(sport)} className="btn btn-outline text-xs mt-2">Select class</button>
                        </div>
                    </div>)
                }


            </div>


        </div>
    );
};

export default ClassesPage;