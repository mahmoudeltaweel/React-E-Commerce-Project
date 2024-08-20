import { useEffect, useState } from "react"
import { baseURL, USER , USERS } from "../../Api/Api"
import { Table } from "react-bootstrap";
import { Axios } from "../../Api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Cookie from "cookie-universal";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Users(){
  const[users , setusers]=useState([]);
  const[deleteuser , setDeleteUser]=useState(false);
  const[currentUser , setCurrentUser]=useState("");
  
    useEffect(()=>{
      Axios.get(`/${USERS}`)
        .then((data)=>setusers(data.data))
        .catch((err)=>console.log(err))
    },[deleteuser])
    useEffect(()=>{
      Axios.get(`/${USER}`)
        .then((res)=>setCurrentUser(res.data))
        .catch((err)=>console.log(err)
        )
    },[])
    const cookie = Cookie()
    const token =cookie.get("Bearer")
    async function handeldelete(id){
        try{
           const res = await axios.delete(`${baseURL}/${USER}/${id}` , {
              headers:{
                Authorization:"Bearer " + token
              }
            })
              setDeleteUser((prev) => !prev)
        }catch(err){
          console.log(err);
        }
    }
    const userFilter=users.filter((user)=>user.id !== currentUser.id)
    const userInfo = userFilter.map((item , index)=>
      <tr key={index}>
      <td>{index+1}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
        <div  className="d-flex gap-2 alin-items-center">
          <Link to={`${item.id}`} >
      <FontAwesomeIcon icon={faPenToSquare}  fontSize={"19px"} cursor={"pointer"} />
          
          </Link>
      <FontAwesomeIcon icon={faTrash} cursor={"pointer"} color="red" fontSize={"19px"} onClick={()=>handeldelete(item.id)} />
      </div>
      </td>
      
    </tr>
    )
    return(
      <div className="bg-white p-2 w-100"> 
      <h1>Users Page</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Num</th>
            <th>Name</th>
            <th>Email</th>
            <th>action</th>
          </tr>
        </thead>
          <tbody>
              {userInfo}
           </tbody>
        
      </Table>
      </div>
    );
}