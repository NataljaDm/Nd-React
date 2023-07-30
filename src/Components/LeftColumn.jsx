import React from "react";
import "../App.css";
import logo from '../Logo.PNG';
import logo1 from '../Logo1.png';
import logo14 from '../Logo14.png';
import logo4 from '../Logo4.png';
import logo5 from '../Logo5.png';
import logo6 from '../Logo6.png';
import logo7 from '../Logo7.png';
import logo8 from '../Logo8.png';
import logo9 from '../Logo9.png';
import logo16 from '../Logo16.png';

const Column = () => {
    return (
        <div className='column'>
            <ul>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <li>
                    <img className="pic" src={logo1} alt="Logo1" />
                    <span>Dashboard</span>
                </li>
                <li>
                    <img className="pic" src={logo14} alt="Logo14" />
                    <span>Product</span>
                    <div className="amount">2</div>
                </li>
                <li>
                    <img className="pic" src={logo4} alt="Logo4" />
                    <span>Store</span>
                </li>
                <li>
                    <img className="pic" src={logo5} alt="Logo5" />
                    <span>Visitor</span>
                </li>
                <li>
                    <img className="pic" src={logo6} alt="Logo6" />
                    <span>Analytics</span>
                </li>
                <li>
                    <img className="pic" src={logo7} alt="Logo7" />
                    <span>Notification</span>
                    <div className="amount">11</div>
                </li>
                <li>
                    <img className="pic" src={logo8} alt="Logo8" />
                    <span>Help Center</span>
                </li>
                <li>
                    <img className="pic" src={logo9} alt="Logo9" />
                    <span>Settings</span>
                </li>
                <li>
                    <img className="pic" src={logo16} alt="Logo16" />
                    <span>Dark Mode</span>
                </li>
            </ul>
        </div>
    )
}

export default Column;