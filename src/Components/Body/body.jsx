import React from "react";
import "./body.css";

const Body = () => {
    return (
        <div className="container">

            <div className="food-list">
                <div className="container">
                    <div className="grade-line">
                        <div className="grade">
                            <p clasName="grade-info">4.5</p>
                        </div>
                        <h3>Net Profit</h3>
                    </div>
                    <h2 class="number">302.1K</h2>
                    <p class="text">29%vs$300.3k last year</p>
                </div>
            </div>

        </div>

    )
}

export default Body;
