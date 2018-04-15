// @ts-check

import React from "react";
import "./package-style.css";

export default function Avatar(props) {
    // object destructuring -es6
    const {url, size, imagecontent} = props;
    const styles = {
        width:size,
        height:size,
        borderRadius: "50%"
    };
    const labelStyle={
        display:"flex",
        alignItems:"center",
    }
    const marginstyle= {
        marginLeft:"1%"
    }
    return  <div className="avatar-user">
        <div style={labelStyle}>
            <img src={url} style={styles} alt="Avatar"/><span style={marginstyle}>{imagecontent}</span>
        </div>
    </div>

}


