
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  


  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor= '#2f3140';
      
   }
    else
    {
      setMode('light');
      document.body.style.backgroundColor= 'white';
     
    }
  }
  return (
    <>
    
<Navbar title="Textutils" about="About" mode={mode} toggleMode={toggleMode}/>
{/*<Alert alert={alert}/>*/}
<div className="container">
<TextForm heading="Enter text to analyse below" mode={mode}/>
{/*<About/>*/}

</div>

    </>
  );
}

export default App;
