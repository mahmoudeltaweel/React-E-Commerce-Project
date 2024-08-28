import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import Loading from "../../Compoenets/Loading/Loading";
import { useEffect, useState } from "react";
import { USER } from "../../Api/Api";
import { Axios } from "../../Api/axios";

export default function RequireAuth(){
    const navigate=useNavigate();
    const [user , setuser]=useState("");
    useEffect(()=>{
        Axios.get(`/${USER}`)
        .then((data)=>setuser(data.data))
        .catch(()=>navigate("/login"))
    },[])
    
    const cookie=Cookie();
    const token = cookie.get("Bearer")
    return token ? (user ===""? (<Loading />):(<Outlet />) ):<Navigate to={"/Login"} />
    
}