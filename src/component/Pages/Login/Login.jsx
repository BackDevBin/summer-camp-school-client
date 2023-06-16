import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';

const Login = () => {
    const [show, setShow] = useState(false);


    const { GoogleLogin, createLogin } = useContext(AuthContext);


    const navigate = useNavigate();

    let location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {

        const email = data.email;
        const pass = data.password;
        // console.log(email, pass)

        createLogin(email, pass)
            .then(result => {
                const logUser = result.user;
                navigate(from);

                Swal.fire({
                    title: 'Login successful !!!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
            })
            .catch(error => {
                Swal.fire({
                    title: 'Opps !!! Login Unsuccessful',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Continue'
                })
            })

    }

   

    const loginGoogle = () => {

        GoogleLogin()
            .then(result => {
                const logUser = result.user;
                navigate(from);

                Swal.fire({
                    title: 'Login successful !!!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
            })
            .catch(error => {

                Swal.fire({
                    title: 'Opps !!! Login Unsuccessful',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Continue'
                })

            })
    }




    return (
        <div className='w-full'>

            <div className='mx-auto my-8 py-10 px-9 w-80 text-center space-y-5 border rounded-lg '>
                <h3 className='text-xl'>Sign In</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                    <input type="email" placeholder="Email" name='email' {...register("email")} className="input input-bordered input-accent  block w-full max-w-xs " required />
                    <div>
                        <input type={show ? "text" : "password"} placeholder="Password" name='password' {...register("password",
                            {
                                minLength: 6
                            })} className="input input-bordered input-accent block w-full max-w-xs" required />
                        {errors.password?.type === 'minLength' && <p className='text-red-600 text-start text-xs m-0 p-1'>Password must be 6 character</p>}
                        <p onClick={() => setShow(!show)} className='text-start text-sm'><small>
                            {
                                show ? <span className="link link-hover"><FaEyeSlash className='inline'></FaEyeSlash> Hide Password</span> : <span className="link link-hover"><FaEye className='inline'></FaEye> Show Password</span>
                            }
                        </small></p>


                    </div>
                    <div className='flex mx-auto space-x-3 w-60'>
                        <input className="btn btn-outline  normal-case" type="submit" value="Login" />
                        <h3 className='p-3'>Or</h3>
                        <button onClick={loginGoogle} type='button' className="btn btn-outline  normal-case"><FaGoogle></FaGoogle> Google</button>
                    </div>
                    <div className='text-xs'>
                        <span>New to RoseValley?</span>
                        <span className="underline"> <Link to='/register'>Create Account</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;