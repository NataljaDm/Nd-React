import React from "react";
import "./header.css";
import logo2 from '../Logo/Logo2.PNG';
import logo3 from '../Logo/Logo3.PNG';


const Header = () => {
    return (
        <div className='header'>
            <div className='welcome'>
                <div>
                    <span className='search'>Search anything</span>
                </div>
                <div>
                    <h1>Welcome back, Maxie</h1>
                </div>
                <div>
                    <h5>Maximize product sales and store management in order to get the best results</h5>
                </div>
                <ul className='acount'>
                    <div>
                        <img src={logo2} alt="Logo2" />
                    </div>
                    <div>
                        <img src={logo3} alt="Logo3" />
                    </div>
                </ul>
            </div>
        </div >
    )
}

export default Header;
