import React from "react";
import sprintShip from "../assets/logo/sprintship.png";

function Work() {
  return (
    <div className="shadow-lg border-dark card my-2" id="darkTheme">
      <div className="card-body">
        <div className="my-2 p-0">
          <div className="">
            <h5 className="textLight">WORK EXPERIENCE</h5>
          </div>
        </div>
      </div>
      <div className="card-body row">
        <div className="my-2 col-md-2">
          <div className="text-center">
            <img
              className="m-2 rounded-5"
              src={sprintShip}
              style={{ width: 80 }}
              alt="companyLogo"
            />
          </div>
        </div>
        <div className="my-2 col-md-10">
          <div className="">
            <div className="text-center text-md-start">
              <h6 className="m-0 textLight">Junior Web Developer</h6>
              <p className="m-0 text-secondary textParam">
                SprintShip Philippines Inc.
              </p>
              <p className="m-0 text-secondary textParam">
                June 2022 - November 2022
              </p>
            </div>
            <div className="text-center text-md-start">
              <p className="my-2 ms-3 text-info">
                <span className="text-dark textLight">TECHNOLOGIES: </span>
                ASP.Net Zero, .Net Core, C#, Angular, TypeScript, Azure DevOps,
                Microsoft SQL Server, SQL, HTML5, CSS3
              </p>
            </div>
            <div className="text-center text-md-start">
              <p className="text-secondary textParam">
                Handle Helpdesk (the ticketing part) of our web system, adding
                new component or feature that make the helpdesk part of our
                system more usable and reliable to other developer and
                Employees, and our Tenants (Client) to create ticket issue in
                our multi-tenant system.
              </p>
              <p className="text-secondary textParam">
                Fix some issue from our Helpdesk part of our System.
              </p>
              <p className="text-secondary textParam">
                Fix layout issue from different tenant web page.
              </p>
              <p className="text-secondary textParam">
                Be part of the multilingual project where we modified almost all
                API that we used, So the concept of this project is the user
                data that they input are inputted to the table where the user
                language is expected, so it becomes the output data of the user
                interface is based on the language flag that they pick.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
