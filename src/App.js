import React from "react";
import Display from "./components/display";
import Numpad from "./components/numpad";

export default function App() {
  return (

    <React.Fragment>
      <div className="d=flex justify-content-center  align-items-center" style={{ height: '100vh' }} >
        <div className="container w-25 bg-light p-3 rounded-3 ">
          <Display />

          <Numpad />
        </div>
      </div>
    </React.Fragment>
  )
}