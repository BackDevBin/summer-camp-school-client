import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Register = () => {
    const [show, setShow] = useState(false);

    const { createUser, logOut, userUpdateData } = useContext(AuthContext);

    // useTitle("Register");


    const handleSignUpForm = (event) => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;
        const name = form.name.value;
        const photo = form.image.value;


        createUser(email, pass)
            .then(result => {
                const logUser = result.user;
                form.reset();


                userUpdateData(logUser, name, photo)
                    .then(() => {

                    }).catch((error) => {
                        console.log(error);
                    });

                logOut();

                Swal.fire({
                    title: 'Congratulations!!! Your account has been successfully created',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
            })
            .catch(error => {

                Swal.fire({
                    title: 'Opps !!! Registration Unsuccessful',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Continue'
                })
            })

    }





    return (
        <div className='w-full'>

            <div className='mx-auto my-8 py-10 px-9 w-1/2 text-center space-y-5 border rounded-lg '>
                <h3 className='text-xl'>Create Account</h3>
                <form onSubmit={handleSignUpForm} className='space-y-5'>
                    <input type="text" placeholder="Full Name" name='name' className="input input-bordered  block w-full  " />
                    <input type="email" placeholder="Your Email" name='email' className="input input-bordered  block w-full  " required />
                    <input type="text" placeholder="Photo Url" name='image' className="input input-bordered  block w-full  " required />
                    <div>
                        <input type={show ? "text" : "password"} placeholder="Password" name='password' className="input input-bordered  block w-full " required />
                        <p onClick={() => setShow(!show)} className='text-start text-sm text-stone-500'><small>
                            {
                                show ? <span className="link link-hover">Hide Password</span> : <span className="link link-hover">Show Password</span>
                            }
                        </small></p>

                    </div>
                    <div className='flex mx-auto space-x-3 md:w-72'>
                        <button className="btn btn-outline w-full normal-case">Create</button>
                    </div>
                    <div className='text-sm '>
                        <span>Already have an account? </span>
                        <span className="underline"> <Link to='/login'>Please Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;