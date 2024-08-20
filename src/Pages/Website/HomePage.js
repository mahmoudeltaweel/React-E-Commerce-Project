import { Link } from "react-router-dom";
import Logout from "../Auth/Logout";

export default function Home(){
    return(
        <div>
           <Link to={"login"} ><button>Login</button></Link>
           <Link to={"register"} ><button>Register</button></Link>
           <Logout />
        </div>
    )
}


