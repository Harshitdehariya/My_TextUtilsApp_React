import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked + text" );
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case!", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked + text" );
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case!", "success");
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked + text" );
    let newText = "";
    setText(newText);
    props.showAlert("clear successfull!","success");
  };

  const handleDeleteClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Delete successfull!","success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState(" ");
  return (
    <>
      <div className="container"style={{color:props.mode=== 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
             value={text}
            onChange={handleOnChange} style={{backgroundColor:props.mode=== 'dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}
            id="MyBok"
            rows="9"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Convert to ClearText
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleDeleteClick}>
          Convert to DeleteText
        </button>
      </div>
      <div className="container my-3"style={{color:props.mode=== 'dark'?'white':'#042743'}}>
        <h1>Youe text summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length}characters
        </p>
        <p>{0.0008 * text.split(" ").length} Minutes</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"enter something in the textbox above to preview it here"}</p> 
      </div>
    </>
  );
}
