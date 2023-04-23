import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase!", "success");
    }
    const handleLowClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase!", "success");
    }
    const handleCapClick = ()=> {
        const sentence = text;
        const words = sentence.split(" ");
        for(let i=0; i<words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
        let newText = words.join(" ");
        setText(newText);
        props.showAlert("Text converted to Capitals!", "success");
    }
    const handleClearAllClick = ()=> {
        let newText = '';
        setText(newText);
        props.showAlert("All text has been cleared!!", "warning");
    }
    const handleCopy = ()=> {
        var text = document.getElementById("messageBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleExtraSpaces = ()=> {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed", "success");
    }
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    /*NOTE: text = "new text"; // Wrong way to change the state
            setText("new Text"); //Correct way to change the state
    */ 
    return (
        <>
            <div className="container my-4 border border-warning rounded shadow p-3 mb-4" style={{color: props.mode === 'dark'?'white':'black' } }>
                <h2 className="my-1 mb-3">{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#999':'white', color: props.mode === 'dark'?'white':'black'}} id="messageBox" rows="5" ></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleCapClick}>Convert to Capital</button>
                <button className="btn btn-warning mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-danger mx-2 my-1" onClick={handleClearAllClick}>Clear All</button>
                <button className="btn btn-success mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3 border border-warning rounded shadow p-3 mb-4" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2 className="mb-3">Your text summary</h2>
                <p className="ms-4">{text.length>0 ? text.split(" ").length : 0} words and {text.length} characters</p>
                <p className="ms-4">Reading Time: {0.08 * text.split(" ").length} minutes</p>
            </div>
            <div className="container my-3 border border-warning rounded shadow p-3 mb-4" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2 className="mb-3">Text Preview</h2>
                <p className="ms-4 col-sm-9">{text.length>0 ? text : "Enter Something to Preview it!"}</p>
            </div>
        </>
    )
}
