import React, { useLayoutEffect } from "react";

function Spheres(props) {
  var score = 0;
  let rn4 = null;
  let hasRun = false;

  useLayoutEffect(() => {
    if (!hasRun) {
      hasRun = true;
      const generateUniqueRandomNumbers = () => {
        let temprn1 = Math.floor(Math.random() * 9) + 1;
        let temprn2 = Math.floor(Math.random() * 9) + 1;
        let temprn3 = Math.floor(Math.random() * 9) + 1;

        while (temprn1 == temprn2 || temprn2 == temprn3 || temprn1 == temprn3) {
          if (temprn1 == temprn2) temprn1 = Math.floor(Math.random() * 9) + 1;
          else if (temprn1 == temprn3)
            temprn1 = Math.floor(Math.random() * 9) + 1;
          else temprn2 = Math.floor(Math.random() * 9) + 1;
        }

        for (let i = 1; i <= 9; i++) {
          if (i != temprn1 && i != temprn2 && i != temprn3) {
            let element = document.getElementById(i + "");
            element.classList.add("hide");
            element.classList.remove("unhide");
          }
        }
        for (
          let i = 0;
          i < document.querySelectorAll(".sphere.unhide").length;
          i++
        ) {
          document
            .querySelectorAll(".sphere.unhide")
            [i].addEventListener("click", clickHandler);
        }
      };
      generateUniqueRandomNumbers();
    }
  }, [rn4]);

  const generateNewRandomNumber = () => {
    rn4 = Math.floor(Math.random() * 9) + 1;
  };

  const check = () => {
    while (
      rn4 == document.querySelectorAll(".sphere.unhide")[0].id ||
      rn4 == document.querySelectorAll(".sphere.unhide")[1].id ||
      rn4 == document.querySelectorAll(".sphere.unhide")[2].id
    ) {
      generateNewRandomNumber();
    }
    document.getElementById(rn4).classList.remove("hide");
    document.getElementById(rn4).classList.add("unhide");
    document.getElementById(rn4).addEventListener("click", clickHandler);
  };

  const clickHandler = (e) => {
    generateNewRandomNumber();
    check();
    e.target.classList.add("hide");
    e.target.classList.remove("unhide");
    e.target.removeEventListener("click", clickHandler);
    score = score + 1;
    props.updatescore(score);
  };

  return (
    <>
      <div className="column">
        <div className="sphere unhide" id="1"></div>
        <div className="sphere unhide" id="2"></div>
        <div className="sphere unhide" id="3"></div>
      </div>
      <div className="column">
        <div className="sphere unhide" id="4"></div>
        <div className="sphere unhide" id="5"></div>
        <div className="sphere unhide" id="6"></div>
      </div>
      <div className="column">
        <div className="sphere unhide" id="7"></div>
        <div className="sphere unhide" id="8"></div>
        <div className="sphere unhide" id="9"></div>
      </div>
    </>
  );
}

export default Spheres;
