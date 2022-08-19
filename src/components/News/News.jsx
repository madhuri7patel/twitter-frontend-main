import { SideNavbar } from "../sidenavbar/SideNavbar";
import "../News/news.css";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"


export const News = () => {

     let [list, setList] = useState([]);

    useEffect (() => {
        getNews()
       
    },[]);

    const getNews = () => {
         fetch(`https://kooappcloneapis.herokuapp.com/polls`)
        .then((d)=> d.json())
        .then((res)=>{
            setList(res)
            console.log(res);
        })
    }
    return (
        <div>
            <SideNavbar />
            <div className="middle">
                 <div className="nav">
                    <p style={{marginLeft:"9%"}}>For You</p>
                    <Link className="Link" to="/Explore/trending"><p>Trending</p></Link>
                    <Link className="Link" to="/Explore/news"><p>News</p></Link>
                    <Link className="Link" to="/Explore/sports"><p>Sports</p></Link>
                    <Link className="Link" to="/Explore/entertainment"><p>Entertainment</p></Link>
                </div>
                <div className="youbox">
                    {list.map((e) => (
                        <div  key={e.id}  className="show">  
                            <p className="author">{e.author}</p>
                            <p className="tit" style={{ marginTop:"-3px"}}>{e.title}</p>
                            <img src={e.urlToImage} alt=""/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}