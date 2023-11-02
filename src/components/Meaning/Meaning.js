import React from "react";
import './Meaning.css';

const Meaning = ({serverRes, theme, onSynAntClick}) =>{
    return(
        <div id="meaning-wrapper">
                {serverRes[0].meanings.map((part,i)=>{
                    return(
                        <div className="meaning" key={i}>
                            <div className="part-of-speech">
                                <span>{part.partOfSpeech}</span>
                                <hr className={theme}/>
                            </div>
                            <div className="meaning-desc">
                                <div className="meaning-heading">Meaning</div>
                                <ul>
                                    {
                                        part.definitions.map((def, i)=>{
                                            return(
                                                <li className="definitionItem" key={i}>
                                                    {def.definition}
                                                    {def.example && 
                                                        <p className="example">"{def.example}"</p>}
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                                {
                                    part.synonyms.length>0 &&
                                        <div className="synonyms-heading">
                                            <div>Synonyms</div>
                                                <div>
                                                {
                                                    part.synonyms.map((syn, i)=>{
                                                        const href="#"+syn;
                                                        return(
                                                            <a className="synonymItem" href={href} key={i} onClick={onSynAntClick}>
                                                                {syn}
                                                            </a>
                                                        );
                                                    })
                                                }
                                                </div>
                                        </div>
                                }
                                {
                                    part.antonyms.length>0 &&
                                        <div className="antonyms-heading">
                                            <div>Antonyms</div>
                                                <div>
                                                {
                                                    part.antonyms.map((ant, i)=>{
                                                        const href="#"+ant;
                                                        return(
                                                            <a className="antonymItem" href={href} key={i} onClick={onSynAntClick}>
                                                                {ant}
                                                            </a>
                                                        );
                                                    })
                                                }
                                                </div>
                                        </div>
                                }
                            </div>                          
                        </div>
                    );
                })}
                <hr className={theme} id="bottom-source"/>
                {serverRes[0].sourceUrls.length>0 &&
                    serverRes[0].sourceUrls.map((url, i)=>{
                        return(
                            <div className="sourceUrl" key={i}>
                                <span>Source</span>
                                <a className={theme} href={url} target="_blank" rel="noreferrer">{url}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="#838383" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"/>
                                    </svg>
                                </a>                            
                            </div>
                        );
                    })
                }    
        </div>
    )
}

export default Meaning;