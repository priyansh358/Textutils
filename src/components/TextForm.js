import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupclick = () =>{
        let newText = text.toUpperCase();
        setText(newText);    
        props.showAlert("Converted to UpperCase","success")
    }
    const handleClear = () =>{
        let newText =("");
        setText(newText);    
        props.showAlert("TextArea is cleared","success")
    }
    const handleloclick = () =>{
        let newText = text.toLowerCase();
        setText(newText);    
        props.showAlert("Converted to LowerCase","success")
    }

    const handleChange = (event) =>{
        setText(event.target.value)
    }

    const handleCopy=()=>{
        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied to  Clipboard","success")
    }

    const handleRES=()=>{
        setText(text.replace(/\s+/g,' '));
        props.showAlert("Extra Spaces Cleared","success")
    }

    const [text,setText] = useState("");
    return (
        <>
        <div className="container" style={{ color :props.mode === "dark" ? "white":"black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3 ">
                <textarea className="form-control" id="myBox" style={{
                    backgroundColor :props.mode === "dark" ? "grey":"white",
                    color :props.mode === "dark" ? "white":"black"
                    }} onChange= {handleChange} value={text} rows="8"></textarea>
            </div>
            <button className={`btn btn-${props.mode==="light" ? "dark":"primary"} mx-1`} onClick={handleupclick}>Convert to UpperCase</button>
            <button className={`btn btn-${props.mode==="light" ? "dark":"primary"} mx-1`} onClick={handleloclick}>Convert to LowerCase</button>
            <button className={`btn btn-${props.mode==="light" ? "dark":"primary"} mx-1`} onClick={handleClear}>Clear</button>
            <button className={`btn btn-${props.mode==="light" ? "dark":"primary"} mx-1`} onClick={handleCopy}>Copy</button>
            <button className={`btn btn-${props.mode==="light" ? "dark":"primary"} mx-1`}onClick={handleRES}>Remove Extra Space</button>
            </div>
        
        <div className="container my-3" style={{ color :props.mode === "dark" ? "white":"black"}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>           
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter Text in Text Area"}</p>
        </div>
        </>
    )
}
