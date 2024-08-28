import axios from "axios";
import { useState } from "react";
import { baseURL, REGISTER } from "../../Api/Api";
import LoadingSubmit from "../../Compoenets/Loading/Loading";
import { Form } from "react-bootstrap";


import Cookie from "cookie-universal";
import {  useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  // cookie
  const cooki = Cookie();
  // Loading
   const[loading , setLoading]=useState(false);
  // ERR
   const [err , setErr]=useState("");
   // navigate
   const navigate = useNavigate();
   function handelChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  
  async function signUp(e) {
    e.preventDefault();
    setLoading(true);    
    try{
     const res =  await axios.post(`${baseURL}/${REGISTER}`,form);
       setLoading(false);
       const token = res.data.token;
       debugger
       cooki.set("Bearer" , token);
       navigate("/dashboard/users");
       
    }
    catch(err){
      setLoading(false);
      console.log(err);
      
      if(err.response.status===422){
        setErr("Email Has Been Already Taken")
      }else{
        setErr("Intrenal Server ERR")
      }
    }
  }
  return (
    <>
      {loading && <LoadingSubmit />}
      <div className="container">
        <div className="row" style={{height:"100vh"}}>
          <Form className="form" onSubmit={signUp}>
          <div className="custom-form">
            <h1>Register Now</h1>
            <Form.Group className="form-custom" controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handelChange}
                  required
                  placeholder="Enter your Name..."
                />
              </Form.Group>
              <Form.Group className="form-custom" controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handelChange}
                  required
                  placeholder="Enter your Email..."
                />
              </Form.Group>

              <Form.Group className="form-custom" controlId="password">
                <Form.Label>password:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handelChange}
                  required
                  placeholder="Enter your password..."
                />
              </Form.Group>

              <button className="btn btn-primary" type="submit">
                Register
              </button>
              <div className="google-btn">
                <a href={`http://127.0.0.1:8000/login-google`}>
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                      alt="google"
                    />
                  </div>
                  <p className="btn-text">
                    <b>sign with google</b>
                  </p>
                </a>
                
              </div>
              {err !== "" && <span className="error">{err}</span>}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
