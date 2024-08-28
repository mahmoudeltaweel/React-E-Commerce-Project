import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Axios } from "../../Api/axios";
import { baseURL, USER } from "../../Api/Api";
import axios from "axios";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";

export default function User() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password , setPassword]=useState("");
  const [role, setRole] = useState("");
  let id = window.location.pathname.split("/").slice(-1)[0];
  const cookie = Cookie();
  const token = cookie.get("Bearer");

  const navigate = useNavigate();
  async function handelSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${baseURL}/${USER}/add`,
        {
          name: name,
          email: email,
          password:password,
          role: role,
        },
        {
          headers: {
            Authorization: `Bearer ` + token,
          },
        }
      );
      navigate("/dashboard/users");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="bg-white p-2 w-100"> 
    <h2 style={{marginTop:"5px"}}>Add User</h2>
    <hr></hr>
    <Form onSubmit={handelSubmit} className="w-100 p-3 bg-white mx-2">
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your Name..."
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email..."
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>password:</Form.Label>
        <Form.Control
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password..."
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="role">
        <Form.Label>role:</Form.Label>
        <Form.Select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="" disabled>Select Role</option>
          <option value="1995">Admin</option>
          <option value="2001">User</option>
          <option value="1996">Writer</option>
        </Form.Select>
      </Form.Group>
      <button disabled={name.length >1 && email.length >1 && password.length >1 && role !=="" ? false : true } className="btn btn-primary">save</button>
    </Form>
    </div>
  );
}
