import { Outlet } from "react-router-dom";
import SideBar from "../../Compoenets/Dashboard/SideBar";
import Topbar from "../../Compoenets/Dashboard/Topbar";
import "./dashboard.css"

export default function Dashboard(){
    return(
        <div className="position-relative ">
            <Topbar />
            <div className="dashboard d-flex  gap-2" style={{marginTop:"70px"}}>
            <SideBar />
            <Outlet />
            </div>
        </div>
    );
}