import React, { useEffect } from "react";
import {useState} from "react";

function Navigation() {
  const [toggle, setToggle] = useState(false);
  let darkTheme = document.querySelectorAll('#darkTheme');
  let darkBackground = document.getElementById('darkBackground');
  let textLight = document.querySelectorAll('.textLight');
  let textParam = document.querySelectorAll('.textParam');



  const toogleButton = () => {
    setToggle(true);
    console.log(toggle);
  };

  useEffect(() => {
    if(toggle) {
      darkTheme.forEach(element => {
        element.classList.toggle('border-dark');
        element.classList.toggle('border-light');
        element.classList.toggle('bg-dark');
        // element.classList.toggle('border-3');
      });
      textLight.forEach(element => {
        element.classList.toggle('text-white');
        element.classList.toggle('text-opacity-55');
      });
      textParam.forEach(element => {
        element.classList.toggle('text-secondary');
        element.classList.toggle('text-white');
        element.classList.toggle('text-opacity-50');
      });
      darkBackground.classList.toggle('bg-info');
      darkBackground.classList.toggle('bg-opacity-50');
      darkBackground.classList.toggle('bg-opacity-55');
      darkBackground.classList.toggle('bg-dark');
      darkBackground.classList.toggle('bg-gradient');

      
      setToggle(false)
    }
  },[toggle]);
  return (
    <div className="shadow-lg border-dark border card my-2" id="darkTheme">
      <div className="card-body">
        <div className="form-check form-switch nav justify-content-end">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={toogleButton}
          />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
