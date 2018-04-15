// @ts-check

import React from "react";
import "./package-style.css";
import Avatar from "./Avatar";

export default function ShippingPackage(props) {
    // object destructuring -es6
    const {packageId, orderId, amount} = props;
    const avatarsize=60;
    const url = "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?auto=compress&cs=tinysrgb&h=350";
    const headerWrapperStyle = {
        display: "flex",
        justifyContent: "space-between"
    };
    return <div className="package-wrapper">
        <div style={headerWrapperStyle}>
            <label>Package ID: {packageId}</label>
            <span>Rs. {amount}</span>
        </div>
        <label>Order No.: {orderId}</label>
        <Avatar size={avatarsize} url={url} imagecontent="keyur"/>
    </div>
}