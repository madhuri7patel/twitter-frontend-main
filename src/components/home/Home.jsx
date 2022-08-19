import { SideNavbar } from "../sidenavbar/SideNavbar";
import { ShowTweet } from "../tweetbox/ShowTweet";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider"; 
import "../tweetbox//tweetbox.css";
import {Chat} from "../chat/chat"

export const Home = () => {
      const{token, handleToken} = useContext(AuthContext)
    return (
        <div>
            <SideNavbar />
            
            <div >
                <ShowTweet  />
            </div>

            <Chat/>
              
        </div>
    )
}