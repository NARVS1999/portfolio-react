import React from "react";
import reactLogo from "../assets/logo/reactjs.png";
import reduxLogo from "../assets/logo/reduxLogo.png";
import bootstrap from "../assets/logo/bootstrap.png";
import javascript from "../assets/logo/javascript.png";
import cssLogo from "../assets/logo/css.png";
import htmlLogo from "../assets/logo/html-5.png";
import cSharp from "../assets/logo/cSharp.png";
import doteNet from "../assets/logo/netCore.png";
import typescript from "../assets/logo/Typescript.png";
import jQuery from "../assets/logo/jQuery.png";
import VisualStudioCode from "../assets/logo/visual-studio-code.png";
import visualStudio from "../assets/logo/visualStudio.png";
import githubLogo from "../assets/logo/GitHub.png";
import azureDevOpsLogo from "../assets/logo/azure.png";
import gitLogo from "../assets/logo/git.png";
import styles from "./Technology.module.css";
import php from "../assets/logo/php.png";
import vueJS from "../assets/logo/vueJS.png";
import angular from "../assets/logo/angular.png";
import aspNet from "../assets/logo/aspNet.png";
import sql from "../assets/logo/sql.png";
import laravel from "../assets/logo/laravel.png";
import bitbucket from "../assets/logo/bitbucket.png";
import aws from "../assets/logo/aws.png";
import mysql from "../assets/logo/mysql.png";
import microsoftsql from "../assets/logo/microsoftsql.png";
// import visualStudio from "../assets/logo/visualStudio.png"

function Technology() {
  return (
    <div className="shadow-lg border-dark card my-2 col-12" id="darkTheme">
      <div className="card-body">
        <div className="my-2 p-0">
          <div className="">
            <h5 className="textLight">TECHNOLOGIES</h5>
          </div>
        </div>
        <div className="my-2">
          <div className="text-center p-0" id="logoImg">
            <img
              title="JavaScript"
              className="m-2"
              src={javascript}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="TypeScript"
              className="m-2"
              src={typescript}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="C#"
              className="m-2"
              src={cSharp}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="PHP"
              className="m-2"
              src={php}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="SQL"
              className="m-2"
              src={sql}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="ReactJS"
              className="m-2"
              src={reactLogo}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="VueJS"
              className="m-2"
              src={vueJS}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="Angular"
              className="m-2"
              src={angular}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="jQuery"
              className="m-2"
              src={jQuery}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="ASP.NET"
              className="m-2"
              src={aspNet}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title=".Net Core"
              className="m-2"
              src={doteNet}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="Laravel"
              className="m-2"
              src={laravel}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="Bootstrap"
              className="m-2"
              src={bootstrap}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="CSS3"
              className="m-2"
              src={cssLogo}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="HTML5"
              className="m-2"
              src={htmlLogo}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="GitHub"
              className="m-2"
              src={githubLogo}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="Azure DevOps"
              className="m-2"
              src={azureDevOpsLogo}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="Bitbucket"
              className="m-2"
              src={bitbucket}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="AWS"
              className="m-2"
              src={aws}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="Git"
              className="m-2"
              src={gitLogo}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="Microsoft SQL Server"
              className="m-2"
              src={microsoftsql}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="MySQL"
              className="m-2"
              src={mysql}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="Visual Studio Code"
              className="m-2"
              src={VisualStudioCode}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
            <img
              title="Visual Studio 2022"
              className="m-2"
              src={visualStudio}
              style={{ width: 80 }}
              id={styles.logoImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
