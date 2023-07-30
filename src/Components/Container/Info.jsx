import React from "react";
import logo4 from '../Logo4.png';
import logo14 from '../Logo14.png';
import logo10 from '../Logo10.png';

function Info() {
    return (
        <div className="main-container">
            <div className="info-container">
                <div className="container-inside">
                    <div className="img">
                        <div className="burbulas">
                            <p>$</p> 
                        </div>
                        <span className="name">Net Profit</span>
                    </div>
                    <h2>302.1K</h2>
                    <hr></hr>
                    <span>
                        <span style={{ color: "red" }}>2.9%</span> vs $300.3k last
                        year
                    </span>
                </div>
            </div>
            <div className="info-container">
                <div className="container-inside">
                    <div className="img">
                        <div className="burbulas">
                        <img className="pic" src={logo4} alt="Logo4" />
                        </div>
                        <span className="name">Net Profit</span>
                    </div>
                    <h2>12.900</h2>
                    <hr></hr>
                    <span>
                        <span style={{ color: "limegreen" }}>12.9%</span> vs 1030 last
                        year
                    </span>
                </div>
            </div>
            <div className="info-container">
                <div className="container-inside">
                    <div className="img">
                        <div className="burbulas">
                        <img className="pic" src={logo14} alt="Logo14" />
                        </div>
                        <span className="name">Net Profit</span>
                    </div>
                    <h2>390.040</h2>
                    <hr></hr>
                    <span>
                        <span style={{ color: "limegreen" }}>4.1%</span> vs 320.583 last
                        year
                    </span>
                </div>
            </div>
            <div className="info-container">
                <div className="container-inside">
                    <div className="img">
                        <div className="burbulas">
                        <img className="pic" src={logo10} alt="Logo14" />
                        </div>
                        <span className="name">Net Profit</span>
                    </div>
                    <h2>302.1K</h2>
                    <hr></hr>
                    <span>
                        <span style={{ color: "limegreen" }}>2.9%</span> vs $300.3k last
                        year
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Info;