import "./chat.css"
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {useContext, useEffect, useState} from "react"
import { AuthContext } from "../contexts/AuthContextProvider";
import { AiOutlineSend } from "react-icons/ai";
import { BsChevronDoubleDown } from "react-icons/bs";

const client = new W3CWebSocket('wss://web-chat123.herokuapp.com/');


export const Chat = ()=>{

    const{token, handleToken} = useContext(AuthContext)

    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState("")
    useEffect(()=>{client.onopen = () => {
      console.log("hello")
      console.log('WebSocket Client Connected');
    }},[])
    
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('got reply! ', dataFromServer);
      if (dataFromServer.type === "message") {
        
          setMessages(
             [...messages,
            {
              msg: dataFromServer.msg,
              user: dataFromServer.user
            }]
          )
        
      }
    };

   const handlechange = (e)=>{
setMessage(e.target.value)
console.log(message)
   }

   const onbuttonClicked = ()=>{
     console.log(client.readyState, client.OPEN)
    if (client.readyState === client.OPEN){
    client.send(JSON.stringify({
      type: "message",
      msg: message,
      user: token.user.name
    }))
    setMessage("")
  }else{
    console.log("not work")
  }

   }
    return<div className="header">
        <div style={{fontSize:"25px",textAlign:"left", margin:"10px",width:"100%"}}>Messages <BsChevronDoubleDown  style={{float:"right", marginRight:"20px"}}/></div>
        <div className="chat">
            <div style={{height:"300px", backgroundColor:"white", overflow:"auto"}}>
           {messages?.map((u,i)=>{if(u.user === token.user.name){
             return <div  key={i} style={{minHeight:"50px", width:"100%",textAlign:"left"}}> <span style={{fontSize:"20px",fontWeight:"800"}}>{u.user}</span>{"--"}<span style={{fontSize:"15px"}}> {"  "+u.msg}</span><br /></div>}
             else{
              return<div  key={i} style={{minHeight:"50px", width:"100%", textAlign:"right"}}><span style={{fontSize:"15px"}}> {u.msg}</span>{"--"} <span style={{fontSize:"20px",fontWeight:"800"}}>{u.user}</span><br /></div>
             }
           })}
           
            </div>
            <input type="text" onChange={handlechange} value={message} style={{width:"80%",height:"25px", float:"left",margin:"5px"}} name="message" />
            <AiOutlineSend style={{margin:"5px"}} size={30} onClick={onbuttonClicked}/>
        </div>
    </div>
}