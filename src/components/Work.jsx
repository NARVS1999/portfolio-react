import React from "react";
import sprintShip from "../assets/logo/sprintship.png";
import tecnomancer from "../assets/logo/tecno.png";
import amt from "../assets/logo/amtLogo.png";


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
              src={amt}
              style={{ width: 80 }}
              alt="companyLogo"
            />
          </div>
        </div>
        <div className="my-2 col-md-10">
          <div className="">
            <div className="text-center text-md-start">
              <h6 className="m-0 textLight">Web Developer</h6>
              <p className="m-0 text-secondary textParam">
                ADSvanced Media Tech. (side-project)
              </p>
              <p className="m-0 text-secondary textParam">
                March 2023 - Present
              </p>
              <p>
                <a href="https://adsvancedmediatech.com" target="_blank" rel="noreferrer">Website</a> | <a href="https://www.facebook.com/profile.php?id=100090568896826/" target="_blank" rel="noreferrer">Social Media</a>
              </p>
            </div>
            <div className="text-center text-md-start">
              <p className="my-2 ms-3 text-info">
                <span className="text-dark textLight">TECHNOLOGIES: </span>
                JavaScript | PHP | jQuery | HTML5 | CSS3 | Bootstrap | Figma |
                GitHub | Hostinger (our webhosting and domain provider)
              </p>
            </div>
            <div className="text-center text-md-start">
              <p className="text-secondary textParam">
                Creating Responsive template and customizable landing page
                for a different client, that have, animation, social media
                integration, email support and other client request feature.
              </p>
              <p className="text-secondary textParam">
                Manage social media present, meeting and presenting our
                company business model on our current client and possible
                client.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body row">
        <div className="my-2 col-md-2">
          <div className="text-center">
            <img
              className="m-2 rounded-5"
              src={tecnomancer}
              style={{ width: 80 }}
              alt="companyLogo"
            />
          </div>
        </div>
        <div className="my-2 col-md-10">
          <div className="">
            <div className="text-center text-md-start">
              <h6 className="m-0 textLight">Quality Assurance Engineer</h6>
              <p className="m-0 text-secondary textParam">
                Technomancer Inc.
              </p>
              <p className="m-0 text-secondary textParam">
                April 2023 - September 2023
              </p>
            </div>
            <div className="text-center text-md-start">
              <p className="my-2 ms-3 text-info">
                <span className="text-dark textLight">TECHNOLOGIES: </span>
                Amazon Workspace (AWS) | Azure DevOps Services | Jenkins | Microsoft Workbench | Chrome DevTools | Amazon S3 | Chrome DevTools | Amazon S3 | SQL
              </p>
            </div>
            <div className="text-center text-md-start">
              <p className="text-secondary textParam">
                Write and execute a manual test on a microservices system that provides Unemployed Insurance Services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body row">
        <div className="my-2 col-md-2">
          <div className="text-center">
            <img
              className="m-2 rounded-5"
              src={tecnomancer}
              style={{ width: 80 }}
              alt="companyLogo"
            />
          </div>
        </div>
        <div className="my-2 col-md-10">
          <div className="">
            <div className="text-center text-md-start">
              <h6 className="m-0 textLight">Junior System Analyst</h6>
              <p className="m-0 text-secondary textParam">
                Technomancer Inc.
              </p>
              <p className="m-0 text-secondary textParam">
                December 2022 - April 2023
              </p>
            </div>
            <div className="text-center text-md-start">
              <p className="my-2 ms-3 text-info">
                <span className="text-dark textLight">TECHNOLOGIES: </span>
                PHP | Vue.js | MySQL | Laravel | Bitbucket | jQuery | Bootstrap | JavaScript | CSS3 | HTML5
              </p>
            </div>
            <div className="text-center text-md-start">
              <p className="text-secondary textParam">
                Creating dynamic websites for different clients like landing pages, that have, animation, social media integration, email support, and other client request features.
              </p>
              <p className="text-secondary textParam">
                Creating, maintaining, and fixing e-commerce websites for different clients using Laravel and Vue (I am on the side of adding some features and fixing some bugs)
              </p>
            </div>
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
                ASP.Net | .Net | C# | Angular | TypeScript | SQL | Azure DevOps | Microsoft SQL Server | HTML5 | CSS3
              </p>
            </div>
            <div className="text-center text-md-start">
              <p className="text-secondary textParam">
                Enhance the Helpdesk ticketing system in our web platform to improve usability and reliability for developers, employees, and tenants (clients) in our multi-tenant system.
              </p>
              <p className="text-secondary textParam">
                Join our multilingual project where user input data is automatically directed to language-specific tables, ensuring user interface outputs correspond to the selected language.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
