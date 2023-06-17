import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import useUsers from '../../../../hook/useUsers';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';

const ManageUser = () => {

    const [regUsers,refetch] = useUsers();

    const makeAdmin = id =>{
       fetch(`http://localhost:5000/users/admin/${id}`,{
        method: 'PATCH'
       })
       .then(res => res.json())
       .then(data =>{
        console.log(data);
        if(data.modifiedCount){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Admin Updated',
                showConfirmButton: false,
                timer: 1500
            })
        }
       })
    }

    return (
        <div>
            <div className='bg-base-200'>
            <SectionTitle Title="All Registered Users" TitleDetails="Mange users access roll"></SectionTitle>
            </div>
            <div>
            <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='text-base'>
                            <tr>
                                <th>Instructors Info</th> 
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                regUsers.map(item => <tr key={item._id} className=' '>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            {/* <div className="avatar">
                                                <div className="mask  w-20 h-20">
                                                    <img className='rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150' src={item?.image} alt="Avatar" />
                                                </div>
                                            </div> */}
                                            <div>
                                                <div className="font-semibold">{item?.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div>{item?.email}</div>
                                        </div>
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs normal-case bg-slate-50 text-black m-1">Instructors</button>
                                        <button onClick={()=>makeAdmin(item._id)} className="btn btn-ghost btn-xs normal-case bg-red-700 text-white m-1">Admin</button>
                                    </th>
                                </tr>)
                            }



                        </tbody>


                    </table>
                </div>
            </div>
            
        </div>
    );
};

export default ManageUser;