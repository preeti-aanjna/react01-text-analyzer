

import './App.css';

import Navbar from './components/Navbar';

import Textformd from './components/textformd';

import { useState } from 'react';
import Alert from './components/Alert';
// import H1dark from './components/h1dark';
function App() {
  const[ mode, setMode] = useState('light');
  const[alert , setAlert]= useState(null);

  const showAlert =(message , type)=>{
    setAlert({
      msg : message,
      type : type

    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  

 const toggleMode=()=>{
  if(mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor ='rgb(17, 65, 89)';
     document.body.style.color ='white';
     showAlert("Dark mode is enable", "Success");
     
  } else{
     setMode ('light');
     document.body.style.backgroundColor ='white';
      document.body.style.color ='rgb(18, 19, 19)';
      showAlert("Light mode is enable", "Success");
  }
  }
  return (
   <> 
 <Navbar title= "Textutils"   mode={mode} toggleMode={toggleMode}/> 
<Alert  alert = {alert}/>
<div className="container my-3" >
  < Textformd showAlert={showAlert} heading= "Enter the text to analyiz below"mode={mode}  />
  
</div>

   </> 
  );
}

export default App;
