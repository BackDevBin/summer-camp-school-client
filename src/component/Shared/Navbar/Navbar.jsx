import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import webLogo from '../../../assets/weblogo.png'
import { AuthContext } from '../../../AuthProvider/AuthProvider';


const Navbar = () => {   //Home, Instructors, Classes, Dashboard 

    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { console.log("out") })
            .catch((error) => console.log(error))
    }



    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link> Instructors</Link> </li>
                            <li><Link>Classes</Link> </li>
                            <li><Link> Dashboard</Link> </li>
                        </ul>
                    </div>
                    <Link to="/"><img className='w-20 md:mx-5' src={webLogo} alt="" /></Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li className='hover:bg-pink-500 rounded-md hover:text-slate-100'><Link to="/">Home</Link> </li>
                        <li className='hover:bg-pink-500 rounded-md hover:text-slate-100'><Link to="/instructors"> Instructors</Link> </li>
                        {
                            user ? <><li className='hover:bg-pink-500 rounded-md hover:text-slate-100'><Link to="/dashboard"> Dashboard </Link> </li></> : <></>
                        }
                        <li className='hover:bg-pink-500 rounded-md hover:text-slate-100'><Link to="/classes"> Classes</Link> </li>
                    </ul>
                </div>
                <div className="navbar-end">

                <div className='flex items-center'>
                    {
                        user ? <>
                            <div className="tooltip tooltip-bottom tooltip-secondary" data-tip={user?.displayName}>
                                <img className='rounded-full w-12 mx-2' src={user?.photoURL} alt="" />
                            </div>
                            <button onClick={handleLogOut} className="btn btn-outline btn-secondary normal-case md:me-5">Logout</button>

                        </> : <Link to="/login"><button className="btn btn-outline btn-secondary normal-case md:me-5">Login</button></Link>
                    }
                </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;