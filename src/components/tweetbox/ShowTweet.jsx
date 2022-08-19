import { useState, useEffect } from 'react';
import { TweetBox } from "./TweetBox";
import { ShowBox } from "./ShowBox";
import "../sidenavbar/Sidebar.css";



export const ShowTweet = () => {
    let [list, setList] = useState([]);
    
    useEffect (() => {
        getTodo()
    },[]);

    const getTodo = () => {
         fetch(`https://sushanttweet.herokuapp.com/user`)
        .then((d)=> d.json())
        .then((res)=>{
            setList(res)
        })
    }

    const handleAddLike = (likes, _id) => {
        const postData = {
            likes: likes + 1,
        };
        console.log(postData);
        fetch(`https://sushanttweet.herokuapp.com/user/${_id}`, {
            method: "PATCH",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(res._id);
                getTodo();
            })
            .catch((err) => {
                console.log(err);
            });
    }
      

    return (
        <div>
            <TweetBox getTodo={getTodo} className="postbox" />
            <div>
                {list.map((e) => (
                    <ShowBox key={e.id} {...e} handleAddLike={handleAddLike}/>
                ))}
            </div>
        </div>
    )
}