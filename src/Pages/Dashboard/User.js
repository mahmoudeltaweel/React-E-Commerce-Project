import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Axios } from "../../Api/axios";
import { baseURL, USER } from "../../Api/Api";
import axios from "axios";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";

export default function User(){
    const[name , setName]=useState("");
    const[email , setEmail]=useState("");
    let id = window.location.pathname.split( "/" ).slice(-1)[0];
    const cookie = Cookie();
    const token =cookie.get("Bearer");

    const navigate = useNavigate();
    useEffect(()=>{
        Axios.get(`/${USER}/${id}`)
        .then((data)=>{
            setName(data.data.name)
            setEmail(data.data.email)
    })
    },[])
   async function handelSubmit(e){
        e.preventDefault();        
        try{
           const res = await axios.post(`${baseURL}/${USER}/edit/${id}`,
            {
                name:name,
                email:email
            }
            ,{
            headers:{
                Authorization:`Bearer `+ token
            }
        }
           )
           navigate("/dashboard/users")
        }catch(err){
            console.log(err);
        }

    }
    return(
        <Form onSubmit={handelSubmit} className="w-100 p-3 bg-white mx-2">
            <Form.Group className="mb-3"  controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control 
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  required
                  placeholder="Enter your Name..."
                />
              </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                  placeholder="Enter your email..."
                />
              </Form.Group>
              <button className="btn btn-primary">save</button>
        </Form>
    );
}