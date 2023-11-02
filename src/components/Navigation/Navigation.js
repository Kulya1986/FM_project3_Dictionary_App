import React from "react";
import Select from 'react-select';
import './Navigation.css';

const Navigation = ({theme, colorThemeChange, fontChange}) => {
    const fonts = [
        { value: 'Lora', label: 'Lora' },
        { value: 'Inter', label: 'Inter' },
        { value: 'Inconsolata', label: 'Inconsolata' }
      ]

    let themeColor, shadowColor, fontColor;
    if (theme==='black') {
        themeColor = '#050505';
        shadowColor = '0px 5px 30px 0px #A445ED';
        fontColor = '#FFF';
    } else {
        themeColor = '#FFF';
        shadowColor = '0px 5px 30px 0px rgba(0, 0, 0, 0.10)';
        fontColor = '#2D2D2D';
    }
    const selectStyles = {
        container: (baseStyles) =>({
            ...baseStyles,
            border: 'none',
            textAlign: 'left',
        }),
        control: (baseStyles) => ({
            ...baseStyles,
            border:  'none',
            fontSize:'18px',
            fontWeight:'700',
            backgroundColor: themeColor,
            boxShadow:'unset',
            ':hover':{
                cursor: 'pointer',
            },
        }),
        indicatorSeparator: (baseStyles) =>({
            ...baseStyles,
            color: themeColor,
            backgroundColor: themeColor
        }),
        valueContainer: (baseStyles) =>({
            ...baseStyles,
            padding:'2px 0px',
        }),
        dropdownIndicator: (baseStyles) =>({
            ...baseStyles,
            color: '#A445ED',
            padding: '1rem',
            ':hover': {
                color: '#A445ED',
                cursor: 'pointer',
            }
        }),
        option: (baseStyles, state) =>({
            ...baseStyles,
            color: state.isFocused?'#A445ED':fontColor,
            backgroundColor:'unset',
            fontSize:'18px',
            fontWeight: state.isSelected?'700'
                :state.isFocused?'700':'500',
            ':hover':{
                cursor: 'pointer',
            }
        }),
        singleValue: (baseStyles) =>({
            ...baseStyles,
            color: fontColor,
        }),
        input: (baseStyles) =>({
            ...baseStyles,
            caretColor: themeColor,
        }),
        menu: (baseStyles) =>({
            ...baseStyles,
            width: '10rem',
            padding: '1rem',
            borderRadius: '1rem',
            backgroundColor: themeColor,
            boxShadow: shadowColor,
            right: '1.5rem',
            
        }),
    }

    return(
        <nav>
            <div id="logo">
                <img src="../images/logo.svg" alt="logo Dictionary"></img>
            </div>
            <div id="controls">
                <div className="select-wrapper">    
                    <Select 
                        options={fonts} 
                        defaultValue={fonts[2]} 
                        styles={selectStyles}
                        onChange={fontChange}
                    />
                </div>

                <div className="checkbox-wrapper">
                    <input type="checkbox" id="theme-color" name="theme-color" onClick={colorThemeChange}></input>
                    <label htmlFor="theme-color">
                    </label>
                </div>
                <div id="moon" className={theme}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                        <path fill="none" stroke="#838383" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/>
                    </svg>
                </div>
                
            </div>
        </nav>
    );
}

export default Navigation;