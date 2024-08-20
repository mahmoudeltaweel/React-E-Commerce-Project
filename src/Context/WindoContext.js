import { createContext, useEffect, useState } from "react"

export const WindoSize=createContext(null);
export default function WindoContext({children}){
    const[windoSize,setWindoSize]=useState(window.innerWidth);
    useEffect(()=>{
        function setWindoWidth(){
            setWindoSize(window.innerWidth)
        }
        window.addEventListener("resize" ,setWindoWidth)
        return()=>{
            window.removeEventListener("resize" , setWindoWidth)
        }
    },[])
    
    return<WindoSize.Provider value={{windoSize,setWindoSize}}>
        {children}
    </WindoSize.Provider>
}