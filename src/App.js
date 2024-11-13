import React from "react";
import { useState } from "react";
import Display from "./components/display";


function App() {
  const [calculation, setCalculation] = useState("")
  const [result, setResult] = useState(0)

  function handleCalculation(value) {
    setCalculation(calculation + value)
  }
  function handleResult() {
    setResult(eval(calculation))
  }
  function handleAllclear(){
    
  }
function handleBackspace(){
  setCalculation(calculation.slice(0,-1))
}
return (

  <div className="d=flex justify-content-center  align-items-center" style={{ height: '100vh' }} >
    <div className="container w-25 bg-light p-3 rounded-3 ">
      <Display calculation={calculation} result={result} />
      <div className="fs-3 text-center d-flex flex-column gap-3 p-0 m-0">
        <div className="row gap-3">
          <div className="col col-4 bg-dark-subtle rounded-3" onClick={handleAllclear}>AC</div>
          <div className="col col-4 bg-dark-subtle rounded-3" onClick={handleBackspace}>BS</div>
          <div className="col">%</div>
          <div className="col">/</div>
        </div>

        <div className="row">
          <div className="col" onClick={() => handleCalculation('7')}>7</div>
          <div className="col" onClick={() => handleCalculation('8')}>8</div>
          <div className="col" onClick={() => handleCalculation('9')}>9</div>
          <div className="col" onClick={() => handleCalculation('*')}>*</div>

          <div className="col" onClick={() => handleCalculation('4')}>4</div>
          <div className="col" onClick={() => handleCalculation('5')}>5</div>
          <div className="col" onClick={() => handleCalculation('6')}>6</div>
          <div className="col" onClick={() => handleCalculation('-')}>-</div>

          <div className="col" onClick={() => handleCalculation('1')}>
            1</div>
          <div className="col" onClick={() => handleCalculation('2')}>
            2</div>
          <div className="col" onClick={() => handleCalculation('3')}>
            3
          </div>
          <div className="col" onClick={() => handleCalculation('+')}>
            +
          </div>
        </div>

        <div className="row m-0 p-0">
          <div className="col" onClick={() => handleCalculation('.')}>
            .
          </div>
          <div className="col" onClick={() => handleCalculation('0')}>
            0</div>
          <div className="col">+/-</div>
          <div className="col bg-success text-light rounded-2 m-0 p-0 " onClick={handleResult}>
            =</div>
        </div>
      </div>
    </div>
  </div>
  
  )  
}
export default App;