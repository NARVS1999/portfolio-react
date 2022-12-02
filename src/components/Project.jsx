import React from "react";
import jQueryPhoto from "../assets/project-image/todoPicture.png";
import PorfolioPhoto from "../assets/project-image/porfolioReactPicture.png";
import CalculatorPhoto from "../assets/project-image/calculator-picture.jpg";
import MovieApi from "../assets/project-image/MovieApi.png";
import vannilaPorfolio from "../assets/project-image/project-porfoli-picture.PNG";
import rockPaperScissors from "../assets/project-image/rock-paper-scissors-picture.jpg";


function Project() {
  return (
    <div className="row">
      {/* start project card */}
      <div className="col-md-6 d-flex col-lg-4">
        <div className="shadow-lg border-dark card my-2" id="darkTheme">
          <div className="card-body row">
            <div className="">
              <div className="row mx-1">
                <div className="card border-dark my-2 p-0">
                  <div className="card-body p-1 text-center">
                    <img
                      className="img-fluid rounded"
                      src={MovieApi}
                      alt="profile-photo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="row mx-1">
                <div className="my-2p-0">
                  <div className="">
                    <p className="my-2 ms-3 text-info">
                      <span className="text-dark textLight">
                        TECHNOLOGIES:{" "}
                      </span>
                      ReactJS, React-Router, React-Hooks, API, Bootstrap,
                      JavaScript, HTML5, CSS3
                    </p>
                  </div>
                </div>
                <div className="my-2 p-0">
                  <div className="text-center text-md-start">
                    <h3 className="textLight">Movie API ReactJS</h3>
                  </div>
                </div>
                <div className="my-2 col-lg-12 p-0">
                  <div className="">
                    <p className="text-secondary textParam">
                      This Project used a Movie API, created using ReactJS as
                      the main framework, react-hooks to check the state, for
                      the state Management and react-router for changing the
                      page content specific to a movie that you click then more
                      data well show.
                    </p>
                  </div>
                </div>
                <div className="my-2 col-lg-12 p-0">
                  <div className="d-grid gap-2">
                    <a
                      className="btn btn-outline-success"
                      href="https://narvs1999.github.io/movie-app-react/"
                      target={"_blank"}
                    >
                      DEMO
                    </a>
                    <a
                      className="btn btn-outline-info"
                      href="https://github.com/NARVS1999/movie-app-react/tree/master"
                      target={"_blank"}
                    >
                      CODE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Project Card */}
      <div className="col-md-6 d-flex col-lg-4">
        <div className="shadow-lg border-dark card my-2" id="darkTheme">
          <div className="card-body row">
            <div className="">
              <div className="row mx-1">
                <div className="card border-dark my-2 p-0">
                  <div className="card-body p-1 text-center">
                    <img
                      className="img-fluid rounded"
                      src={PorfolioPhoto}
                      alt="profile-photo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="row mx-1">
                <div className="my-2p-0">
                  <div className="">
                    <p className="my-2 ms-3 text-info">
                      <span className="text-dark textLight">
                        TECHNOLOGIES:{" "}
                      </span>
                      ReactJS, Bootstrap, JavaScript, HTML5, CSS3
                    </p>
                  </div>
                </div>
                <div className="my-2 p-0">
                  <div className="text-center text-md-start">
                    <h3 className="textLight">Portfolio ReactJS</h3>
                  </div>
                </div>
                <div className="my-2 col-lg-12 p-0">
                  <div className="">
                    <p className="text-secondary textParam">
                      This project was created for my portfolio to show the work
                      I have done in programming to other people that
                      interested. I hope you like it.
                    </p>
                  </div>
                </div>
                <div className="my-2 col-lg-12 p-0">
                  <div className="d-grid gap-2">
                    <a
                      className="btn btn-outline-success"
                      href="https://narvs1999.github.io/portfolio-react/"
                      target={"_blank"}
                    >
                      DEMO
                    </a>
                    <a
                      className="btn btn-outline-info"
                      href="https://github.com/NARVS1999/portfolio-react/tree/master"
                      target={"_blank"}
                    >
                      CODE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 d-flex col-lg-4">
        <div className="shadow-lg border-dark card my-2" id="darkTheme">
          <div className="card-body row">
            <div className="">
              <div className="row mx-1">
                <div className="card border-dark my-2 p-0">
                  <div className="card-body p-1 text-center">
                    <img
                      className="img-fluid rounded"
                      src={jQueryPhoto}
                      alt="profile-photo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="row mx-1">
                <div className="my-2p-0">
                  <div className="">
                    <p className="my-2 ms-3 text-info">
                      <span className="text-dark textLight">
                        TECHNOLOGIES:{" "}
                      </span>
                      jQuery, HTML5, CSS3, JavaScript
                    </p>
                  </div>
                </div>
                <div className="my-2 p-0">
                  <div className="text-center text-md-start">
                    <h3 className="textLight">Multi-Theme Todo-List App</h3>
                  </div>
                </div>
                <div className="my-2 col-lg-12 p-0">
                  <div className="">
                    <p className="text-secondary textParam">
                      This Project was created to practice jQuery and become
                      familiar with this library, Multi theme To-do list project
                      is responsive to any device, and easy to navigate because
                      of the layout of the user interface that I created.
                    </p>
                  </div>
                </div>
                <div className="my-2 col-lg-12 p-0">
                  <div className="d-grid gap-2">
                    <a
                      className="btn btn-outline-success"
                      href="https://narvs1999.github.io/todo-list/"
                      target={"_blank"}
                    >
                      DEMO
                    </a>
                    <a
                      className="btn btn-outline-info"
                      href="https://github.com/NARVS1999/todo-list/tree/main"
                      target={"_blank"}
                    >
                      CODE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 d-flex col-lg-4">
        <div className="shadow-lg border-dark card my-2" id="darkTheme">
          <div className="card-body row">
            <div className="">
              <div className="row mx-1">
                <div className="card border-dark my-2 p-0">
                  <div className="card-body p-1 text-center">
                    <img
                      className="img-fluid rounded"
                      src={CalculatorPhoto}
                      alt="profile-photo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="row mx-1">
                <div className="my-2p-0">
                  <div className="">
                    <p className="my-2 ms-3 text-info">
                      <span className="text-dark textLight">
                        TECHNOLOGIES:{" "}
                      </span>
                      Vanilla JavaScript, HTML5, CSS3
                    </p>
                  </div>
                </div>
                <div className="my-2 p-0">
                  <div className="text-center text-md-start">
                    <h3 className="textLight">Calculator UI</h3>
                  </div>
                </div>
                <div className="my-2 col-lg-12 p-0">
                  <div className="">
                    <p className="text-secondary textParam">
                      This project was created to create a simple calculator
                      that have a feature as a challenge given by The Odin
                      Project and I added some feature like keyboard support and
                      dark mode
                    </p>
                  </div>
                </div>
                <div className="my-2 col-lg-12 p-0">
                  <div className="d-grid gap-2">
                    <a
                      className="btn btn-outline-success"
                      href="https://narvs1999.github.io/calculator/"
                      target={"_blank"}
                    >
                      DEMO
                    </a>
                    <a
                      className="btn btn-outline-info"
                      href="https://github.com/NARVS1999/calculator/tree/main"
                      target={"_blank"}
                    >
                      CODE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 d-flex col-lg-4">
        <div className="shadow-lg border-dark card my-2" id="darkTheme">
          <div className="card-body row">
            <div className="">
              <div className="row mx-1">
                <div className="card border-dark my-2 p-0">
                  <div className="card-body p-1 text-center">
                    <img
                      className="img-fluid rounded"
                      src={vannilaPorfolio}
                      alt="profile-photo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="row mx-1">
                <div className="my-2p-0">
                  <div className="">
                    <p className="my-2 ms-3 text-info">
                      <span className="text-dark textLight">
                        TECHNOLOGIES:{" "}
                      </span>
                      Vanilla JavaScript, HTML5, CSS3
                    </p>
                  </div>
                </div>
                <div className="my-2 p-0">
                  <div className="text-center text-md-start">
                    <h3 className="textLight">Responsive Portfolio</h3>
                  </div>
                </div>
                <div className="my-2 col-lg-12 p-0">
                  <div className="">
                    <p className="text-secondary textParam">
                      This project was created for my old portfolio to show the
                      work I have done in programming to other people that
                      interested. this is created using Vanilla JavaScript.
                    </p>
                  </div>
                </div>
                <div className="my-2 col-lg-12 p-0">
                  <div className="d-grid gap-2">
                    <a
                      className="btn btn-outline-success"
                      href="https://narvs1999.github.io/PORTFOLIO/"
                      target={"_blank"}
                    >
                      DEMO
                    </a>
                    <a
                      className="btn btn-outline-info"
                      href="https://github.com/NARVS1999/PORTFOLIO/tree/main"
                      target={"_blank"}
                    >
                      CODE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 d-flex col-lg-4">
        <div className="shadow-lg border-dark card my-2" id="darkTheme">
          <div className="card-body row">
            <div className="">
              <div className="row mx-1">
                <div className="card border-dark my-2 p-0">
                  <div className="card-body p-1 text-center">
                    <img
                      className="img-fluid rounded"
                      src={rockPaperScissors}
                      alt="profile-photo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="row mx-1">
                <div className="my-2p-0">
                  <div className="">
                    <p className="my-2 ms-3 text-info">
                      <span className="text-dark textLight">
                        TECHNOLOGIES:{" "}
                      </span>
                      Vanilla JavaScript, HTML5, CSS3
                    </p>
                  </div>
                </div>
                <div className="my-2 p-0">
                  <div className="text-center text-md-start">
                    <h3 className="textLight">Rock Paper Scissors</h3>
                  </div>
                </div>
                <div className="my-2 col-lg-12 p-0">
                  <div className="">
                    <p className="text-secondary textParam">
                      This Project was created to practice the event JavaScript
                      and become familiar with this concept, this rock, paper,
                      and scissors project is responsive to any device, and easy
                      to play because of the layout of the user interface that I
                      created.
                    </p>
                  </div>
                </div>
                <div className="my-2 col-lg-12 p-0">
                  <div className="d-grid gap-2">
                    <a
                      className="btn btn-outline-success"
                      href="https://narvs1999.github.io/rock-paper-scissors-2.0/"
                      target={"_blank"}
                    >
                      DEMO
                    </a>
                    <a
                      className="btn btn-outline-info"
                      href="https://github.com/NARVS1999/rock-paper-scissors-2.0/tree/main"
                      target={"_blank"}
                    >
                      CODE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end */}
    </div>
  );
}

export default Project;
