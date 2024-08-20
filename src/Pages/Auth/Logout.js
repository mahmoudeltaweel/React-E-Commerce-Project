import Cookie from "cookie-universal";
import axios from "axios";
import { baseURL, LOGOUT } from "../../Api/Api";

export default function Logout(){
    const cookie=Cookie()
  async  function handelLogout(){
     try{
        await axios.get(`${baseURL}/${LOGOUT}`,{
            headers:{
                Authorization:"Bearer " + cookie.remove("Bearer")
            }
          })
            // .then((data)=>console.log(data.data))
            // window.location.pathname="/"
        }
        catch(err){console.log("done")}
    }
    return(
        <button onClick={handelLogout}> Logout </button>
    );
}