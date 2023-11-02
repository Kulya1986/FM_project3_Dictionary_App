import React from "react";
import './Search.css';

const Search = ({ searchWord, theme, onSearchWordChange, onSearchSubmit,requestResultsForSearchWord}) => {
    return(
        <div id="search-bar">
            <button className={theme} type="button" name="mag-button" id="mag-button" onClick={requestResultsForSearchWord}></button>
            <input value={searchWord } className={theme} type="text" name="search-word" id="search-word"  placeholder="Search for any word ..." onChange={onSearchWordChange} onKeyDown={onSearchSubmit}></input>   
            <p></p>
        </div>
    );
}

export default Search;