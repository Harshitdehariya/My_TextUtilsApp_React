
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
 


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type,
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success");
      document.title= 'Textutils - darkmode';
        
    }
   else{
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been unable", "success");
    document.title= 'Textutils - lightmode';
   }
  }
  return  (
<>
 <Router>
<Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container" my-3>
<Switch>
          <Route path="/about">
            <About />
          </Route>
       <Route path="/"> 
          {<Textform showAlert={showAlert} heading ="Enter the text to analyze below"mode={mode}/>}
          </Route>
        </Switch>     
  </div>
  </Router>
  
   </>
  )
  } 
export default App;
