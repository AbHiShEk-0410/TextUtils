import React,{useState} from 'react' // follow the syntax to import useState

export default function TextForm(props) {  
    const handleUpClick = () =>{  //this arrow function is created for onClick EventListener
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase(); //converts the text into upperCase
        setText(newText);  //update the text using useState
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{  // for onChange EventListener  , event is passed as parameter
        // console.log("On change");
        setText(event.target.value);   //th
    }

    const [text , setText] = useState(''); // useState 
    // text = "new text";  Wrong way to change the text 
    // setText("new text"); Correct way to change the text
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" value ={text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick = {handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick = {handleLoClick}>Convert to Uppercase</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
