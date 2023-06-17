import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import useClass from '../../../../hook/useClass';
import { Link } from 'react-router-dom';
import { FaAmazonPay, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyClass = () => {

    const [userClass,refetch] = useClass();


    const handleDeleteBtn = id => {

        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this class!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-rho-woad.vercel.app/class/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your class has been Removed.',
                                'success'
                            )

                        }

                    })
            }
        })

    }

    return (
        <div>
            <div className='bg-base-200'>
            <SectionTitle Title="Selected Classes" TitleDetails="Need to payment for enroll"></SectionTitle>
            </div>

            <div >

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='text-base'>
                            <tr>
                                <th>Class info</th>
                                <th>Instructor</th>
                                <th>Available</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userClass.map(item => <tr key={item._id} className=' '>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask  w-20 h-20">
                                                    <img className='rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150' src={item?.image} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-semibold">{item?.class_name}</div>
                                                <span className="badge badge-ghost badge-sm">Total Student: 50</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div>{item?.instructor_name}</div>
                                            <p className='text-xs'>{item?.instructor_email}</p>
                                        </div>
                                    </td>
                                    <td>
                                    <div className="badge badge-secondary">Seats:{item?.available_seats}</div>
                                    </td>
                                    <td><p className='badge bg-green-800 text-slate-50'>$ {item.price}</p></td>

                                    <th>
                                        <button className="btn btn-ghost bg-slate-50 text-black block m-1"><FaAmazonPay></FaAmazonPay></button>
                                        <button onClick={() => handleDeleteBtn(item._id)} className="btn btn-ghost bg-red-700 text-white m-1"><FaTrashAlt></FaTrashAlt></button>
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

export default MyClass;