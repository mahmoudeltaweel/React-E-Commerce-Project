import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./bars.css";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Menu } from "../../Context/MenuContext";
import { WindoSize } from "../../Context/WindoContext";
export default function SideBar() {

    // usecontext menu
  const menu = useContext(Menu);
  const isopen = menu.isopen;

    // usecontext windoSize
    const windoContext=useContext(WindoSize);
    const windosize = windoContext.windoSize;
    

  return (
    <div className="side-bar pt-3" style={{
        left:windosize < "768" ?(isopen ?0:"-100%"):0 ,
        width:isopen?"240px" : "fit-content",
        position:windosize < "768" ? "fixed" : "sticky",
      }}
        >
      <NavLink
        to={"users"}
        className="d-flex align-items-center gap-2 side-bar-link"
      >
        <FontAwesomeIcon
          style={{ padding: isopen ? "10px 8px 10px 15px" : "10px 13px" }}
          className="iconuser"
          icon={faUsers}
        />
        <p className="m-0" style={{ display: isopen ? "block" : "none" }}>
          Users
        </p>
      </NavLink>
    </div>
  );
}
