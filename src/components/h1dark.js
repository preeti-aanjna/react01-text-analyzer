import React, { useState } from 'react'

export default function H1dark() {

    const[mys,setMys] = useState({
        color : 'black',
        backgroundColor :'white'
    })
    const [btntext,setBtntext]= useState("enable dark mode")
    const toggleBtn =()=>{
        if(mys.color === 'black'){
            setMys({color : 'white',
        backgroundColor :'black'})
        setBtntext("enable light mode")
        }
        else{
            setMys({color : 'black',
        backgroundColor :'white'})
        setBtntext("enable dark mode")
        console.log(btntext);
        }
    }
    


  return (

    <div>
        <div className="box" style={mys}>
            <h1>dark</h1>
            <p> ready to rock</p>
            
        </div>
        <button className='btji my-4'  onClick={toggleBtn}> {btntext}</button>
        
      
    </div>
  )
};
