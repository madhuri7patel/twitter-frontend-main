import "./showbox.css"

import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { AuthContext } from "../contexts/AuthContextProvider";
import { useContext,useState } from "react";

export const ShowBox = ({
    _id,
    title,
    image,
    likes,
    handleAddLike
}) => {
    // const { token, handleToken } = useContext(AuthContext)
    const token = localStorage.getItem("email")
    console.log(token)
    const username = localStorage.getItem("userid");

    return (
        <>
        <div className="postdiv">
        <span style={{display: 'flex',gap:"2%"}}><img style={{height:"30%",marginLeft:"2%",marginTop:"1%"}} src="https://img.icons8.com/office/45/000000/person-male-skin-type-3.png" alt=""/><p className="name">{token}<img src="https://img.icons8.com/ios-filled/25/4a90e2/verified-account.png" alt=""/></p></span>
        <p className="tweet">{title}</p>       
        <img className="postimg" src={image} alt="pic" />
        <div className="post__footer">
            <ChatBubbleOutlineIcon className="a" fontSize="medium" style={{marginLeft:"16%"}} />
            <RepeatIcon className="b" fontSize="medium" />
           <span className="IconSpan"><FavoriteBorderIcon
            onClick={() => handleAddLike(likes, _id)}         
            className="c" fontSize="medium" /><p className="likeIcon">{likes}</p></span>
            <PublishIcon className="a" fontSize="medium" />
        </div>
    </div>
        </>
    )
}