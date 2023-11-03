import React from "react";
import './Search.css';

const Search = ({ searchWord, theme, onSearchWordChange, onSearchSubmit,requestResultsForSearchWord}) => {
    return(
        <section id="search-bar">
            <button className={theme} type="button" name="mag-button" id="mag-button" onClick={requestResultsForSearchWord} aria-label="Search button"></button>
            <input value={searchWord } className={theme} type="text" name="search-word" id="search-word"  placeholder="Search for any word ..." onChange={onSearchWordChange} onKeyDown={onSearchSubmit} aria-label="Search"></input>   
            <p></p>
        </section>
    );
}

export default Search;