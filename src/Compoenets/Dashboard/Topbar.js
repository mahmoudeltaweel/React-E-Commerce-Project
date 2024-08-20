import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./bars.css"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { Menu } from "../../Context/MenuContext"


export default function Topbar(){
   const menu=useContext(Menu);
   const setIsOpen=menu.setIsOpen;
     
    return (
        <div className="top-bar d-flex justif-content-between align-items-center">
            <div className="d-flex align-items-center gap-4">
            <h3>E-commerce</h3>
            <FontAwesomeIcon onClick={()=>setIsOpen((prev)=> !prev)}  cursor={"pointer"} icon={faBars} />
            </div>
        </div>
    )
}