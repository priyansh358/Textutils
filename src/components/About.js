import React, { useState } from 'react'
export default function About(props) {

    // const [mystyle, setmystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     border: "2px solid black"
    // });

    let mystyle = {
        color: props.mode == "dark" ? "white" : "#00152b",
        backgroundColor: props.mode == "dark" ? "rgb(32 70 106)" : "white",

    }

    return (
        <div className="container" style={{ color: props.mode == "dark" ? "white" : "#00152b", }}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" style={mystyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne" >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                            <strong>Analyse Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={mystyle}>
                        <div className="accordion-body">
                            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                            <strong>Free Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={mystyle}>
                        <div className="accordion-body">
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given
                            text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character
                            limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={mystyle}>
                        <div className="accordion-body">
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It
                            suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.                       
                             </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
