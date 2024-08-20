import axios from "axios";
import { useEffect } from "react";
import { baseURL, GOOGLECALLBACK } from "../../Api/Api";
import { useLocation } from "react-router-dom";
import Cookie from "cookie-universal"

export default function GoogleCallBack(){
    const cooki = Cookie();
    const location =useLocation();
    useEffect(() => {
        async function googleCall() {
            try{
             const res = await axios.get(`${baseURL}/${GOOGLECALLBACK}${location.search}`);
             const token = res.data.access_token;
             cooki.set("Bearer", token)
            }catch(err){
                console.log(err);
            }
        }
        googleCall();
       },[]) ;
    return(
      <h1>Test</h1>
    );
}