import {LOGO_URL} from "../utils/constants.js";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  
  const [btnName , setBtnName ] = useState("Login");
  const onlineStatus = useOnlineStatus();

    return ( <div className="header flex justify-between bg-orange-100 shadow" > 

    <div className="logo-container ">
           
            <img  className="logo w-[100px] h-[100px] p-4 m-4"  alt="logoimg"   src={LOGO_URL}/> 
           </div>
           <div className="nav-items p-3 flex items-center m-3">
          <ul className="flex gap-8 "> 
              <li> Online Status : { onlineStatus ? "🤢" : "😡"} </li>
              <li> <Link to = "/"> Home </Link> </li>
              <li> <Link to = "/about"> About Us </Link> </li> 
              <li> <Link to = "contact"> Contact Us </Link> </li>
              <li> Cart </li>
               <button className="" onClick={()=>{btnName === "Login" ?
                setBtnName( "Logout") : setBtnName( "Login") ; }}
                >
                   {btnName} 
                   </button> 

            </ul>
  
           </div>
          
              
              </div>);
  }

  export default Header;