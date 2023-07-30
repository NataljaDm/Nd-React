import React from "react";
import "./body.css";
import logo18 from '../Logo18.PNG';

const Body = () => {
    return (
        <>
            <div className="list">
                <div className="container">
                    <div className="grade-line">
                        <div className="grade">
                            <p clasName="grade-info">4.5</p>
                        </div>
                        <h3>Net Profit</h3>
                    </div>
                    <h2 class="number">302.1K</h2>
                    <h5 class="text">29%vs$300.3k last year</h5>
                </div>
            </div>
            <div className="icon"><img src={logo18} alt="Logo18" /></div>
        </>
    )
}

export default Body;
