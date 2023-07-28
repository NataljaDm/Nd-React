import React from "react";
import "../App.css";


const Column = () => {
    return (
        <div>
            <ul>
                <li>
                    <span className="button">Dashboard</span>
                </li>
                <li>
                    <span>Product</span>
                    <div className="amount">2</div>
                </li>
                <li>
                    <span>Store</span>
                </li>
                <li>
                    <span>Visitor</span>
                </li>
                <li>
                    <span>Analytics</span>
                </li>
                <li>
                    <span>Notification</span>
                    <div className="amount">11</div>
                </li>
                <li>
                    <span>Help Center</span>
                </li>
                <li>
                    <span>Settings</span>
                </li>
                <li>
                    <span>Dark Mode</span>
                </li>
            </ul>
        </div>
    )
}

export default Column;