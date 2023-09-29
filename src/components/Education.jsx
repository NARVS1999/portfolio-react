import React from "react";
import eclaroLogo from "../assets/logo/eclaro-academy.png";

function Education() {
  return (
    <div className="shadow-lg border-dark card my-3" id="darkTheme">
      <div className="card-body">
        <div className="my-2 p-0">
          <div className="">
            <h5 className="textLight">EDUCATIONAL BACKGROUND</h5>
          </div>
        </div>
        <div className="my-2">
          <div className="p-1 row">
            <div className="my-2 col-md-6">
              <div className="row">
                <div className="text-center col-md-4">
                  <img className="m-2" src={eclaroLogo} style={{ width: 80 }} />
                </div>
                <div className="col-md-6 text-center text-md-start">
                  <h6 className="m-0 textLight">Information Communication Technology</h6>
                  <p className="m-0 text-secondary textParam">
                    Eclaro Academy (Senior High)
                  </p>
                  <p className="m-0 text-secondary textParam">2016 - 2018</p>
                </div>
              </div>
            </div>
            <div className="my-2 col-md-6">
              <div className="row">
                <div className="text-center col-md-4">
                  <img className="m-2" src={eclaroLogo} style={{ width: 80 }} />
                </div>
                <div className="col-md-6 text-center text-md-start">
                  <h6 className="m-0 textLight">Bachelor in Science of Computer Science</h6>
                  <p className="m-0 text-secondary textParam">
                  Eclaro Academy (College)
                  </p>
                  <p className="m-0 text-secondary textParam">2018 - 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
