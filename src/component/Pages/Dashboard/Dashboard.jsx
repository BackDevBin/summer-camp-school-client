import { useContext, useEffect, useState } from "react";
import { FaHome, FaLayerGroup, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useUsers from "../../../hook/useUsers";

const Dashboard = () => {

    const {user} =useContext(AuthContext);
    const [regUsers] = useUsers();

    const [admin, setAdmin]=useState(false);

    console.log(user.email);

    useEffect(() => {
        const adminFind = regUsers.find(item=>{
            console.log(item.email);
            if(item.email === user.email){
                
                setAdmin(true);
            }
        });
      },[]);

    

    

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">

                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-56 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to="/"><FaHome></FaHome> Home</Link></li>
                    {
                        admin ? <><li><Link to="users"><FaLayerGroup></FaLayerGroup>Manage Users</Link></li>
                            <li><Link><FaLayerGroup></FaLayerGroup> Manage Classes</Link></li>
                        </> : <>
                            <li><Link to="myclass"><FaLayerGroup></FaLayerGroup> My Class</Link></li>
                            <li><Link><FaLayerGroup></FaLayerGroup> My Enrolled Classes</Link></li>
                            <li><Link><FaWallet></FaWallet>Payment History</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;