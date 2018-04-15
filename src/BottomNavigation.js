// @ts-check

import React from "react";
import "./package-style.css";

let blue="black";

export default function BottomNavigation(props) {
    // object destructuring -es6
    const {label, icon, color, changeText} = props;
    const styles = {
        width:20,
        height:20,
        marginLeft:10
    };
    const style2={
        margin:3
    }

    const styletextColor={
        color:color
    }
    return  <td className="nav-user" style={style2} >
            <tr>
                <img src={icon} style={styles}/>
            </tr>
            <tr>
                <label style={styletextColor} id={label}  onClick={e=>{changeText(e)}}>{label}</label>
            </tr>
    </td>

}


