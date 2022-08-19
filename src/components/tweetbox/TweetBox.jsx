import { useState, useRef} from 'react';
import "./tweetbox.css"
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";


export const TweetBox = ({getTodo}) => {
  const [input, setInput] = useState("");
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);


 

  const sendPost = () => {
      const postData = {
      title: input,
      username: "fakeuser",
      image: selectedFile,
      likes:0
    };
    console.log(postData);
    fetch("https://sushanttweet.herokuapp.com/user", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        },
    });
    getTodo()
  }
  
    const handleChange = (e) => {
    setInput(e.target.value);
    };
    
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  

     return (
         <div className="boxTweet">
        <img style={{ width: "8%", marginLeft: "1%",marginTop:"15%",display: "inline-block",verticalAlign:"top" }} src="https://img.icons8.com/office/45/000000/person-male-skin-type-3.png" alt="" />
        <div>
            <input
            value={input}
            onChange={(e) => handleChange(e)}
            className="inputbox"
            type="text"
            placeholder="What's Happening?"
                 />
        <div style={{display: 'flex',marginLeft:"9%",gap:"5%"}}>  
            <div className="icon" onClick={() => filePickerRef.current.click()}>
            <input
              type="file"
              ref={filePickerRef}
              hidden
              onChange={addImageToPost}
            />
            <img className="Image" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/30/4a90e2/external-gallery-miscellaneous-kiranshastry-lineal-kiranshastry.png" alt="" />
                     </div>  
                     <div className="icon" onClick={() => filePickerRef.current.click()}>
            <input
              type="file"
              ref={filePickerRef}
              hidden
              onChange={addImageToPost}
            />
            <img className="Image" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/30/4a90e2/external-gallery-miscellaneous-kiranshastry-lineal-kiranshastry-1.png" alt=""/>
                     </div>
                       <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
            <img className="Image" src="https://img.icons8.com/ios/30/4a90e2/happy--v1.png" alt=""/>
          </div>

          <img className="Image" src="https://img.icons8.com/windows/30/4a90e2/poll-horizontal.png" alt=""/>


          {showEmojis && (
            <Picker
              onSelect={addEmoji}
              style={{
                position: "absolute",
                marginTop: "40px",
                marginLeft: 100,
                maxWidth: "520px",
                borderRadius: "17px",
              }}
              theme="dark"
            />
          )}
          <img className="Image" src="https://img.icons8.com/small/30/4a90e2/event-accepted.png" alt=""/>
         <button className="postButton" onClick={sendPost}>
              Tweet
          </button>
        
           </div>      
          < hr style={{color:"#EFF1F1"}}/>   
        </div>
        
        </div>
    )
}