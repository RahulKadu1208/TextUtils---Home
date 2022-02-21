import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("UpperCase Button Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase.", "success");
    }
    
    const handleLowClick = () =>{
        // console.log("UpperCase Button Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase.", "success");
    }
    
    const handleClear = () =>{
        // console.log("UpperCase Button Clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied To Clipboard!", "success");
    }

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed!", "success");
    }

    const handleOnChange = (event) =>{
        // console.log("Handle On Change")
        setText(event.target.value);
    }
    const [text, setText] = useState("")
    // text = "dgfsggsyvg"; Wrong way to update state
    // setText("gfcsdgcgsvv"); Right way to update state
  return (
    <>
    <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="light"?"white":"#071e37" , color: props.mode==="light"?"black":"white"}} id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==="light"?"black":"white"}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>You Need {0.008 * text.length} Minutes To Read Above Text.</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Write Something In Above Textbox To See Preview Here!"}</p>
    </div>
    </>
  );
}
