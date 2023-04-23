import React, {useState} from 'react'

export default function About(props) {
    /*const [myStyle, setmyStyle] = useState ({
        color: '#fff',
        backgroundColor: '#222',
        border: '3px solid grey'
    })
    const [accStyle, setaccStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    })
    const [btnText, setbtnText] = useState("Enable Light Mode")
    const toggleStyle = ()=> {
        if(accStyle.color === 'white') {
            setaccStyle ({
                color: 'black',
                backgroundColor: 'white'
            })
            setmyStyle({
                color: '#222',
                backgroundColor: '#fff',
                border: '2px solid #ddd'
            })
            setbtnText("Enable Dark Mode")
        }
        else {
            setaccStyle ({
                color: 'white',
                backgroundColor: 'black'
            })
            setmyStyle({
                color: '#fff',
                backgroundColor: '#222',
                border: '3px solid grey'
            })
            setbtnText("Enable Light Mode")
        }
    }*/
    const abcontStyle = {
        backgroundColor: props.mode === 'dark'?'#222':'white' ,
        color: props.mode === 'dark'?'white':'black' 
    }
    const accordStyle = {
        backgroundColor: props.mode === 'dark'?'#555':'white', 
        color: props.mode === 'dark'?'white':'black'
    }
    const accordbtnStyle = {
        backgroundColor: props.mode === 'dark'?'#333':'white', 
        color: props.mode === 'dark'?'white':'black'
    }
    return (
        <div className="container my-5 px-4 py-4 border border-danger rounded shadow p-3 mb-5" style={abcontStyle}>
            <h1 className="mb-4">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={accordStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={accordbtnStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h5>TextUtilzz</h5>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>TextUtilzz</strong>, is a website that offers various features to users for text manipulation, entered by them.
                            It provides a wide range of functions designed to assist users in working with text documents, such as text formatting, extraction, and conversion.<br/>
                            Textutilzz is commonly used for text cleaning, data extraction, and text conversion.
                            It is developed by <strong>Guddu Sharma</strong>, BTech CSE student at Techno India University.<br/>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={accordStyle}>
                    <h2 className="accordion-header">
                        <button style={accordbtnStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <h5>Features</h5>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            These are the following features of <strong>TextUtilzz</strong> :
                            <ul>
                                <li>Convert the text into Uppercase.</li>
                                <li>Convert the text into Lowercase.</li>
                                <li>Capitalize the text.</li>
                                <li>Remove Extra spaces from the text.</li>
                                <li>Copy to Clipboard.</li>
                                <li>Clear the text.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            { /*<div className="container my-3">
                <button type="button" onClick={toggleStyle} className="btn btn-success">{btnText}</button>
            </div>*/ }
        </div>
    )
}
