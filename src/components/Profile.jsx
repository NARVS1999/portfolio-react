import React from "react";
import profilePhoto from "../assets/logo/tokyoProfile.png";

function Profile() {
  return (
    <div
      className="shadow-lg border-dark card my-2 col-12 border"
      id="darkTheme"
    >
      <div className="card-body row">
        <div className="col-lg-4">
          <div className="row mx-1">
            <div className="card border-dark my-2 p-0 border">
              <div className="card-body p-1 text-center">
                <img
                  className="img-fluid rounded"
                  src={profilePhoto}
                  alt="profile-photo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row mx-1">
            <div className="my-2 col-lg-6 p-0">
              <div className="" id="textLight">
                <h3 className="textLight">John Paul Narvasa</h3>
                <h6 className="textLight">Frontend Developer</h6>
              </div>
            </div>
            <div className="my-2 col-lg-5 offset-lg-1 p-0">
              <div className="">
                <p className="mb-0 textLight">
                  <i
                    className="bi bi-envelope-check-fill"
                    style={{ fontSize: 20 }}
                  />{" "}
                  johnpaulnarvasa6@gmail.com
                </p>
                <p className="mb-0 textLight">
                  <i className="b bi-github" style={{ fontSize: 20 }} />{" "}
                  github/NARVS1999
                </p>
                <p className="mb-0 textLight">
                  <i className="bi bi-telephone" style={{ fontSize: 20 }} />{" "}
                  09216447527
                </p>
              </div>
            </div>
            <div className="my-2 col-lg-12 p-0">
              <div className="">
                <p className="text-secondary textParam">
                  Hi, I'm John Paul. I am a Website developer, I love creating
                  something that gives value to me or to others in a good way.
                </p>
                <p className="text-secondary textParam">
                  I love programming because it continues learning career,
                  learning something new makes my day energize. and I love
                  connecting the dots to create valuable software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
