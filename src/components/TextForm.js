import React,{useState} from 'react'
export default function TextForm(props) {   
  
  const handleUpClick=()=>{ 
    // console.log("UpperCase was clicked" + text); 
    let newText=text.toUpperCase();
    setText(newText); 
    props.showAlert("converted to upperCase","success");
  }  
  const handleLowClick=()=>{ 
    // console.log("UpperCase was clicked" + text); 
    let newText=text.toLowerCase();
    setText(newText); 
     props.showAlert("converted to lowerCase","success");
  } 
  const handleOnChange=(event)=>{ 
    // console.log("On Change"); 
    setText(event.target.value);
  } 
  const handleCopy=()=>{
    var text=document.getElementById("myBox"); 
    text.select(); 
    navigator.clipboard.writeText(text.value); 
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard","success");
    
    
  } 
  const handleExtraSpaces=()=>{ 
    let newText=text.split(/[ ]+/); 
    setText(newText.join(" "));
  }
  
  const handleClearClick=(event)=>{ 
    // console.log("On Change");  
    let newText='';
    setText(newText);
  }  
    const [text, setText]=useState(' ');   
    // text="new text" //wrong way to change text 
    // setText("new text"); //correct way to change text
  return (
    <>
    <div className="contianer" style={{color:props.mode ==='dark' ? 'white':'black'}}> 
      <h1 className='mb-4'>{props.heading}</h1> 
<div className="mb-3"> 
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark' ? '#13466e':'white',color:props.mode ==='dark' ? 'white':'black'}} id="myBox" rows="8"></textarea>
</div>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>  
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button> 
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button> 
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text</button>   
      </div>  
    <div className="container my-2" style={{color:props.mode ==='dark' ? 'white':'black'}}> 
      <h2>Your text Summary</h2> 
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} Characters</p>
      <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read </p>
      <h2>Preview</h2> 
      <p>{text.length>0?text:"Nothing to preview!"}</p> 
    </div>
    </>
  )
}          




