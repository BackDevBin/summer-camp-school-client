import React, { useState } from 'react';
// import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../AuthProvider/AuthProvider';
// import useTitle from '../../../CustomHooks/useTitle';
// import Swal from 'sweetalert2';

const Login = () => {
    const [show, setShow] = useState(false);
    

    // const {GoogleLogin,createLogin} = useContext(AuthContext);


    // const navigate = useNavigate();

    // let location = useLocation();

    // const from = location.state?.from?.pathname || '/';

    // useTitle("Login");

    const handleLogin =(event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;

        

    //     createLogin(email, pass)
    //     .then(result =>{
    //         const logUser = result.user;
    //         form.reset();
    //         navigate(from);

    //         Swal.fire({
    //             title: 'Login successful !!!',
    //             text: 'Do you want to continue',
    //             icon: 'success',
    //             confirmButtonText: 'Continue'
    //           })
    //     })
    //     .catch(error =>{
    //         Swal.fire({
    //             title: 'Opps !!! Login Unsuccessful',
    //             text: `${error.message}`,
    //             icon: 'error',
    //             confirmButtonText: 'Continue'
    //           })
    //     })
        
     }

     const loginGoogle = () =>{
        
    //     GoogleLogin()
    //     .then(result =>{
    //         const logUser = result.user;
    //         navigate(from);

    //         Swal.fire({
    //             title: 'Login successful !!!',
    //             text: 'Do you want to continue',
    //             icon: 'success',
    //             confirmButtonText: 'Continue'
    //           })
    //     })
    //     .catch(error =>{
            
    //         Swal.fire({
    //             title: 'Opps !!! Login Unsuccessful',
    //             text: `${error.message}`,
    //             icon: 'error',
    //             confirmButtonText: 'Continue'
    //           })
            
    //     })
    }
    

    return (
        <div className='w-full'>

            <div className='mx-auto my-8 py-10 px-9 w-80 text-center space-y-5 border rounded-lg '>
                <h3 className='text-xl'>Sign In</h3>
                <form onSubmit={handleLogin} className='space-y-5'>
                    <input type="email" placeholder="Email" name='email' className="input input-bordered input-accent  block w-full max-w-xs " required />
                    <div>
                        <input type={show ? "text" : "password"} placeholder="Password" name='password' className="input input-bordered input-accent block w-full max-w-xs" required />
                        <p onClick={() => setShow(!show)} className='text-start text-sm text-stone-500'><small>
                            {
                                show ? <span className="link link-hover">Hide Password</span> : <span className="link link-hover">Show Password</span>
                            }
                        </small></p>

                    </div>
                    <div className='flex mx-auto space-x-3 w-60'>
                        <input className="btn btn-outline  normal-case" type="submit" value="Login" />
                        <h3 className='p-3'>Or</h3>
                        <button onClick={loginGoogle} type='button' className="btn btn-outline  normal-case"><FaGoogle></FaGoogle> Google</button>
                    </div>
                    <div className='text-sm '>
                        <span>New Customer?</span>
                        <span className="underline"> <Link to='/register'>Create Account</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;