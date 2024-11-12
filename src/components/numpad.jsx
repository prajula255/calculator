import React from "react";

export default function Numpad() {
    return (
       <React.Fragment>
            <div className="row gap-3">
                <div className="col">AC</div>
                <div className="col">BS</div>
                <div className="col">%</div>
                <div className="col">/</div>
            </div>

            <div className="row">
                <div className="col">7</div>
                <div className="col">8</div>
                <div className="col">9</div>
                <div className="col">*</div>
            </div>


            <div className="row">
                <div className="col">4</div>
                <div className="col">5</div>
                <div className="col">6</div>
                <div className="col">-</div>
            </div>


            <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">3</div>
                <div className="col">+</div>
            </div>


            <div className="row">
                <div className="col">.</div>
                <div className="col">0</div>
                <div className="col">+-</div>
                <div className="col">=</div>
            </div>
        
        </React.Fragment>
    )
}