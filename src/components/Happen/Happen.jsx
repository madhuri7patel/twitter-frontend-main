import{useState,useEffect} from "react"
import "./happen.css"

export const Happen = () => {
    let [news, setNews] = useState([]);

    useEffect (() => {
        getNews()
       
    },[]);

    const getNews = () => {
         fetch(`https://kooappcloneapis.herokuapp.com/exclusive`)
        .then((d)=> d.json())
        .then((res)=>{
            setNews(res)
        })
    }

    return (
        <div className="happenBox">
              <h2 style={{marginLeft:"6%",marginTop:"2%"}}>What Happening</h2>
            {news.map((e) => (
                  <div  key={e.id}  className="show">  
                    <p className="author">{e.author}</p>
                      <div className="alert">
                        <p className="title" style={{ marginTop:"-3px"}}>{e.title}</p>
                        <img src={e.urlToImage} alt=""/>
                    </div>
                </div>
            ))}
        </div>
    )
}