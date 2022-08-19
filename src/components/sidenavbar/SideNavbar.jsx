import "../sidenavbar/Sidebar.css";
import { NavLink } from 'react-router-dom';
import { Happen } from "../Happen/Happen";

 export const SideNavbar = () => {
     return (
        <>
           <div>
              <div>
          <div className="sidebar">
             <NavLink className="side" to="/"><img src="https://img.icons8.com/fluency/35/000000/twitter.png" alt="" /></NavLink>
             <NavLink className="side" to="/home"><img src="https://img.icons8.com/ios/35/000000/home--v2.png" alt=""/></NavLink>
             <NavLink className="side" to="/Explore"><img src="https://img.icons8.com/fluency-systems-filled/35/000000/hashtag-large.png" alt="" /></NavLink>
             <NavLink className="side" to="/Notifications"><img src="https://img.icons8.com/material/35/000000/bell--v1.png" alt="" /></NavLink>
             <NavLink className="side" to="/Messages"><img src="https://img.icons8.com/ios/35/000000/filled-message.png" alt="" /></NavLink>
             <NavLink className="side" to="/Profile"><img src="https://img.icons8.com/material-outlined/35/000000/gender-neutral-user.png" alt="" /></NavLink>
             <NavLink className="side" to="/More"><img src="https://img.icons8.com/material-outlined/35/000000/connection-status-off.png" alt="" /></NavLink>
             <NavLink className="side" to="/Tweet"><img style={{ width: "40%", marginLeft: "58%" }} src="https://user-images.githubusercontent.com/87421852/150114309-cd5ca5a0-0943-4510-8480-247ec617e70e.png" alt="" /></NavLink>
             <NavLink className="side" to="/Accounts"><img style={{ width: "20%", marginLeft: "70%",marginTop:"16%" }} src="https://img.icons8.com/office/45/000000/person-male-skin-type-3.png" alt="" /></NavLink>
         </div>
         <div>
            <div className="navbar">
                  <p> Home  <img style={{marginLeft:"80%"}} src="https://img.icons8.com/material-outlined/24/000000/multiple-stars.png" alt=""/></p>           
            </div>
              
               <div>
                   <div className="rightbar">
                           <form className="nosubmit">
                              <input style={{backgroundColor:"#EFF1F1"}} className="nosubmit" type="search" placeholder="Search Twitter"/>
                          </form>
                             <Happen/>
                       </div> 
                    </div>  
                  
                 </div>
              </div>
           </div>
        
      </>
  );
}