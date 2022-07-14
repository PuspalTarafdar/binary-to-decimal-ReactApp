
import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
       //console.log("Uppercase was Clicked "); 
        let newText=  text.toUpperCase();
        setText(newText);
    } 
    
    const handlelowClick = ()=>{
      //console.log("Uppercase was Clicked "); 
       let newText=  text.toLowerCase();
       setText(newText);
   }
   const handleclearClick = ()=>{
    //console.log("Uppercase was Clicked "); 
     let newText=  "";
     setText(newText);
 }  
 const binaryToText=(event) =>{ 
  //Convert the binary into an array of binary strings separated by whitespace.
  let gg = text.split(' ');
  //convert from binary to decimals, then to characters. 
  let newText = gg.map(elem => String.fromCharCode(parseInt(elem, 2))).join("");
  setText(newText);
  }
  const textToBinary = (event) => {
    
    let res = text.split('').map(char => {
       return char.charCodeAt(0).toString(2);
    }).join(' ');
    setText(res);
 };
 
   const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value);
    
}
  
    const [text, setText] = useState('Enter your story here');
    
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#2f3140':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className='btn-primary mx-2' onClick={handleUpClick} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}>Convert to Uppercase</button>
        <button className='btn-primary mx-2' onClick={handlelowClick} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}>Convert to Lowercase</button>
        <button className='btn-primary mx-2' onClick={handleclearClick} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}>Clear Text</button>
        <button className='btn-primary mx-2' onClick={binaryToText} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}>Binary to text</button>
        <button className='btn-primary mx-2' onClick={textToBinary} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}>Text to Binary</button>
        
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    
    </div>
    </>
  )
}
