import React,{useState} from 'react'


export default function Textformd(props) {
   const [text, setText] = useState('Enter text here');
  
  const handleUpClick=()=>{
    let nayi = text.toUpperCase();
    setText(nayi);
    props.showAlert("converted to UpperCase");
  }
  const clickforlower=()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to LowerCase");
  }
  const removeExtraSpace=()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra spaces has been Removed!");
  }
  const copytext = ()  =>{
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied");
  }
    const handleOnChange=(event)=>{
    console.log("on change")
    setText(event.target.value)
  }
 
  return (
<>
   <div className="container">
     <h1>{props.heading}</h1>
      <div className="us">
        <textarea  
          value={text}
          onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} 
          id="mybox"
          rows="9"/>
      </div>
      
           
    </div>
    <div className="btn">
        <button className=" btn btn1" onClick={handleUpClick}>convert to uppercase</button>
           <button className="  btn btn2" onClick={clickforlower}>convert to lowercase</button>
           <button className=" btn  btn3" onClick={copytext}>Copy Text</button> 
           <button className=" btn  btn4" onClick={removeExtraSpace}>remove extra spacet</button>    

      </div>
 <div className='containerr2'>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes to read</p>

<h3>Preview</h3>
      <p>{text.length>0? text:" write something to preview"}</p>
    </div>
</>  
    
      )
};