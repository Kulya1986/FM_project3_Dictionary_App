import React from "react";
import './NoResults.css';

const NoResults = ({serverRes}) => {
    return(
        <div id="error-wrapper">
            <p id="emoji">&#128533;</p>
            <p id="explanation_title">{serverRes.title}</p>
            <p id="explanation_text">{serverRes.message}{serverRes.resolution}</p>
        </div>);
}

export default NoResults;