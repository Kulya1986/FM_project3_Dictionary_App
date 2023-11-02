import React from "react";
import './WordSection.css';

const WordSection = ({serverRes, audioPlay}) =>{
    return(
        <div id="word-wrapper">
            <div className="phonetics">
                <p>{serverRes[0].word}</p>
                <p>{serverRes[0].phonetic}</p>
            </div>
            <div className="audio">
                <button type="button" name="audio" value="audio" onClick={audioPlay}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
                        <circle cx="37.5" cy="37.5" r="37.5" fill="#A445ED"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M29 27V48L50 37.5L29 27Z" fill="#A445ED"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default WordSection;