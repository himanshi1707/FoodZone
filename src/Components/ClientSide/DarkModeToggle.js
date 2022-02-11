import React, { useState } from 'react';
import './darkmode.css';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

export default function DarkModeToggle(props){
    const [changeStyle, setChangeStyle] = useState("root");
    const [btnText, setBtnText] = useState("dark")

    const handleChange=()=>{
        if(changeStyle === "root")
        {
            setChangeStyle("root1");
            setBtnText("light"); 
        }  
        else
        {
            setChangeStyle("root");
            setBtnText("dark");
        }
    }
    return (
        <React.Fragment>
            <div className={changeStyle}>
                <div className="sudiv">
                    <div className="main">
                        jffhrhfrhggdfvgbgfvgfbgdbfhgvbdhfgv
                        <span type="button" onClick={handleChange}> <SettingsBrightnessIcon fontSize="large" className={btnText} /> </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}