import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const Register = () => {
    const [show, setShow] = useState(false);

    const { createUser, logOut, userUpdateData } = useContext(AuthContext);


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()


      const onSubmit = (data) => {
        const email = data.email;
        const pass = data.password;
        const name = data.name;
        const photo = data.image;
        const ConformPass = data.conform;
        // console.log(name,email,pass,photo,ConformPass)

        if (pass === ConformPass) {
            createUser(email, pass)
                .then(result => {
                    const logUser = result.user;
                    
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
        } else {
            Swal.fire({
                title: 'Password Dose not match!!!',
                text: 'Check again',
                icon: 'error',
                confirmButtonText: 'Continue'
            })
        }
    }


  


    return (
        <div className='w-full'>

            <div className='mx-auto my-8 py-10 px-9 w-1/2 text-center space-y-5 border rounded-lg '>
                <h3 className='text-xl'>Create Account</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                    <input type="text" placeholder="Full Name" name='name' {...register("name")} className="input input-bordered  block w-full  " />
                    <input type="email" placeholder="Your Email" name='email' {...register("email")} className="input input-bordered  block w-full  " required />
                    <input type="text" placeholder="Photo Url" name='image' {...register("image")} className="input input-bordered  block w-full  " required />

                    <input type={show ? "text" : "password"} placeholder="Password" name='password' {...register("password",
                    {
                        minLength: 6,
                        // pattern: /(?=.*[0-9])(?=.*[A-Z])(?=.*[!#$%&? "])/
                    })} className="input input-bordered  block w-full " required />

                    {errors.password?.type === 'minLength' && <p className='text-red-600 text-start text-xs m-0 p-1'>Password must be 6 character</p>}
                    {/* {errors.password?.type === 'pattern' && <p className='text-red-600 text-start text-xs p-0'>Password must have at least one Upper case & Special characters & Digit</p>} */}


                    <div>
                        <input type={show ? "text" : "password"} placeholder="Conform Password" name='conform' {...register("conform")} className="input input-bordered  block w-full " required />
                        <p onClick={() => setShow(!show)} className='text-start text-sm'><small>
                            {
                                show ? <span className="link link-hover"><FaEyeSlash className='inline'></FaEyeSlash> Hide Password</span> : <span className="link link-hover"><FaEye className='inline'></FaEye> Show Password</span>
                            }
                        </small></p>
                    </div>

                    <div className='flex mx-auto space-x-3 md:w-72'>
                        <input className="btn btn-outline w-full normal-case" type="submit" value="Create" />
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