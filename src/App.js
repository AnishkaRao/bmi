import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';


export default function App() {
  const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [bmi, setBmi] = useState(0);


  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = +mass / (+height) ** 2;
    setBmi(bmi.toFixed(3));
  };
  return (

    <div className="" >
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="https://play-lh.googleusercontent.com/KzDKwWLTjoGxaFXXMGAKp-9Cl2vJXQlsl4ie0xhNF-nY-Cv3NOWi1rrt-ft2mLpNlw" width='100' height='100' ></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
        </div>
      </nav>

      <div class=" p-5  bg-light text-dark">
        <div className="justify-content-center m-5">
          <div class="row">
            <div class="col-sm-4">
            </div>
            <div className="card justify-content-center bg-info mt-1 col-sm-3" style={{ width: "40%", height: "70%" }}>
              <div>
                <h1 className="text-center mt-3">BMI CALCULATOR</h1>
              </div>
              <form onSubmit={calculate} className="">
                <div className="mb-3 container w-60">
                  <label className="form-label mt-2"><h5>Name</h5></label>
                  <input type="text w-50" className="form-control" />
                </div>
                <div className="mb-3 container w-60">
                  <label className="form-label mt-2"><h5>Height in meters</h5></label>
                  <input type="number w-50" value={height} className="form-control" onChange={(e) => setHeight(e.target.value)} />
                </div>

                <div className="container mb-3 w-60">
                  <label className="form-label "><h5>Mass in kg</h5></label>
                  <input type="number " value={mass} onChange={(e) => setMass(e.target.value)} className="form-control" />
                </div>
                <div className="justify-content-center  text-center mt-4">
                  <button type="submit" className="btn btn-primary ms-3 justify-content-center">Calculate BMI</button>
                </div>
              </form>
              <h1 className="text-center mt-3 ms-3">BMI : {bmi}</h1>

              {
                (bmi <= 18.5 && bmi !== 0) ? <h2 className="text-center mt-3">UnderWeight</h2> : (bmi <= 24.9 && bmi !== 0 ? <h2 className="text-center mt-5">Normal</h2> : (bmi <= 29.9 && bmi !== 0 ? <h2 className="text-center mt-5">Overweight</h2> : (bmi >= 30 ? <h2 className="text-center mt-5">obesity</h2> : <h1></h1>)))
              }
              <div className="col-sm-1">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};