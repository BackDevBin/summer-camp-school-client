import { FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
                    <li><Link to="myclass">My Class</Link></li>
                    <li><Link><FaWallet></FaWallet>Payment</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;